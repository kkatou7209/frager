import { describe, expect, it } from 'vitest';
import { Frager } from '@/api/frager';
import { setupServer } from 'msw/node';
import { http, HttpResponse } from 'msw';
describe.concurrent('lib/api/frager test', () => {

    it('correctly configure', async () => {

        const beaforeFunc = () => {};
        const afterFunc = () => {};

        // intial settings
        const frager = Frager.create()
            .header('Content-Type', 'application/json; charset=utf-8;')
            .headers({
                'Accept': 'application/json; charset=utf-8;',
                'Accept-Language': 'en-US,en;'
            })
            .base('https://api.example.com')
            .before(beaforeFunc)
            .after(afterFunc)
            .enableMock()
            .build();

        expect(frager['_config'].base).toEqual('https://api.example.com');
        expect(frager['_config'].headers).toEqual({
            'Content-Type': 'application/json; charset=utf-8;',
            'Accept': 'application/json; charset=utf-8;',
            'Accept-Language': 'en-US,en;'
        });
        expect(frager['_config'].before).toBe(beaforeFunc);
        expect(frager['_config'].after).toBe(afterFunc);
        expect(frager['_config'].mock).toBeTruthy();

        // clone
        const clone = frager.clone();
        expect(clone).not.toBe(frager);
        expect(clone['_config']).toEqual(frager['_config']);

        // clone with new base URL
        const newBase = frager.base('https://api2.example.com');
        expect(newBase).not.toBe(frager);
        expect(newBase['_config'].base).toEqual('https://api2.example.com');
        expect(newBase['_config'].headers).toEqual(frager['_config'].headers);

        // clone with new header
        const newHeader = frager.header('X-Custom-Header', 'custom-value');
        expect(newHeader).not.toBe(frager);
        expect(newHeader['_config'].base).toEqual(frager['_config'].base);
        expect(newHeader['_config'].headers).toEqual({
            ...frager['_config'].headers,
            'X-Custom-Header': 'custom-value'
        });

        // clone with new headers
        const newHeaders = frager.headers({
            'X-Custom-Header-2': 'custom-value-2',
            'X-Custom-Header-3': 'custom-value-3',
        });
        expect(newHeaders).not.toBe(frager);
        expect(newHeaders['_config'].base).toEqual(frager['_config'].base);
        expect(newHeaders['_config'].headers).toEqual({
            ...frager['_config'].headers,
            'X-Custom-Header-2': 'custom-value-2',
            'X-Custom-Header-3': 'custom-value-3',
        });

        // clone with new call back functions
        const newBeafore = frager.before(() => {});
        expect(newBeafore).not.toBe(frager);
        expect(newBeafore['_config'].base).toEqual(frager['_config'].base);
        expect(newBeafore['_config'].headers).toEqual(frager['_config'].headers);
        expect(newBeafore['_config'].before).not.toBe(frager['_config'].before);
        expect(newBeafore['_config'].after).toBe(frager['_config'].after);

        const newAfter = frager.after(() => {});
        expect(newAfter).not.toBe(frager);
        expect(newAfter['_config'].base).toEqual(frager['_config'].base);
        expect(newAfter['_config'].headers).toEqual(frager['_config'].headers);
        expect(newAfter['_config'].before).toBe(frager['_config'].before);
        expect(newAfter['_config'].after).not.toBe(frager['_config'].after);
    });

    it('callback functions work correctly', async () => {

        const frager = Frager.create()
            .base('https://api.example.com')
            .before((request) => {
                request.headers.set('X-Before', 'before-value');
            })
            .after((_, response) => {
                // clone response and add new header
                const newHeaders = new Headers(response.headers);
                newHeaders.set('X-After', 'after-value');

                return new Response(null, {
                    status: response.status,
                    statusText: response.statusText,
                    headers: newHeaders,
                });
            })
            .enableMock()
            .mocker(
                Frager.mocker()
                    .base('https://api.example.com')
                    .onGet('/test', (request) => {
                        expect(request.headers.get('X-Before')).toBe('before-value');
                        return new Response(null, {
                            status: 200,
                            headers: {
                                'Content-Type': 'application/json; charset=utf-8;',
                            }
                        });
                    })
                    .build()
            )
            .build();

        const client = frager.client();
        
        const response = await client
            .get('/test');

        expect(response.headers.get('X-After')).toBe('after-value');
    });

    it('mocker works correctly', async () => {

        const frager = Frager.create()
            .base('https://api.example.com')
            .enableMock()
            .mocker(
                Frager.mocker()
                    .base('https://api.example.com')
                    .onGet('/users', () => new Response(JSON.stringify({id: 1, name: 'User 1'}), {
                        status: 200,
                        headers: {
                            'Content-Type': 'application/json; charset=utf-8;',
                        }
                    }))
                    .onPost('/user', () => new Response(JSON.stringify({id: 2, name: 'User 2'}), {
                        status: 201,
                        headers: {
                            'Content-Type': 'application/json; charset=utf-8;',
                        }
                    }))
                    .build()
            )
            .build();

        const client = frager.client();

        const getResponse = await client
            .get('/users');

        expect(getResponse.status).toBe(200);
        expect(getResponse.headers.get('Content-Type')).toBe('application/json; charset=utf-8;');

        let data = await getResponse.json();
        expect(data).toEqual({id: 1, name: 'User 1'});

        const postResponse = await client
            .body({name: 'User 2'})
            .post('/user');

        expect(postResponse.status).toBe(201);
        expect(postResponse.headers.get('Content-Type')).toBe('application/json; charset=utf-8;');

        data = await postResponse.json();
        expect(data).toEqual({id: 2, name: 'User 2'});
    });

    it('fetch real API works correctly', async () => {

        const server = setupServer(
            http.get('http://localhost/users', () => {
                return HttpResponse.json({id: 1, name: 'User 1'}, {status: 200});
            }),
            http.post('http://localhost/user', () => {
                return HttpResponse.json({id: 2, name: 'User 2'}, {status: 201});
            }),
        );

        server.listen();

        const frager = Frager.create()
            .base('http://localhost')
            .build();

        const client = frager.client();

        const getResponse = await client
            .get('/users');

        expect(getResponse.status).toBe(200);
        expect(getResponse.headers.get('Content-Type')).toBe('application/json');

        let data = await getResponse.json();

        expect(data).toEqual({id: 1, name: 'User 1'});

        const postResponse = await client
            .body({name: 'User 2'})
            .post('/user');

        expect(postResponse.status).toBe(201);
        expect(postResponse.headers.get('Content-Type')).toBe('application/json');

        data = await postResponse.json();
        expect(data).toEqual({id: 2, name: 'User 2'});

        server.close();
    });
});

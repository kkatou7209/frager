import type { Client } from '@/client/client';
import { HttpClient } from '@/client/httpClient';
import { MockClient } from '@/client/mockClient';
import type { FragerConfig } from '@/config/config';
import { toBody, type FragerBody } from '@/http/body';
import type { HttpMethod } from '@/http/method';
import { normalizePath } from '@/route/normalize';
import { joinRoute } from '@/route/url';

/**
 * HTTP requester class in Frager.
 */
export class FragerRequester {

    private _config: FragerConfig;

    private _client: Client;

    private _body: FragerBody | null = null;

    private _params: Record<string, any> | null = null;

    private _aborter: AbortController;

    public constructor(config: FragerConfig, aborter: AbortController) {
        this._config = config;
        this._client = this._config.mock
            ? new MockClient(this._config.mocker)
            : new HttpClient();
        this._aborter = aborter;
    }

    /**
     * Set request body.
     * @param {FragerBody} body Request body.
     */
    public body = (body: FragerBody): FragerRequester => {
        this._body = body;
        return this;
    }

    /**
     * Set query parameters.
     * @param {Record<string, any>} params Query parameters.
     */
    public params = (params: Record<string, any>): FragerRequester => {
        this._params = params;
        return this;
    }

    /**
     * Set or replace header.
     * @param {string} name Header name.
     */
    public header = (name: string, value: string): FragerRequester => {
        this._config.headers = {
            ...this._config.headers,
            [name]: value
        }
        return this;
    }

    /**
     * Set or replace headers.
     * @param {Record<string, string>} headers Headers to set or replace.
     */
    public headers = (headers: Record<string, string>): FragerRequester => {
        this._config.headers = {
            ...this._config.headers,
            ...headers,
        }
        return this;
    }

    /**
     * Request with GET.
     * @param {string} url Request URL.
     */
    public get = (url: string) => {

        const request = this.createRequest(url, 'GET', this._body, this._params);

        return this.request(request);
    }

    /**
     * Request with POST.
     * @param {string} url Request URL.
     */
    public post = (url: string) => {

        const request = this.createRequest(url, 'POST', this._body, this._params);

        return this.request(request);
    }

    /**
     * Request with PUT.
     * @param {string} url Request URL.
     */
    public put = (url: string) => {

        const request = this.createRequest(url, 'PUT', this._body, this._params);

        return this.request(request);
    }

    /**
     * Request with PATCH.
     * @param {string} url Request URL.
     */
    public patch = (url: string) => {

        const request = this.createRequest(url, 'PATCH', this._body, this._params);

        return this.request(request);
    }

    /**
     * Request with DELETE.
     * @param {string} url Request URL.
     */
    public delete = (url: string) => {

        const request = this.createRequest(url, 'POST', this._body, this._params);

        return this.request(request);
    }

    /**
     * Request with HEAD.
     * @param {string} url Request URL.
     */
    public head = (url: string): Promise<Response> => {

        const request = this.createRequest(url, 'HEAD', this._body, this._params);

        return this.request(request);
    }

    /**
     * Request with TRACE.
     * @param {string} url Request URL.
     */
    public trace = (url: string): Promise<Response> => {

        const request = this.createRequest(url, 'TRACE', this._body, this._params);

        return this.request(request);
    }

    /**
     * Request with CONNECT
     * @param {string} url Request URL.
     */
    public connect = (url: string): Promise<Response> => {

        const request = this.createRequest(url, 'CONNECT', this._body, this._params);

        return this.request(request);
    }

    /**
     * Request with OPTIONS.
     * @param {string} url Request URL.
     */
    public options = (url: string): Promise<Response> => {

        const request = this.createRequest(url, 'OPTIONS', this._body, this._params);

        return this.request(request);
    }

    private request = async (request: Request): Promise<Response> => {

        const req = await this._config.before(request) ?? request;

        const res = await this._client.fetch(req);

        return await this._config.after(req, res) ?? res;
    }

    private createRequest = (path: string, method: HttpMethod, body: FragerBody | null, params: Record<string, any> | null): Request => {

        const data = !body ? null : toBody(body);

        let url = joinRoute(this._config.base ?? window.location.origin, normalizePath(path));

        for (const key in params ?? {}) {
            url += `?${key}=${params![key]}`;
        }

        const request = new Request(url, {
            method,
            body: data,
            headers: {...this._config.headers},
            cache: this._config.cache,
            signal: this._aborter.signal,
            credentials: this._config.credentials,
        });

        return request;
    }
}
import type { Client } from '@/client/client';
import { HttpClient } from '@/client/httpClient';
import { MockClient } from '@/client/mockClient';
import type { FragerAfterCallback, FragerBeforeCallback, FragerConfig } from '@/config/config';
import { toBody, type FragerBody } from '@/http/body';
import type { HttpMethod } from '@/http/method';
import { joinRoute } from '@/route/url';
import { FragerBuilder } from './builder';

/**
 * HTTP client class in Frager.
 */
export class Frager {

    private _config: FragerConfig;

    private _client: Client;

    public constructor(config: FragerConfig) {
        this._config = config;
        this._client = this._config.mock ? new MockClient() : new HttpClient();
    }

    /**
     * Get Farger builder.
     */
    public static create = (): FragerBuilder => new FragerBuilder();
    
    /**
     * Request with GET.
     */
    public get = (url: string) => {

        const request = this.createRequest(url, 'GET');

        return this.request(request);
    }

    /**
     * Request with POST.
     */
    public post = (url: string, body: FragerBody | null = null) => {

        const request = this.createRequest(url, 'POST', body);

        return this.request(request);
    }

    /**
     * Request with PUT.
     */
    public put = (url: string, body: FragerBody | null = null) => {

        const request = this.createRequest(url, 'POST', body);

        return this.request(request);
    }

    /**
     * Request with DELETE.
     */
    public delete = (url: string) => {

        const request = this.createRequest(url, 'POST');

        return this.request(request);
    }

    /**
     * Request with HEAD.
     */
    public head = (url: string): Promise<Response> => {

        const request = this.createRequest(url, 'HEAD');

        return this.request(request);
    }

    /**
     * Request with TRACE.
     */
    public trace = (url: string): Promise<Response> => {

        const request = this.createRequest(url, 'TRACE');

        return this.request(request);
    }

    /**
     * Request with CONNECT
     */
    public connect = (url: string): Promise<Response> => {

        const request = this.createRequest(url, 'CONNECT');

        return this.request(request);
    }

    /**
     * Request with OPTIONS.
     */
    public options = (url: string): Promise<Response> => {

        const request = this.createRequest(url, 'OPTIONS');

        return this.request(request);
    }

    /**
     * Create cloned instance.
     */
    public clone = (): Frager => {
        return new Frager({...this._config});
    }

    /**
     * Create new instance with new base URL.
     */
    public base = (url: string): Frager => {
        return this.cloneWithOverriding({...this._config, base:url});
    }

    /**
     * Create new instance with replacing or setting new header.
     */
    public header = (name: string, value: string): Frager => {
        return this.cloneWithOverriding({
            ...this._config,
            headers: {
                ...this._config.headers,
                [name]: value,
            }
        });
    }

    /**
     * Create new instance with replacing and setting new headers.
     */
    public headers = (headers: Record<string, string>): Frager => {
        return this.cloneWithOverriding({
            ...this._config,
            headers: {
                ...this._config.headers,
                ...headers,
            }
        });
    }

    /**
     * Create new instance with setting new call back function to execute 
     * before request.
     */
    public before = (callback: FragerBeforeCallback): Frager => {
        return this.cloneWithOverriding({...this._config, beafore: callback});
    }

    /**
     * Create new instance with setting new call back function to execute 
     * after request.
     */
    public after = (callback: FragerAfterCallback): Frager => {
        return this.cloneWithOverriding({...this._config, after: callback});
    }

    private request = async (request: Request): Promise<Response> => {

        const resuest = await this._config.beafore(request) ?? request;

        const response = await this._client.fetch(resuest);

        return await this._config.after(request, response) ?? response;
    }

    private createRequest = (url: string, method: HttpMethod, body: FragerBody | null = null): Request => {

        const data = !body ? null : toBody(body);

        const request = new Request(joinRoute(this._config.base, url), {
            method,
            body: data,
            headers: {...this._config.headers},
        });

        return request;
    }

    private cloneWithOverriding = (config: FragerConfig): Frager => {

        return new Frager({...this._config, ...config});
    }
}
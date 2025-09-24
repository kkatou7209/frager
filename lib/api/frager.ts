import type { FragerAfterCallback, FragerBeforeCallback, FragerConfig } from '@/config/config';
import { FragerBuilder } from '@/api/builder';
import { FragerRequester } from '@/api/requester';
import { FragerMockerBuilder } from '@/api/mock/builder';

/**
 * HTTP client class in Frager.
 */
export class Frager {

    private _config: FragerConfig;

    private _aborter: AbortController = new AbortController();

    public constructor(config: FragerConfig) {
        this._config = config;
    }

    /**
     * Get Farger builder.
     */
    public static create = (): FragerBuilder => new FragerBuilder();

    /**
     * Get FragerMocker builder.
     */
    public static mocker = (): FragerMockerBuilder => new FragerMockerBuilder();

    /**
     * Get HTTP client.
     */
    public client = (): FragerRequester => new FragerRequester(this._config, this._aborter);

    /**
     * Create cloned instance.
     */
    public clone = (): Frager => {
        return new Frager({...this._config});
    }

    /**
     * Create new instance with new base URL.
     * 
     * @param {string} url New base URL.
     */
    public base = (url: string): Frager => {
        return this.cloneWithOverriding({...this._config, base:url});
    }

    /**
     * Create new instance with replacing or setting new header.
     * @param {string} name Header name.
     * @param {string} value Header value.
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
     * Create new instance with setting credentials mode.
     * @param {RequestCredentials} mode Credentials mode.
     */
    public credentials = (mode: RequestCredentials): Frager => {
        return this.cloneWithOverriding({...this._config, credentials: mode});
    }

    /**
     * Create new instance with enabling or disabling mock.
     * @param {RequestCache} mode Cache mode.
     */
    public cache = (mode: RequestCache): Frager => {
        return this.cloneWithOverriding({...this._config, cache: mode});
    }

    /**
     * Create new instance with enabling mock.
     */
    public enableMock = (): Frager => {
        return this.cloneWithOverriding({...this._config, mock: true});
    }

    /**
     * Create new instance with disabling mock.
     */
    public disableMock = (): Frager => {
        return this.cloneWithOverriding({...this._config, mock: false});
    }

    /**
     * Create new instance with setting new call back function to execute 
     * before request.
     * @param {FragerBeforeCallback} callback Call back function to execute before request.
     */
    public before = (callback: FragerBeforeCallback): Frager => {
        return this.cloneWithOverriding({...this._config, before: callback});
    }

    /**
     * Create new instance with setting new call back function to execute 
     * after request.
     * @param {FragerAfterCallback} callback Call back function to execute after request.
     */
    public after = (callback: FragerAfterCallback): Frager => {
        return this.cloneWithOverriding({...this._config, after: callback});
    }

    private cloneWithOverriding = (config: FragerConfig): Frager => {

        return new Frager({...this._config, ...config});
    }
}
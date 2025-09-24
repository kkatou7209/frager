import type { FragerAfterCallback, FragerBeforeCallback, FragerConfig, RequestReferrer } from '@/config/config';
import { defaultConfig } from '@/config/default';
import { Frager } from '@/api/frager';
import { FragerMocker } from '@/api/mock/mocker';

/**
 * Builder of Frager.
 */
export class FragerBuilder {

    private _config: FragerConfig = { ...defaultConfig };

    /**
     * Set base URL of all requests.
     */
    public base = (url: string): FragerBuilder => {
        this._config.base = url;
        return this;
    }

    /**
     * Set new header.
     */
    public header = (name: string, value: string): FragerBuilder => {
        this._config.headers = {
            ...this._config.headers,
            [name]: value
        }
        return this;
    }

    /**
     * Set new headers.
     */
    public headers = (headers: Record<string, string>): FragerBuilder => {
        this._config.headers = {
            ...this._config.headers,
            ...headers,
        }
        return this;
    }

    /**
     * Set request mode.
     * @param {RequestMode} mode Request mode.
     */
    public mode = (mode: RequestMode): FragerBuilder => {
        this._config.mode = mode;
        return this;
    }

    /**
     * Set credentials mode.
     */
    public credentials = (mode: RequestCredentials): FragerBuilder => {
        this._config.credentials = mode;
        return this;
    }

    /**
     * Set cache mode.
     */
    public cache = (mode: RequestCache): FragerBuilder => {
        this._config.cache = mode;
        return this;
    }

    /**
     * Set request priority.
     * @param {RequestPriority} priority Request priority.
     */
    public priority = (priority: RequestPriority): FragerBuilder => {
        this._config.priority = priority;
        return this;
    }

    /**
     * Set request redirect mode.
     * @param {RequestRedirect} redirect Request redirect mode.
     */
    public redirect = (redirect: RequestRedirect): FragerBuilder => {
        this._config.redirect = redirect;
        return this;
    }

    /**
     * Set request referrer.
     * @param {RequestReferrer} referrer Request referrer.
     */
    public referrer = (referrer: RequestReferrer): FragerBuilder => {
        this._config.referrer = referrer;
        return this;
    }

    /**
     * Set referrer policy.
     * @param {ReferrerPolicy} policy Referrer policy.
     */
    public referrerPolicy = (policy: ReferrerPolicy): FragerBuilder => {
        this._config.referrerPolicy = policy;
        return this;
    }

    /**
     * Set keepalive flag.
     * @param {boolean} keepalive 
     */
    public keepalive = (keepalive: boolean): FragerBuilder => {
        this._config.keepalive = keepalive;
        return this;
    }

    /**
     * Enable mocking.
     */
    public enableMock = (): FragerBuilder => {
        this._config.mock = true;
        return this;
    }

    /**
     * Register callback before each request.
     */
    public before = (callback: FragerBeforeCallback): FragerBuilder => {
        this._config.before = callback;
        return this;
    }

    /**
     * Register callback after each request.
     */
    public after = (callback: FragerAfterCallback): FragerBuilder => {
        this._config.after = callback;
        return this;
    }

    /**
     * Create new Frager instance with configured settings.
     */
    public build = () => new Frager({ ...this._config });

    /**
     * Set mocker instance.
     */
    public mocker = (mocker: FragerMocker): FragerBuilder => {
        this._config.mocker = mocker;
        return this;
    }
}
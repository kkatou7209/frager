import type { FragerAfterCallback, FragerBeforeCallback, FragerConfig } from '@/config/config';
import { defaultConfig } from '@/config/default';
import { Frager } from './frager';

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
     * Enable mocking.
     */
    public enableMock = (): FragerBuilder => {
        this._config.mock = true;
        return this;
    }

    /**
     * Register callback before each request.
     */
    public beafore = (callback: FragerBeforeCallback): FragerBuilder => {
        this._config.beafore = callback;
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
}
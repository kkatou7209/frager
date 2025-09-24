import type { FragerMocker } from "@/api/mock/mocker";

export type FragerBeforeCallback = (request: Request) => Promise<Request | void> | (Request | void);

export type FragerAfterCallback = (request: Request, response: Response) => Promise<Response | void> | (Response | void);

/**
 * Configuration of Frager.
 */
export type FragerConfig = {
    /**
     * Base URL of every request. Default is `''`.
     */
    base: string;
    /**
     * Enable mock. Default is `false`.
     */
    mock: boolean;
    /**
     * Common headers.
     */
    headers: Record<string, string>;
    /**
     * Cache mode. Default is `'default'`.
     */
    cache: RequestCache;
    /**
     * Credentials mode. Default is `'same-origin'`.
     */
    credentials: RequestCredentials;
    /**
     * Register execution before request. By default, do nothing.
     */
    before: FragerBeforeCallback;
    /**
     * Register execution after request. By default, do nothing.
     */
    after: FragerAfterCallback;
    /**
     * Mocker instance for handling mock requests.
     */
    mocker: FragerMocker;
}
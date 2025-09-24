import type { FragerMocker } from "@/api/mock/mocker";

export type FragerBeforeCallback = (request: Request) => Promise<Request | void> | (Request | void);

export type FragerAfterCallback = (request: Request, response: Response) => Promise<Response | void> | (Response | void);

export type RequestReferrer = 'auto:client' | '' | string;

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
     * Request mode. Default is `cors`.
     */
    mode: RequestMode;
    /**
     * Cache mode. Default is `'default'`.
     */
    cache: RequestCache;
    /**
     * Credentials mode. Default is `'same-origin'`.
     */
    credentials: RequestCredentials;
    /**
     * Request priority. Default is `'auto'`.
     */
    priority: RequestPriority;
    /**
     * Request redirect mode. Default is `'follow'`.
     */
    redirect: RequestRedirect;
    /**
     * Referrer policy. Default is `'auto:client'`.
     */
    referrer: RequestReferrer;
    /**
     * Referrer policy. Default is `'no-referrer'`.
     */
    referrerPolicy: ReferrerPolicy;
    /**
     * Keepalive flag. Default is `false`.
     */
    keepalive: boolean;
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
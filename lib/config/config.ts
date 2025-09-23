export type FragerBeforeCallback = (request?: Request) => Promise<Request | void> | (Request | void);

export type FragerAfterCallback = (request: Request, response?: Response) => Promise<Response | void> | (Response | void);

/**
 * Configuration of Frager.
 */
export type FragerConfig = {
    /**
     * Base URL of every request.
     */
    base: string;
    /**
     * Enable mock.
     */
    mock: boolean;
    /**
     * Common headers.
     */
    headers: Record<string, string>;
    /**
     * Register execution before request.
     */
    beafore: FragerBeforeCallback;
    /**
     * Register execution after request.
     */
    after: FragerAfterCallback;
}
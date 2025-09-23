export interface Client {
    fetch: (request: Request) => Promise<Response>;
}
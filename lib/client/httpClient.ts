import type { Client } from '@/client/client';

export class HttpClient implements Client {

    public fetch = async (request: Request): Promise<Response> => {

        return window.fetch(request);
    }
}
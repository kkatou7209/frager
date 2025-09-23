import type { Client } from '@/client/client';

export class MockClient implements Client {

    public fetch = async (_: Request): Promise<Response> => {

        return new Response();
    }
}
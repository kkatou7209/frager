import type { Client } from '@/client/client';
import type { FragerMocker } from '@/api/mock/mocker';

export class MockClient implements Client {

    private _mocker: FragerMocker;

    public constructor(mocker: FragerMocker) {
        this._mocker = mocker;
    }

    public fetch = async (request: Request): Promise<Response> => {

        return await this._mocker.handle(request);
    }
}
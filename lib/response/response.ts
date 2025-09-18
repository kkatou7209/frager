export class FragerResponse {

    private _res: Response;

    public constructor(res: Response) {
        this._res = res;
    }

    /**
     * Get response data as json.
     * @returns `T`
     * @template T
     */
    public json = async <T>(): Promise<T> => {
        return await this._res.json() as T;
    }
}
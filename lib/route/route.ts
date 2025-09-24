import { normalizePath } from '@/route/normalize';
import { routeToPattern } from './pattern';
import type { HttpMethod } from '@/http/method';

export class Route {

    private _method: HttpMethod;
    
    private _path: string;

    private _pattern: RegExp;

    public constructor(method: HttpMethod, path: string) {
        this._method = method;
        this._path = normalizePath(path);
        this._pattern = routeToPattern(this._path);
    }

    public path = (): string => this._path;

    public method = (): HttpMethod => this._method;

    public match = (method: HttpMethod, path: string): boolean => {
        return this._method === method && this._pattern.test(path);
    }
}
import type { HttpMethod } from '@/http/method';
import { normalizePath } from '@/route/normalize';
import { Route } from'@/route/route';

export type MockerCallback = (request: Request) => Response | Promise<Response>;

export type MockerRoute = {
    route: Route;
    callback: MockerCallback;
}

export class FragerMocker {

    private _base: string = '';

    private _routes: MockerRoute[] = [];

    public constructor(base: string, routes: MockerRoute[]) {
        this._base = base;
        this._routes = routes;
    }

    public hasRoute = (method: HttpMethod, url: string): boolean => {

        const path = normalizePath(url.replace(this._base, ''));

        return this._routes.some(r => r.route.match(method, path));
    }

    public handle = async (request: Request): Promise<Response> => {

        const url = new URL(request.url);
        const path = normalizePath(url.pathname.replace(this._base, ''));
        const method = request.method.toUpperCase() as HttpMethod;

        const route = this._routes.find(r => r.route.match(method, path));

        if (!route) {
            return new Response(null, {
                status: 404,
                statusText: 'Not Found'
            });
        }

        return await route.callback(request);
    }
}
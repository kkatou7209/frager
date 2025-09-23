import type { HttpMethod } from '@/http/method';
import { routeToPattern } from '@/route/pattern';

export type QueryParameter = {
    name: string;
    required: boolean;
}

export type Route = {
    pattern: RegExp;
    method: HttpMethod;
    params: Record<string, QueryParameter>;
}

export class FragerRoutes {

    private _routes: Readonly<Route>[];

    public constructor(...routes: Route[]) {
        this._routes = [...routes];
    }

    /**
     * Check if a route exists.
     */
    public has = (path: string, method: HttpMethod): boolean => {

        for (const r of this._routes) {

            if (r.pattern.test(path) && method === r.method) {
                return true;
            }
        }

        return false;
    }

    /**
     * Set a new route.
     */
    public set = ({ path, method, params }: { path: string, method: HttpMethod, params: Record<string, QueryParameter> }): void => {

        const route: Route = {
            pattern: routeToPattern(path),
            method,
            params: {...params}
        };

        this._routes.push(route);
    }

    /**
     * Get a existing route.
     * 
     * When matched multiple routes, return the route matched longest.
     */
    public get = ({ path, method, params = {} }: { path: string, method: HttpMethod, params?: Record<string, string> }): Readonly<Route> | null => {

        const matched: { count: number; route: Route}[] = [];

        for (const r of this._routes) {

            if (r.pattern.test(path) && method === r.method) {

                let hasRequiredParams = true;

                for (const param of Object.keys(r.params)) {
                    if (!r.params[param]?.required && !params[param]) {
                        hasRequiredParams = false;
                    }
                }

                if (!hasRequiredParams) continue;

                matched.push({ count: [...path.matchAll(r.pattern)].length, route: r})

                return r;
            }
        }

        if (matched.length === 0) return null;

        return matched.reduce((a, b) => a.count > b.count ? a : b).route;
    }
}
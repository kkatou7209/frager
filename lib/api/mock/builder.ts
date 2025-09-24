import { Route } from '@/route/route';
import { FragerMocker, type MockerCallback } from '@/api/mock/mocker';

export class FragerMockerBuilder {

    private _base: string = '';
        
    private _routes: {
        route: Route;
        callback: MockerCallback;
    }[] = [];

    /**
     * Set base URL of all requests.
     */
    public base = (url: string): FragerMockerBuilder => {
        this._base = url;
        return this;
    }

    /**
     * Set mocker for GET request.
     */
    public onGet = (path: string, callback: MockerCallback): FragerMockerBuilder => {
        this._routes.push({
            route: new Route('GET', path),
            callback
        });
        return this;
    }

    /**
     * Set mocker for POST request
     */
    public onPost = (path: string, callback: MockerCallback): FragerMockerBuilder => {
        this._routes.push({
            route: new Route('POST', path),
            callback
        });
        return this;
    }

    /**
     * Set mocker for PUT request
     */
    public onPut = (path: string, callback: MockerCallback): FragerMockerBuilder => {
        this._routes.push({
            route: new Route('PUT', path),
            callback
        });
        return this;
    }

    /**
     * Set mocker for DELETE request
     */
    public onDelete = (path: string, callback: MockerCallback): FragerMockerBuilder => {
        this._routes.push({
            route: new Route('DELETE', path),
            callback
        });
        return this;
    }

    /**
     * Set mocker for HEAD request
     */
    public onHead = (path: string, callback: MockerCallback): FragerMockerBuilder => {
        this._routes.push({
            route: new Route('HEAD', path),
            callback
        });
        return this;
    }

    /**
     * Set mocker for TRACE request
     */
    public onTrace = (path: string, callback: MockerCallback): FragerMockerBuilder => {
        this._routes.push({
            route: new Route('TRACE', path),
            callback
        });
        return this;
    }

    /**
     * Set mocker for CONNECT request
     */
    public onConnect = (path: string, callback: MockerCallback): FragerMockerBuilder => {
        this._routes.push({
            route: new Route('CONNECT', path),
            callback
        });
        return this;
    }

    /**
     * Set mocker for OPTIONS request
     */
    public onOptions = (path: string, callback: MockerCallback): FragerMockerBuilder => {
        this._routes.push({
            route: new Route('OPTIONS', path),
            callback
        });
        return this;
    }

    /**
     * Create mocker instance.
     */
    public build = (): FragerMocker => {
        return new FragerMocker(this._base, this._routes);
    }
}
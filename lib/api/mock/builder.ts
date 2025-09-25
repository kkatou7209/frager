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
     * @param {string} url Base URL.
     */
    public base = (url: string): FragerMockerBuilder => {
        this._base = url;
        return this;
    }

    /**
     * Set mocker for GET request.
     * @param {string} path 
     * @param {MockerCallback} callback 
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
     * @param {string} path
     * @param {MockerCallback} callback
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
     * @param {string} path 
     * @param {MockerCallback} callback 
     */
    public onPut = (path: string, callback: MockerCallback): FragerMockerBuilder => {
        this._routes.push({
            route: new Route('PUT', path),
            callback
        });
        return this;
    }

    /**
     * Set mocker for PATCH request
     * @param {string} path 
     * @param {MockerCallback} callback 
     */
    public onPatch = (path: string, callback: MockerCallback): FragerMockerBuilder => {
        this._routes.push({
            route: new Route('PATCH', path),
            callback
        });
        return this;
    }

    /**
     * Set mocker for DELETE request
     * @param {string} path 
     * @param {MockerCallback} callback
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
     * @param {string} path 
     * @param {MockerCallback} callback
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
     * @param {string} path 
     * @param {MockerCallback} callback
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
     * @param {string} path 
     * @param {MockerCallback} callback
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
     * @param {string} path 
     * @param {MockerCallback} callback
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
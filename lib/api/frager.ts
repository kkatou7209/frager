import { FragerResponse } from '@/response/response';
import { joinUrl } from '@/url/joinUrl';

export class Frager {

    private _base: string = '';

    public get = async (url: string): Promise<FragerResponse> => {

        const res = await fetch(joinUrl(this._base, url));

        return new FragerResponse(res);
    }

    public base = (url: string): Frager => {

        const newInstance = new Frager();

        newInstance._base = url;

        return newInstance;
    }
}
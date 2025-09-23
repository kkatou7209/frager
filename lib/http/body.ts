export type FragerBody = BodyInit & Record<string, string> & Array<any>;

export function toBody(body: FragerBody): BodyInit {

    if (typeof body === 'object' && !(body instanceof Blob) && !(body instanceof FormData)) {

        return JSON.stringify(body);
    }

    return body;
}
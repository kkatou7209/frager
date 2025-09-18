export function joinUrl(...urls: string[]): string {

    const url = urls.join('/');

    return url.replaceAll(/\/\/+/g, '/');
}
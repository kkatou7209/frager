/**
 * Join paths
 */
export function joinRoute(...paths: string[]): string {

    return paths.join('/').replaceAll(/\/\/+/g, '/');
}
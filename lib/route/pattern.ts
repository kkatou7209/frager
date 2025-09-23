/**
 * Convert route to regular expression.
 * 
 * @example
 * 
 * ```ts
 * const pattern = touteToPattern('/api/user/{id}/post/{postId}');
 * // => /^\/api\/user\/[^\/]+\/post\/[^\/]+$/
 * ```
 */
export function routeToPattern(route: string): RegExp {

    const pattern = '^' + route.replaceAll(/\{[0-9a-zA-Z]+\}/g, '[^\\/]+') + '$';

    return new RegExp(pattern);
}
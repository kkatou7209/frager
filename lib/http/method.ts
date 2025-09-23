export const methods = [
    'GET',
    'POST',
    'PUT',
    'DELETE',
    'HEAD',
    'TRACE',
    'OPTIONS',
    'CONNECT',
] as const;

export type HttpMethod = typeof methods[number];
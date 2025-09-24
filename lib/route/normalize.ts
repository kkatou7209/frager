export function normalizePath(path: string): string {
    
    if (!path.startsWith('/')) {
        path = '/' + path;
    }

    if (path.length > 1 && path.endsWith('/')) {
        path = path.slice(0, -1);
    }

    return path;
}
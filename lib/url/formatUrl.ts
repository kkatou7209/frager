import { FragerUrlFormatError } from "@/errors";

export type FormatParams = Record<string |symbol, any>;

export function formatUrl<T extends FormatParams>(urlf: string, params: T): string {

    const keys = emunKeys<T>(params);

    const embedParams = new Set(enumParams(urlf));

    let replaced = urlf;

    for (const embed of embedParams) {

        if (!keys.includes(embed)) {
            throw new FragerUrlFormatError(`value of param ${embed} was not provided.`);
        }

        const index = keys.indexOf(embed) as keyof typeof keys;

        const key = keys[index] as keyof T;

        replaced = replaced.replaceAll(new RegExp(`(:${embed}|\\{${embed}\\})`, 'g'), `${params[key]}`);
    }

    return replaced;
}

function emunKeys<T extends FormatParams>(params: T): (keyof typeof params)[] {
    return Object.keys(params) as (keyof typeof params)[];
}

function enumParams(urlf: string): string[] {

    const matches = [
        ...urlf.matchAll(/:([a-zA-Z0-9]+)/g),
        ...urlf.matchAll(/\{([a-zA-Z0-9]+)\}/g)
    ].map(m => m[1]!);

    return [...new Set(matches)]
}
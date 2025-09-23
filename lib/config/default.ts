import type { FragerConfig } from '@/config/config';

export const defaultConfig: FragerConfig = {
    base: '',
    headers: {},
    mock: false,
    beafore: () => {},
    after: () =>{},
} as const;
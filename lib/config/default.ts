import type { FragerConfig } from '@/config/config';
import { FragerMocker } from '@/api/mock/mocker';

export const defaultConfig: FragerConfig = {
    base: '',
    headers: {},
    mock: false,
    cache: 'default',
    credentials: 'same-origin',
    before: () => {},
    after: () =>{},
    mocker: new FragerMocker('', []),
} as const;
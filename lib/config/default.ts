import type { FragerConfig } from '@/config/config';
import { FragerMocker } from '@/api/mock/mocker';

export const defaultConfig: FragerConfig = {
    base: '',
    headers: {},
    mock: false,
    cache: 'default',
    mode: 'cors',
    priority: 'auto',
    redirect: 'follow',
    credentials: 'same-origin',
    referrer: 'auto:client',
    keepalive: false,
    referrerPolicy: 'no-referrer',
    before: () => {},
    after: () =>{},
    mocker: new FragerMocker('', []),
} as const;
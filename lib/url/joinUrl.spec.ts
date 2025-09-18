import { describe, expect, it } from 'vitest';
import { joinUrl } from '@/url/joinUrl';

describe.concurrent('url/joinUrl', () => {

    it('join url correctly', async () => {

        expect(joinUrl('/base/', '/api/', 'user/'))
            .toEqual('/base/api/user/');
    });
});
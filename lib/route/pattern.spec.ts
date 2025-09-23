import { describe, expect, it } from 'vitest';
import { routeToPattern } from '@/route/pattern';

describe.concurrent('lib/routes/pattern test', () => {

    it('convert path to correct pattern', async () => {

        const pattern = routeToPattern('/api/user/{id}/post/{postId}');

        expect(pattern.source).toEqual('^\\/api\\/user\\/[^\\/]+\\/post\\/[^\\/]+$');

        expect(pattern.test('/api/user/8429847293/post/7498702')).toBeTruthy();
    });
});
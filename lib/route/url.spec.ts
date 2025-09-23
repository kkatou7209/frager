import { describe, expect, it } from 'vitest';
import { joinRoute } from '@/route/url';

describe.concurrent('lib/route/url test', () => {

    it('join all paths with single slash(/)', async () => {

        const url = joinRoute('/api', 'user', '/{id}', '//post', '{postId}/');

        expect(url).toEqual('/api/user/{id}/post/{postId}/');
    });
});
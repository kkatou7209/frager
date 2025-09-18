import { describe, expect, it } from 'vitest';
import { formatUrl } from '@/url/formatUrl';

describe.concurrent('url/formatUrl', () => {

    it('format url with params', async () => {
        
        expect(formatUrl('/api/user/:id/post/{postId}/:89jr/{98d}', { id: '73514', postId: '87389', '89jr': 500, '98d': 900 }))
            .toEqual('/api/user/73514/post/87389/500/900');
    });
});
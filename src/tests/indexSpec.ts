import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Testing index.ts', (): void => {
    describe('Test accessing home page', (): void => {
        it('should return status 200 for home page request', async (): Promise<void> => {
            const response = await request.get('/');
            expect(response.status).toBe(200);
        });
    });

    describe('Test accessing original images', (): void => {
        it('should return status 200 for /api?imageName=fjord', async (): Promise<void> => {
            const response = await request.get('/api?imageName=fjord');
            expect(response.status).toBe(200);
        });

        it('should return status 200 for /api?imageName=palmtunnel', async (): Promise<void> => {
            const response = await request.get('/api?imageName=palmtunnel');
            expect(response.status).toBe(200);
        });
    });

    describe('Test resizing images', (): void => {
        it('should return status 200 for /api?imageName=fjord&width=200&height=300', async (): Promise<void> => {
            const response = await request.get(
                '/api?imageName=fjord&width=200&height=300'
            );
            expect(response.status).toBe(200);
        });

        it('should return status 200 for /api?imageName=palmtunnel&width=500&height=600', async (): Promise<void> => {
            const response = await request.get(
                '/api?imageName=palmtunnel&width=500&height=600'
            );
            expect(response.status).toBe(200);
        });
    });
});

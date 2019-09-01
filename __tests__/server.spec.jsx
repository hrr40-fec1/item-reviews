import request from 'supertest';
import app from '../server';

describe('api', () => {
  describe('get /api/product/:productId/reviews', () => {
    it('should return a 200', () => {
      request(app).get('/api/product/10/reviews').then((res) => {
        expect(res.statusCode).toBe(200);
      });
    });

    it('should return a 400 if the review doesn\'t exist', () => {
      request(app).get('/api/product/101/reviews').then((res) => {
        expect(res.statusCode).toBe(400);
      });
    });
  });
});

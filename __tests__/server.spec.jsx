import request from 'supertest';
import app from '../server';

describe('api', () => {
  describe('get /api/product/reviews?productId=10', () => {
    it('should return a 200', () => {
      request(app).get('/api/product/reviews?productId=10').then((res) => {
        expect(res.statusCode).toBe(200);
      });
    });
  });
});

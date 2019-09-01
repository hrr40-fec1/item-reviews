import request from 'supertest';
import app from '../server';

describe('api', () => {
  describe('get /api/product/reviews', () => {
    it('should return a 200', () => {
      request(app).get('/api/product/reviews?productId=10').then((res) => {
        expect(res.statusCode).toBe(200);
      });
    });

    it('should return a 400 if the review doesn\'t exist', () => {
      request(app).get('/api/product/reviews?productId=101').then((res) => {
        expect(res.statusCode).toBe(400);
      });
    });
  });
});

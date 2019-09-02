import request from 'supertest';
import app from '../server/index';

describe('app get ', () => {
  describe('get /', () => {
    it('should return a 200 for server root', async (done) => {
      const response = await request(app).get('/');
      expect(response.statusCode).toBe(200);
      done();
    });

    it('should return a 404 if the route doesn\'t exist', async (done) => {
      const response = await request(app).get('/api');
      expect(response.statusCode).toBe(404);
      done();
    });
  });
});

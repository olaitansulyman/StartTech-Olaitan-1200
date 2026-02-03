const request = require('supertest');
const app = require('./server');

describe('API Endpoints', () => {
  test('GET /health should return healthy status', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('healthy');
  });

  test('GET /api/status should return success message', async () => {
    const res = await request(app).get('/api/status');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('StartTech API is running!');
  });
});

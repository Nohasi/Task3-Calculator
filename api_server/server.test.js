const http = require('http');
const request = require('supertest');
const app = require('./server');

describe('POST request', () => {
    it('should properly return a correct result if correct values are passed as addition', async () => {
        const res = await request(app)
            .post('/calculator')
            .send({
                number1: 15,
                number2: 10,
                operator: '+'
            })
        expect(res.body.result).toEqual(25);
    });
});

afterAll(done => {
    app.close();
    done();
});
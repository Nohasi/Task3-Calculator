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

    it('should return a positive number when multiplying two negatives', async () => {
        const res = await request(app)
        .post('/calculator')
        .send({
            number1: -1.5,
            number2: -3,
            operator: '*'
        })
        expect(res.body.result).toEqual(4.5);
    });
});

afterAll(done => {
    app.close();
    done();
});
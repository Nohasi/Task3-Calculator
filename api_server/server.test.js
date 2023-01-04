const http = require('http');
const request = require('supertest');
const app = require('./server');

describe('GET request', () => {
    it('should not connect to the server', async () => {
        const res = await request(app)
        .get('/calculator')
    expect(res.status).toEqual(404);
    });
});

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

    it('should properly return a value when numbers are passed as strings', async () => {
        const res = await request(app)
        .post('/calculator')
        .send({
            number1: '15',
            number2: '10',
            operator: '-'
        })
    expect(res.body.result).toEqual(5);
    });
    
    describe('Catching invalid requests', () => {
        it('should return an error when attempting to divide by 0', async () => {
            const res = await request(app)
            .post('/calculator')
            .send({
                number1: 4090,
                number2: 0,
                operator: '/'
            })
            expect(res.status).toEqual(406);
        });
        it('should return an error when attempting to pass a non-operator', async () => {
            const res = await request(app)
            .post('/calculator')
            .send({
                number1: 4,
                number2: 5,
                operator: 'helloworld'
            })
            expect(res.status).toEqual(406);
        });
        it('should return an error when attempting to pass a non-numerical value as a number', async () => {
            const res = await request(app)
            .post('/calculator')
            .send({
                number1: "22 is a number",
                number2: 21,
                operator: '+'
            })
            expect(res.status).toEqual(406);
        });
        
        it('should not connect to the server when trying to access a different path', async () => {
            const res = await request(app)
            .post('/taskthree')
            .send({
                number1: 10,
                number2: 21,
                operator: '+'
            })
            expect(res.status).toEqual(404);
        });
    });
});

afterAll(done => {
    app.close();
    done();
});
const request = require('supertest');
const app = require('./app');

describe('POST /users', () => {
    describe('given a username and password', () => {
        // should save password to db
        // should response with a json containing the user ID
        // should respond with a 200 status code
        test('should respond with a status code of 200', async() => {
            const response = await request(app).post('/users').send({
                username: 'username',
                password: 'password'
            })
            expect(response.statusCode).toBe(200)
        })

        // should specify json in the content type header
        test('should specify json in the content type header', async() => {
            const response = await request(app).post('/users').send({
                username: 'username',
                password: 'password'
            })
            expect(response.headers['content-type']).toEqual(expect.stringContaining('json'))
        })

        test('response has userId', async() => {
            const response = await request(app).post('/users').send({
                username: 'username',
                password: 'password'
            })
            expect(response.body.userId).toBeDefined()
        })

    });

    describe('when the username and password is missing', () => {
        // should respond with a status code of 400
        test('should respond with a status code of 400', async() => {
            const bodyData = [
                { username: 'username' },
                { password: 'password' },
                {}
            ]

            for (const body of bodyData) {
                const response = await request(app).post('/users').send(body)
                expect(response.statusCode).toBe(400)
            }
        })

    })


})
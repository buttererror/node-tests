const request = require('supertest');
const expect = require('expect');

const app = require('./server').app;

describe('Server', () => {
   describe('GET /', () => {
      it('should return hello world response', (done) => {
         request(app)
            .get('/')
            .expect(404)
            .expect((res) => {
               expect(res.body).toInclude({
                  error: 'page not found'
               })
            })
            .end(done);
      });
   });
   describe('GET /users', () => {
      it('should include my user object', (done) => {
         request(app)
            .get('/users')
            .expect(200)
            .expect((res) => {
               expect(res.body).toInclude({name: "Mahmoud", age: 26});
            })
            .end(done);
      });
   });
});

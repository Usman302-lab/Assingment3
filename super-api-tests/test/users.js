import supertest from 'supertest';
import { expect } from 'chai';

const TOKEN = '0318dfcded5548d3539a97d2fa3124f7e19f3135761b875549f3de17a9e01ea6';
const request = supertest('https://gorest.co.in/public-api/');

describe('Users', () => {
  it('GET /users', (done) => {
    request.get(`users?access-token=${TOKEN}`)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.data).to.not.be.empty;
        console.log(res.body);
        done();
      });
  });
});

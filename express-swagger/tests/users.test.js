const expect = require('expect');
const request = require('supertest');

const {app} = require('./../index');
const {User} = require('./../models/user');

beforeEach((done) => {
  User.remove({}).then(() => done());
});

describe('GET /user', () => {
  it('should get new user', (done) => {
    var email = 'prashant.kumar12@emc.com';

    request(app)
      .post('/user')
      .send({email})
      .expect(200)
      .expect((res) => {
        expect(res.body.email).toBe(email);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        User.find().then((user) => {
          expect(user.length).toBe(1);
          expect(user[0].email).toBe(email);
          done();
        }).catch((e) => done(e));
      });
  });

  it('should not create user with invalid body data', (done) => {
    request(app)
      .post('/user')
      .send({})
      .expect(400)
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        User.find().then((user) => {
          expect(user.length).toBe(0);
          done();
        }).catch((e) => done(e));
      });
  });
});

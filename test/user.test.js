const supertest = require('supertest');

describe('Test users service', function() {
    var server;

    beforeEach(function() {
        server = require('../server');
    });

    afterEach(function() {
        server.close();
    });

    it('responds to basic GET request', function(done) {
        supertest(server)
            .get('/users')
            .expect(200, done);
    });

    it('returns the full list of users', function(done) {
        supertest(server)
            .get('/users')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect([{
                id: 1,
                name: 'Daniel'
            }, {
                id: 2,
                name: 'Paul'
            }], done);
    });
});
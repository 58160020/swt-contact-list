const request = require('supertest');
const app = require('../server');

test("first test",()=>{
  expect(true).toEqual(true)
})


describe('GET /contacts',()=>{
  it('should return contact list and return status 200 ',(done)=>{
    request(app).get('/contacts')
    .expect(200)
    .then((res)=>{
      let contacts = res.body
      expect(contacts instanceof Array).toBeTruthy()
      done()
    })
  })
})

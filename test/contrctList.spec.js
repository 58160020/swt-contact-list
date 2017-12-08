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

describe('POST /contacts',()=>{
  it(' ',(done)=>{
    request(app).post('/contacts')
    .expect(201)
    .then((res)=>{

      done()
    })
  })
})

describe('PUT /contacts',()=>{
  it(' ',(done)=>{
    request(app).put('/contacts')
    .expect(200)
    .then((res)=>{

      done()
    })
  })
})

describe('DELETE /contacts',()=>{
  it(' ',(done)=>{
    request(app).delete('/contacts')
    .expect(204)
    .then((res)=>{

      done()
    })
  })
})

//testttttttttttmook

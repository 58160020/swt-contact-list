const request = require('supertest');
const app = require('../server');

// test("first test",()=>{
//   expect(true).toEqual(true)
// })


describe('GET /contacts',()=>{
  it('should return contacts and return status 200 ',(done)=>{
    request(app).get('/contacts')
    .expect(200)
    .then((res)=>{
      let contacts = res.body
      let contact = contacts[0]
      expect(contacts instanceof Array).toBeTruthy()
      expect(contact.id).toBeDefined()
      expect(contact.name).toBeDefined()
      expect(contact.email).toBeDefined()
      expect(contact.phone).toBeDefined()
      expect(contact.url).toBeDefined()
      expect(contact.notes).toBeDefined()
      done()
    })
  })
  it('should return contact and return status 200 when send id ',(done)=>{
    request(app).get('/contacts/0')
    .expect(200)
    .then((res)=>{
      let contact = res.body
      expect(contact.id).toBeDefined()
      expect(contact.name).toBeDefined()
      expect(contact.email).toBeDefined()
      expect(contact.phone).toBeDefined()
      expect(contact.url).toBeDefined()
      expect(contact.notes).toBeDefined()
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

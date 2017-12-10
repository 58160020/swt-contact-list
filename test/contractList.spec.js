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
  it('should return post value succeed and status 201 ',(done)=>{
    request(app).post('/contacts')
    .send({id:12,name:'Sirikunya Jugsawed',email:'sirikunya@gamil',phone: '123-456-7890',url:'www.google.com' ,notes:'thai darma' })
    .expect(201)
    .then((res)=>{
      let contact = res.body
     expect(contact).toBeDefined()
     expect(contact.id).toBe(12)
     expect(contact.name).toBe('Sirikunya Jugsawed')
     expect(contact.email).toBe('sirikunya@gamil')
     expect(contact.phone).toBe('123-456-7890')
     expect(contact.url).toBe('www.google.com')
     expect(contact.notes).toBe('thai darma')
     done()
   })
 })

})

describe('PUT /contacts',()=>{
  it('should return status 200 and value of id has been changed when send id ',(done)=>{
    request(app).put('/contacts/0')
    .send({id:12,name:'Sirikunya Jugsawed',email:'sirikunya@gamil',phone: '123-456-7890',url:'www.google.com' ,notes:'thai darma' })
    .expect(200)
    .then((res)=>{
      request(app).get('/contacts/0')
      .then((res)=>{
        let contact = res.body
        expect(contact).toBeDefined()
        expect(contact.id).toBe(12)
        expect(contact.name).toBe('Sirikunya Jugsawed')
        expect(contact.email).toBe('sirikunya@gamil')
        expect(contact.phone).toBe('123-456-7890')
        expect(contact.url).toBe('www.google.com')
        expect(contact.notes).toBe('thai darma')
      })
      done()
    })
  })
})

describe('DELETE /contacts',()=>{
    it('should return status 204 and id don\'t macth id before delete',(done)=>{
    request(app).delete('/contacts/9')
    .expect(204)
    .then((res)=>{
      request(app).get('/contacts/9')
            .then((res)=>{
              let contact = res.body
              expect(contact).toBeDefined()
              expect(contact.id).not.toBe(9)
            })
      done()
    })
  })
})

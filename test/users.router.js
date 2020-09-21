const app = require('../src/index')
const chai = require('chai')
const chaiHttp = require('chai-http')

chai.use(chaiHttp)

describe('Users REST API', () => {
  
  after(()=> {
    app.close(() => {
      console.log('Http server closed.');
    })
  })

  describe('POST /user', () => {

    it('create a new user', (done) => {
      const user = {
        username: 'sergkudinov',
        firstname: 'Sergei',
        lastname: 'Kudinov'
      }
      chai.request(app)
        .post('/user')
        .send(user)
        .then((res) => {
          chai.expect(res).to.have.status(201)
          done()
        })
        .catch((err) => {
           throw err
        })
    })
  })

  // describe('GET /user', ()=> {
  //   // TODO Create test for the get method
  // })
})

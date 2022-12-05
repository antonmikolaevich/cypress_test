const { it } = require("mocha");
const {data, updatedData} = require('../../../constants/constantVariables');


describe("API tests for Cypress Programm", () => {
    
    it('should perform a request - return certain item', () => {
        cy.request('https://petstore.swagger.io/v2/pet/9').then(response => {
          expect(response.status).to.equal(200);
          expect(response.body.id).to.equal(9);
          expect(response.body.name).to.equal('doggie');
        })
     })

     it('create new pet', () => {
      cy.request('POST', 'https://petstore.swagger.io/v2/pet', data).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal('available');
        expect(response.body.name).to.equal('Dobbie');
      })
     })
     
     it('return existing pet - return the info', () => {
      cy.request(`https://petstore.swagger.io/v2/pet/${data.id}`).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal('available');
        expect(response.body.name).to.equal('Dobbie');
      })
   })


   it('update the created pet', () => {
    cy.request('PUT', 'https://petstore.swagger.io/v2/pet', updatedData).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal(updatedData.status);
        expect(response.body.name).to.equal(updatedData.name);
        expect(response.body.category.name).to.equal(updatedData.category.name)
      })
   })

   it('delete the created pet', () => {
    cy.request('DELETE', `https://petstore.swagger.io/v2/pet/${data.id}`).then(response => {
      expect(response.body.code).to.equal(200);
      expect(response.status).to.equal(200);
    })
   })

  it('return unexisting pet - return the error 404', () => {
    cy.request({
      url: `https://petstore.swagger.io/v2/pet/${data.id}`,
      failOnStatusCode: false,
    }).then(response => {
          expect(response.status).to.equal(404);
          expect(response.body.type).to.equal("error");
          expect(response.body.message).to.equal("Pet not found");
        })
  })
})
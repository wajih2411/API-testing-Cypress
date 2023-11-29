describe('Health Check Test', () => {
    it('should successfully ping the HealthCheck endpoint', () => {
      cy.request('https://restful-booker.herokuapp.com/ping')
        .then((response) => {
          expect(response.status).to.eq(201); // Checking if the response status is 201 Created
          expect(response.body).to.contain('Created');
        });
    });
  });
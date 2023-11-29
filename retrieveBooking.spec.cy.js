describe('Get Booking Test', () => {
    it('should retrieve a booking by ID', () => {
      const bookingId = 1; // Replace with a valid booking ID
      cy.request(`https://restful-booker.herokuapp.com/booking/${bookingId}`)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('firstname');
          expect(response.body).to.have.property('lastname');
        });
    });
  });
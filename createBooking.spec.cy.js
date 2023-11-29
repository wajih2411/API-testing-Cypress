describe('Create Booking Test', () => {
    it('should create a new booking', () => {
      const bookingData = {
        firstname: "John",
        lastname: "Doe",
        totalprice: 123,
        depositpaid: true,
        bookingdates: {
          checkin: "2023-01-01",
          checkout: "2023-01-05"
        },
        additionalneeds: "Breakfast"
      };
  
      cy.request('POST', 'https://restful-booker.herokuapp.com/booking', bookingData)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('bookingid');
          expect(response.body.booking).to.deep.equal(bookingData);
        });
    });
  });
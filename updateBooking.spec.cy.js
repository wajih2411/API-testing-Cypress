describe('Update Booking', () => {
  it('should update an existing booking', () => {
      const bookingId = 100; 
      cy.request({
          method: 'PUT',
          url: `https://restful-booker.herokuapp.com/booking/${bookingId}`,
          body: {
              firstname: 'Jane',
              lastname: 'Doe',
              totalprice: 150,
              depositpaid: false,
              bookingdates: {
                  checkin: '2023-02-01',
                  checkout: '2023-02-05'
              },
              additionalneeds: 'Dinner'
          },
          headers: {
              Cookie: 'token=92acd02a39f5f66'
          }
      }).then(response => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('firstname', 'Jane');
      });
  });
});
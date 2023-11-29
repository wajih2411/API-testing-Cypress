describe('Delete Booking', () => {
    it('should delete a specific booking', () => {
        const bookingId = 4018; 
        cy.request({
            method: 'DELETE',
            url: `https://restful-booker.herokuapp.com/booking/${bookingId}`,
            headers: {
                Cookie: 'token=921ab2267e0e7c6'
            }
        }).then(response => {
            expect(response.status).to.eq(201);
        });
    });
});
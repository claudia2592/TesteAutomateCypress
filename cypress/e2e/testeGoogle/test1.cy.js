describe('Site Google.com', () => {

    // test 1
    it('functioneaza cu o cautare basic', () => {
        cy.visit('http://google.com');
        cy.get('#L2AGLb').click();
        cy.get('.a4bIc').type('vlog de it').type('{enter}');
        
        cy.get('#result-stats').should('exist'); 
        
        
    })
})
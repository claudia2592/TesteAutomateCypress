describe('On LinkedIn', () => {

    it('I can login', () => {
        cy.visit('https://linkedin.com');

        cy.get('.nav__button-secondary').click();
        cy.get('#username').type('claudia.cristina2592@gmail.com');
        cy.get('#password').type('claudia0761148744');
        cy.get('.btn__primary--large').click();

        cy.get('#ember16').should('exist');
    })
})
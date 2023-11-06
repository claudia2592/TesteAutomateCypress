// // test  verificare segment din url
// it ('verific daca un url contine ceva', () => {
//     cy.visit('https://www.mediafax.ro/horoscop/horoscop-3-noiembrie-2023-zodiile-intampina-dificultati-in-relatie-acordati-atentie-nevoilor-partenerilor-22177193');

//     cy.url().should('include','/horoscop/')
// })


// // test cu delay
// it('asteapta 15 secunde', () => {
//     cy.visit('https://google.com');

//     cy.get('#L2AGLb').click()
//     cy.wait(15000);
//     cy.get('.gLFyf').type('au trecut 15 secunde')
// })


// //test cu selctor de timp atribuit
// it('selectez folosind un atribut',() => {
//     cy.visit('https://google.com');
//     cy.get('#L2AGLb').click();
//     cy.get('[alt="Google"]').should('be.visible');
// })


// //test screenshot pagina
// it('fac screenshot la pagina', () => {
//     cy.visit('http://google.com');
//     cy.screenshot();
// })


// // test constanta si verificare continut input
// it('verific o valoare din input', () => {
//     cy.visit('http://google.com');
//     cy.get('#L2AGLb').click();
//     const googleSearch = cy.get('.gLFyf');
//     googleSearch.type('123');
//     googleSearch.should('have.value', '123')
// })


// // testul verifica existenta unei clase pe un element selectat
// it('verific o valoare din input', () => {
//     cy.visit('http://wwww.libris.ro');
//     cy.get('#autoCompleteButton').should('have.class','onSearchClick');
// })
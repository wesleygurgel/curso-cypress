/// <reference types="cypress" />

describe('Cypress basics', () => {
    it.only('Should visit a page adn assert title', () => {
        cy.visit('http://wcaquino.me/cypress/componentes.html')
        cy.title().should('eq', 'Campo de Treinamento')
        cy.title().should('a', 'string')
        cy.title().should('contains', 'Campo')
        .and('contains', "Treinamento")
    })


    it('FInd and interact with an element', () => {
        cy.visit('http://wcaquino.me/cypress/componentes.html')
        cy.get('#buttonSimple').click()
        cy.get('#buttonSimple').should('have.value', 'Obrigado!')
        
    })
})
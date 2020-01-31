context('Actions', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })
    it('test input gares', () => {
        cy.get('input')
            .type('Lille').should('have.value', 'Lille')
        cy.get('ul').should('contain','LILLE CHR HALTE')
    })
})
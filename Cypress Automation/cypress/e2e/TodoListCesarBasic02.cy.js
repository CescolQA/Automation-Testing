describe (' To do List Pushing IT', () => {

    beforeEach('Precondicion: Estar situado en la pagina', () => {
        cy.visit('https://pushing-front.vercel.app/')
        cy.get('#registertoggle').dblclick()
        cy.get('#user').type("pushingit")
        cy.get('#pass').type("123456!")
        cy.get('#submitForm').click ()
        cy.get('#todolistlink').click()

    })

    it("Deberia buscar en Search",() => {
        cy.get('#task').type('Lo mio es mio')
        cy.get('#sendTask').click()
        cy.contains('Lo mio es mio').should("exist")

    })
});
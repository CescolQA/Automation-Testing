describe (' To do List Pushing IT', () => {

    beforeEach('Precondicion: Estar situado en la pagina', () => {
        cy.visit('https://pushing-front.vercel.app/')
        cy.get('#registertoggle').dblclick()
        cy.get('#user').type("pushingit")
        cy.get('#pass').type("123456!")
        cy.get('#submitForm').click ()

    })

    it("Deberia abrir la pagina",() => {
        cy.get('#todolistlink').click()

    })
});
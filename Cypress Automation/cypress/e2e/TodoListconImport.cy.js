import { AuthPage } from "../support/PageObjects/AuthPage"

describe (' To do List Pushing IT', () => {
    const authPage = new AuthPage()

    beforeEach('Precondicion: Estar situado en la pagina', () => {
        cy.visit('https://pushing-front.vercel.app/')
        authPage.toggleScreen()
        authPage.escribirUsuario("pushingit")
        authPage.escribirContraseña("123456!")
        authPage.submitForm()
        cy.get('#todolistlink').click()
        
        // cy.get('#registertoggle').dblclick()
        // cy.get('#user').type("pushingit")
        // cy.get('#pass').type("123456!")
        // cy.get('#submitForm').click ()
        // cy.get('#todolistlink').click()

    })

    it("Deberia buscar en Search",() => {
        cy.get('#task').type('Lo mio es mio')
        cy.get('#sendTask').click()
        cy.contains('Lo mio es mio').should("exist")

    })
});
import { AuthPage } from "../support/PageObjects/AuthPage"
import { TodoListCesar } from "../support/PageObjects/TodoListCesar"

describe (' To do List Pushing IT', () => {
    const authPage = new AuthPage()
    const todoListCesar = new TodoListCesar()

    beforeEach('Precondicion: Estar situado en la pagina', () => {
        cy.request({
            method: 'POST',
            url: 'https://pushing-it-backend.herokuapp.com/api/login',
            body: { "username": "pushingit", "password": "123456!" },

        }).then(({ body }) => {
            window.localStorage.setItem('token', body.token)
            window.localStorage.setItem('user', body.user.username)

            
        })
        
        cy.visit('https://pushing-front.vercel.app/')
        cy.get("#todolistlink").click()
        
        // authPage.toggleScreen()
        // authPage.escribirUsuario("pushingit")
        // authPage.escribirContraseña("123456!")
        // authPage.submitForm()
        // cy.get('#todolistlink').click()
        
        // cy.get('#registertoggle').dblclick()
        // cy.get('#user').type("pushingit")
        // cy.get('#pass').type("123456!")
        // cy.get('#submitForm').click ()
        // cy.get('#todolistlink').click()

    })

    it.skip("Deberia buscar en Search",() => {
        cy.get('#task').type('Lo mio es mio')
        cy.get('#sendTask').click()
        cy.contains('Lo mio es mio').should("exist")

    })

    it("Deberia eliminar todas las tareas al clickear en 'RemoveAll'", ()=>{
        const tarea1 = "Primera tarea"
        const tarea2 = "Segunda tarea"
        const tarea3 = "Tercera tarea"
        todoListCesar.enviarTarea(tarea1)
        todoListCesar.enviarTarea(tarea2)
        todoListCesar.enviarTarea(tarea3)
        todoListCesar.clickRemoveAll()



    })

});


export class TodoListPage {

    enviarTarea(tarea) {
        cy.get("#task").type(`${tarea}{enter}`)
    }

    clickRemoveAll(){
        cy.get("#removeAll").click()
    }

    verificarTareaExistente(tarea){
        cy.contains(tarea).should("exist")
    }
    
    completarTarea(tarea){
        cy.contains(tarea).click()
    }

    clickCompletedPestaĆ±a(){
        cy.get("#completed").click()
    }
}
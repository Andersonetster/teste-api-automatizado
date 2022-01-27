/// <reference types="cypress"/>

describe('login teste da api serverest', () => {

    it('deve fazer login com sucesso', () => {
        //requisicao de login
        cy.request({
            method: 'post',
            url: 'http://localhost:3000/login',
            body: {
                    "email": "fulano@qa.com",
                    "password": "teste"
                    }
        //retorno de validação da requisição login
        }).then((response)=>{
            expect(response.status).to.equal(200)
            expect(response.body.message).to.equal('Login realizado com sucesso')
            cy.log(response.body.authorization)
        })       
    });

    
});
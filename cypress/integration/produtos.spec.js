/// <reference types="cypress"/>

describe('teste funcionalidade produtos', () => {
    
    it('listar produtos', () => {
        cy.request({
        method: 'get',
        //url puxa do arquivo cypress.jason
        url: 'produtos'
        })//buscando um produto da lista para validação, codigo abaixo.
            .then((response) =>{
            expect(response.body.produtos[4].nome).to.equal('macbook 20')
            expect(response.status).to.equal(200)
            //validando pela propriedade do produto
            expect(response.body).to.have.property('produtos')
            //validando tempo de resposta
            expect(response.duration).to.be.lessThan(500)
        })

    });

    it('cadastrar produtos', () => {
        cy.request({
            method: 'post',
            url: 'produtos',
            body: {
                "nome": "produto 3",
                "preco": 470,
                "descricao": "Mouprodutose",
                "quantidade": 381
              },
              headers: {authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZ1bGFub0BxYS5jb20iLCJwYXNzd29yZCI6InRlc3RlIiwiaWF0IjoxNjQzMDU3NzQ3LCJleHAiOjE2NDMwNTgzNDd9.T8H9P9zD2BcnxXcthlw5NPTsOQ7eetlK0935YGIikUQ'}

        }).then((response)=>{
            expect(response.status).to.equal(201)
            expect(response.body.message).to.equal('Cadastro realizado com sucesso')
        })
    })
    


});
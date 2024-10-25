describe('Testes de Contatos', () => {
    beforeEach(() => {
        cy.intercept('GET', 'https://fake-api-tau.vercel.app/api/contatos').as('getContacts');
    });

    it('Deve incluir um novo contato', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/');
        cy.wait('@getContacts');

        cy.get('button.adicionar', { timeout: 10000 }).should('be.visible').click();
        
        cy.get('input[placeholder="Nome"]', { timeout: 10000 }).should('be.visible').type('João Silva');
        cy.get('input[placeholder="E-mail"]', { timeout: 10000 }).should('be.visible').type('joao@example.com');
        cy.get('input[placeholder="Telefone"]', { timeout: 10000 }).should('be.visible').type('123456789');
        cy.get('button.adicionar', { timeout: 10000 }).should('be.visible').click();

        cy.contains('João Silva', { timeout: 10000 }).should('exist');
    });

describe('Teste de Alteração de Contato', () => {
    beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app');
    });

    it('Deve alterar um contato existente', () => {
    cy.contains('João Silva') 
        .parent() 
        cy.get('#root > div > div > div:nth-child(2) > div.sc-gueYoa.jWEbWB > button.edit')
        .should('be.visible')
        .click();
    cy.get('input[type="text"]').first().clear().type('João Silva Atualizado');
    cy.get('input[type="email"]').clear().type('novo@email.com');
    cy.get('button[type="submit"]').click();
    cy.contains('João Silva Atualizado').should('exist');
    });
});



        describe('Teste de Remoção de Contato', () => {
            before(() => {
                cy.visit('https://agenda-contatos-react.vercel.app/');
            });
        
            it('Deve remover um contato existente', () => {
                const contatoParaRemover = 'João Silva';
                cy.contains(contatoParaRemover, { timeout: 10000 }).should('exist');
                cy.contains('João Silva')
                    .closest('li')
                    .find('button.delete')
                    .should('be.visible')
                    .click();
                cy.contains(contatoParaRemover).should('not.exist');
            });
        });
        

        
        
});

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
            cy.intercept('GET', 'https://fake-api-tau.vercel.app/api/contatos').as('getContacts');
        });
    
        it('Deve alterar um contato existente', () => {
            cy.visit('https://agenda-contatos-react.vercel.app/');
            cy.wait('@getContacts');
    
            cy.contains('João Silva', { timeout: 10000 }).then(($contact) => {
                cy.log($contact.html());
    
                cy.wrap($contact)
                    .closest('li') .find('button.edit').should('be.visible') .click();

                cy.get('input[placeholder="Nome"]').clear().type('João Silva Atualizado');
                cy.get('input[placeholder="E-mail"]').clear().type('joao.atualizado@example.com');
                cy.get('input[placeholder="Telefone"]').clear().type('987654321');
                cy.get('[data-testid="submit-button"]').click();
    
                cy.contains('João Silva Atualizado').should('exist');
            });
        });
    });
    
    /*
    it('Deve remover um contato existente', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/');
        cy.wait('@getContacts');

        // Verifica se o contato "João Silva" existe antes de tentar removê-lo
        cy.contains('João Silva', { timeout: 10000 }).should('exist');

        // Clica no botão de exclusão do contato
        cy.contains('João Silva').parents('.contact-item').find('[data-testid="delete-button"]').click();

        // Confirma a exclusão se necessário (dependendo da sua implementação)
        // cy.get('[data-testid="confirm-delete-button"]').click(); // Ajuste conforme necessário

        // Verifica se o contato foi removido com sucesso
        cy.contains('João Silva', { timeout: 10000 }).should('not.exist');
    });    
    */
});

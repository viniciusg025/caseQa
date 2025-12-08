describe('API - Users', () => {
  const url = 'https://serverest.dev';
  const IdMeuUser = 'XsCV1AL4H7ZNQlW4';

  it('GET - Listar todos usuários', () => {
    cy.request('GET', url + '/usuarios').then((response) => {
      expect(response.status).to.eq(200);
    });
  });


  it('POST - Criar um novo usuário', () => {
    cy.request('POST', url + '/usuarios', {
      "nome": "Vinicius QA",
      "email": "vinnesantos025257@gmail.com",
      "password": "vinicius@025",
      "administrador": "true"
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('message', 'Cadastro realizado com sucesso');
    });
  });


  it('GET - Listar usuário por id', () => {
    cy.request('GET', url + '/usuarios/XsCV1AL4H7ZNQlW4').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('_id', IdMeuUser);
    });
  });


  it('PUT - Atualiza as informações de um usuário.', () => {
    cy.request('put', url + '/usuarios/' + IdMeuUser, {
      "nome": "Vinicius QA Atualizado",
      "email": "vinnesantos025@gmail.com",
      "password": "vinicius@0255",
      "administrador": "true"
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('message', 'Registro alterado com sucesso');
    });
  });


   it('DELETE - Deletar usuário por id', () => {
    cy.request('DELETE', url + '/usuarios/93mrzLBcQelB3MaA').then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});


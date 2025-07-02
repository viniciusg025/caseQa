describe('API - Users', () => {
  const url = 'http://jsonplaceholder.typicode.com/users';

  it('GET - Listar usuários', () => {
    cy.request('GET', url).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.exist;
      expect(response.body).to.not.be.empty;
      expect(response.body).to.be.an('array');
      expect(response.body[0]).to.have.property('id');
    });
  });

  it('POST - Criar usuário', () => {
    cy.request('POST', url, {
      "name": "Vinicius",
      "username": "viniciusg025",
      "email": "vinnetester@gmail.com",
      "address": {
      "street": "Dayna Park",
      "suite": "Suite 449",
      "city": "Bartholomebury",
      "zipcode": "76495-3109",
      "geo": {
        "lat": "24.6463",
        "lng": "-168.8889"
      }
    },
    "phone": "(775)976-6794 x41206",
    "website": "conrad.com",
    "company": {
      "name": "Yost and Sons",
      "catchPhrase": "Switchable contextually-based project",
      "bs": "aggregate real-time technologies"
    }
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('name', 'Vinicius');
      expect(response.body).to.have.property('username', 'viniciusg025');
      expect(response.body).to.have.property('email', 'vinnetester@gmail.com');
    });
  });


  it('PUT - Atualizar usuário', () => {
    cy.request('PUT', `${url}/1`, {
      "name": "Vinicius",
      "username": "viniciusg025",
      "email": "vinnetester@gmail.com",
      "address": {
      "street": "Dayna Park",
      "suite": "Suite 449",
      "city": "Bartholomebury",
      "zipcode": "76495-3109",
      "geo": {
        "lat": "24.6463",
        "lng": "-168.8889"
      }
    },
    "phone": "(775)976-6794 x41206",
    "website": "conrad.com",
    "company": {
      "name": "Yost and Sons",
      "catchPhrase": "Switchable contextually-based project",
      "bs": "aggregate real-time technologies"
    }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('name', 'Vinicius');
      expect(response.body).to.have.property('username', 'viniciusg025');
      expect(response.body).to.have.property('email', 'vinnetester@gmail.com');
    });
  });


  it('DELETE - Deletar usuário', () => {
      cy.deleteUser(9).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.empty;
    });
  });
});


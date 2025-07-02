Cypress.Commands.add('deleteUser', (userId) => {
  cy.request({
    method: 'DELETE',
    url: `https://jsonplaceholder.typicode.com/users/${userId}`
  });
});
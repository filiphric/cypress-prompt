it('test', () => {

  cy
    .visit('https://the-internet.herokuapp.com/javascript_alerts')

  cy
    .window()
    .then(window => {
      cy.stub(window, 'prompt').callsFake(() => { return null }).as('prompt')
    })

  cy
    .contains('Click for JS Prompt')
    .click();



});

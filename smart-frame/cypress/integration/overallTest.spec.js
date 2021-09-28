describe('page test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
	cy.get('.App').click('center');
  });

  it('In the correct page', () => { //page and pop up test 
    cy.get('.MuiDialogContent-root').should('be.visible')
    .click('left')
    .click('center')
    .click('right')
  .click('top')
  .wait(1000);
  });
  it('back button working', () => { //button test 
    cy.get('#back').should('be.visible')
    .click('center')
    .wait(1000);
  })
  it('contains an image', () => { //image test 
    cy.get('#back').should('be.visible')
    .click('center')
    .wait(1000);
    cy.get('img')
      .wait(10000);  
  });
});
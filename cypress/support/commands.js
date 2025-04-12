// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
    if (options && options.sensitive) {
      // turn off original log
      options.log = false
      // create our own log with masked message
      Cypress.log({
        $el: element,
        name: 'type',
        message: '*'.repeat(text.length),
      })
    }
  
    return originalFn(element, text, options)
  });

//   Cypress.Commands.add('login', (email) => {
//     cy.visit('https://guest:welcome2qauto@qauto.forstudy.space');
//     cy.get('[class="btn btn-outline-white header_signin"]').click();
//     cy.get('#signinEmail').type(email);

// });

Cypress.Commands.add('login', () => {
  cy.visit('/');

  cy.get('[class="btn btn-outline-white header_signin"]').click();
  cy.get('#signinEmail').type(Cypress.env('userEmail'));
  cy.get('#signinPassword').type(Cypress.env('userPassword'));
  cy.get('[class="btn btn-primary"]').click();
  cy.contains('Garage').should('be.visible');
});



  Cypress.Commands.add('list_of_brands', (brands) => {
    cy.get('#addCarBrand option').should('have.length', brands.length);
    cy.get('#addCarBrand option').each(($el, index) => {
      cy.wrap($el).should('have.text', brands[index]);
    });
  });

  Cypress.Commands.add('list_of_audi_models', (audi_models) => {
    cy.get('#addCarModel option').should('have.length', audi_models.length);
    cy.get('#addCarModel option').each(($el, index) => {
      cy.wrap($el).should('have.text', audi_models[index]);
    });
  });

  Cypress.Commands.add('list_of_bmw_models', (bmw_models) => {
    cy.get('#addCarModel option').should('have.length', bmw_models.length);
    cy.get('#addCarModel option').each(($el, index) => {
      cy.wrap($el).should('have.text', bmw_models[index]);
    });
  });

  Cypress.Commands.add('list_of_ford_models', (ford_models) => {
    cy.get('#addCarModel option').should('have.length', ford_models.length);
    cy.get('#addCarModel option').each(($el, index) => {
      cy.wrap($el).should('have.text', ford_models[index]);
    });
  });

  Cypress.Commands.add('list_of_porsche_models', (porsche_models) => {
    cy.get('#addCarModel option').should('have.length', porsche_models.length);
    cy.get('#addCarModel option').each(($el, index) => {
      cy.wrap($el).should('have.text', porsche_models[index]);
    });
  });

  Cypress.Commands.add('list_of_fiat_models', (fiat_models) => {
    cy.get('#addCarModel option').should('have.length', fiat_models.length);
    cy.get('#addCarModel option').each(($el, index) => {
      cy.wrap($el).should('have.text', fiat_models[index]);
    });
  });


  Cypress.Commands.add('update_mileage', (value_to_add) => {
    cy.get('#addExpenseMileage')
      .invoke('val')
      .then((currentValue) => {
        const numberValue = Number(currentValue) || 0;
        const newValue = Number(numberValue) + Number(value_to_add);
        cy.get('#addExpenseMileage').clear();
        cy.get('#addExpenseMileage').should('have.value', '');
        cy.get('#addExpenseMileage').type(newValue); 
      });
  });
  
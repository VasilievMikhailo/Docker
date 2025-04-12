describe('Add car and Fuel expenses', () => {
  before(() => {
    cy.visit('https://guest:welcome2qauto@qauto.forstudy.space');  // Используем baseUrl из env
  });


  it('Add car and Fuel expenses whole scenario', () => {

    cy.get('[class="btn btn-outline-white header_signin"]').click();
    cy.get('#signinEmail').type(Cypress.env('userEmail'));
    cy.get('#signinPassword').type(Cypress.env('userPassword'));
    cy.get('[class="btn btn-primary"]').click();
    cy.contains('Garage').should('be.visible');

    cy.contains('Add car').click();
    cy.get('#addCarBrand').contains('Audi');
    cy.get('#addCarModel').contains('TT');

    // cy.list_of_brands(['Audi', 'BMW', 'Ford', 'Porsche', 'Fiat']);

    // cy.list_of_audi_models(['TT', 'R8', 'Q7', 'A6', 'A8']);

    // cy.get('#addCarBrand').select('BMW');
    // cy.get('#addCarBrand').contains('BMW').should('be.visible');
    // cy.get('#addCarModel').contains('3').should('be.visible');

    // cy.list_of_bmw_models(['3', '5', 'X5', 'X6', 'Z3']);

    // cy.get('#addCarBrand').select('Ford');
    // cy.get('#addCarBrand').contains('Ford').should('be.visible');
    // cy.get('#addCarModel').contains('Fiesta').should('be.visible');

    // cy.list_of_ford_models(['Fiesta', 'Focus', 'Fusion', 'Mondeo', 'Sierra']);

    // cy.get('#addCarBrand').select('Porsche');
    // cy.get('#addCarBrand').contains('Porsche').should('be.visible');
    // cy.get('#addCarModel').contains('911').should('be.visible');

    // cy.list_of_porsche_models(['911', 'Cayenne', 'Panamera']);

    // cy.get('#addCarBrand').select('Fiat');
    // cy.get('#addCarBrand').contains('Fiat').should('be.visible');
    // cy.get('#addCarModel').contains('Palio').should('be.visible');

    // cy.list_of_fiat_models(['Palio', 'Ducato', 'Panda', 'Punto', 'Scudo']);

    cy.get('#addCarMileage').type('qwe');
    cy.get('#addCarBrand').select('Audi');
    cy.get('#addCarMileage').should('be.empty')
    cy.contains('Mileage cost required').should('be.visible').and('have.css', 'color', 'rgb(220, 53, 69)');
    
    cy.get('#addCarMileage').type('-1');
    cy.contains('Mileage has to be from 0 to 999999').should('be.visible').and('have.css', 'color', 'rgb(220, 53, 69)');

    cy.get('#addCarMileage').clear();
    cy.get('#addCarMileage').type('0');
    cy.get('[class="btn btn-primary"]').contains('Add').should('not.be.disabled');

    cy.get('#addCarMileage').clear();
    cy.get('#addCarMileage').type('9999991');
    cy.get('#addCarBrand').select('Audi');
    cy.contains('Mileage has to be from 0 to 999999').should('be.visible').and('have.css', 'color', 'rgb(220, 53, 69)');
    cy.get('[class="modal-content"]').find('[class="btn btn-primary"]').contains('Add').should('be.disabled');

    
    cy.get('#addCarMileage').clear();
    cy.get('#addCarMileage').type('200');
    cy.get('[class="btn btn-primary"]').contains('Add').should('not.be.disabled');
    cy.get('[class="modal-content"]').find('[class="btn btn-primary"]').contains('Add').click();

    cy.get('[class="car_add-expense btn btn-success"]').contains('Add fuel expense').should('be.visible');
    cy.get('[class="car_add-expense btn btn-success"]').contains('Add fuel expense').click();
    cy.contains('Add an expense').should('be.visible');
    cy.get('[class="modal-content"]').find('[class="btn btn-primary"]').contains('Add').should('be.disabled')

    cy.update_mileage('20');

    cy.get('#addExpenseLiters').click();
    cy.get('#addExpenseTotalCost').click();
    cy.contains('Liters required').should('be.visible').and('have.css', 'color', 'rgb(220, 53, 69)');
    cy.get('#addExpenseLiters').click(); 
    cy.contains('Total cost required').should('be.visible').and('have.css', 'color', 'rgb(220, 53, 69)');

    cy.get('#addExpenseLiters').type('0.009');
    cy.contains('Liters has to be from 0.01 to 9999').should('be.visible').and('have.css', 'color', 'rgb(220, 53, 69)');
    cy.get('#addExpenseTotalCost').type('0');
    cy.contains('Total cost has to be from 0.01 to 1000000').should('be.visible').and('have.css', 'color', 'rgb(220, 53, 69)');

    cy.get('#addExpenseLiters').clear();
    cy.get('#addExpenseLiters').type('9998');
    cy.get('#addExpenseTotalCost').click();

    cy.get('#addExpenseTotalCost').clear();
    cy.get('#addExpenseTotalCost').type('1000000');
    cy.get('[class="modal-content"]').find('[class="btn btn-primary"]').contains('Add').should('not.be.disabled')

    cy.get('#addExpenseLiters').clear();
    cy.get('#addExpenseLiters').type('9999.01');
    cy.contains('Liters has to be from 0.01 to 9999').should('be.visible').and('have.css', 'color', 'rgb(220, 53, 69)');

    cy.get('#addExpenseTotalCost').clear();
    cy.get('#addExpenseTotalCost').type('1000000.01');
    cy.contains('Total cost has to be from 0.01 to 1000000').should('be.visible').and('have.css', 'color', 'rgb(220, 53, 69)');

    cy.get('#addExpenseLiters').clear();
    cy.get('#addExpenseLiters').type('5');

    cy.get('#addExpenseTotalCost').clear();
    cy.get('#addExpenseTotalCost').type('4');
    cy.get('[class="modal-content"]').find('[class="btn btn-primary"]').contains('Add').should('not.be.disabled')

    cy.get('[class="modal-content"]').find('[class="btn btn-primary"]').contains('Add').click();

    // cy.get('[class="col-lg-9 main-wrapper"]').find('h1').contains('Fuel expenses').should('be.visible');

    // cy.get('[class="btn btn-white btn-sidebar sidebar_btn"]').contains('Garage').click();
    // cy.get('[class="icon icon-edit"]').click();
    // cy.get('[class="btn btn-outline-danger"]').click();
    // cy.get('[class="modal-content"]').find('[class="btn btn-danger"]').click();
    // cy.contains('You don’t have any cars in your garage').should('be.visible');
  });
});  
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

const env = Cypress.env()

let swag
before(function () {
    cy.fixture('test').then(function (data) {
        swag = data;
    })
})

Given('Open the browser and launch the Application', function () {
    cy.visit(env.Url)
})

When('User enters Valid credentials', function () {
    cy.login(swag.uname, swag.password)
})

Then('validate if the user login is successful', function () {
    cy.url().should('include', '/inventory.html');
    cy.get('.title').should('contain', 'Products');
})


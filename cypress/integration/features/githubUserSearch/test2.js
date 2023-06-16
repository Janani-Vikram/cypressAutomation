import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

const env = Cypress.env()

let swag
before(function () {
    cy.fixture('test').then(function (data) {
        swag = data;
    })
})

Given('Open the browser and launch the Application', function () {
    cy.visit(env.githubUrl)
})

When('User enters Valid credentials', function () {
    cy.get('input[name="search"]').type(swag.githubUsername);
    cy.get('button[type="submit"]').click();
})

Then('validate if the user login is successful', function () {
    cy.get('.user-card').should('have.length', 1);
    cy.get('.user-card').should('contain', swag.githubUsername);
})


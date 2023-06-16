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

When('a user is searched', function () {
    cy.get('[data-testid="search-bar"]').type(swag.githubUsername);
    cy.get('button[type="submit"]').click();
})

Then('validate the user card', function () {
    cy.get('header > div > h4').should('have.length', 1);
    cy.get('header > div > h4').should('contain', swag.githubUsername);
})


import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

const env = Cypress.env()

let test
before(function () {
    cy.fixture('test').then(function (data) {
        test = data;
    })
})

Given('Open the browser and launch the Application', function () {
    cy.visit(env.githubUrl)
})

When('a user is searched', function () {
    cy.get('[data-testid="search-bar"]').type(test.gitHub.uname);
    cy.get('button[type="submit"]').click();
})

Then('validate the user card', function () {
    cy.get('header > div > h4').should('have.length', 1);
    cy.get('header > div > h4').should('contain', test.gitHub.uname);
})
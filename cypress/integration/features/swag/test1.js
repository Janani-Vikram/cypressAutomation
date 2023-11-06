import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import '@percy/cypress'

const env = Cypress.env()

let test
before(function () {
    cy.fixture('test').then(function (data) {
        test = data;
    })
})

Given('the user hits the URL in the browser', function () {
    cy.visit(env.sauceUrl)
})

When('the user enters valid credentials and clicks the login button', function () {
    cy.percySnapshot();
    cy.login(test.swag.uname, test.swag.password)
    cy.percySnapshot();
})

Then('the user should land on the home page', function () {
    cy.percySnapshot()
    cy.url().should('include', '/inventory.html');
    cy.get('.title').should('contain', 'Products');
    cy.percySnapshot()
})
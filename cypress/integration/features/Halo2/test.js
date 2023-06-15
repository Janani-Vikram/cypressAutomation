import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HaloHomePO from "../../../support/PageObjects/Halo/HaloHomePO";
import LsLoginPO from "../../../support/PageObjects/Halo/LSLoginPO";

const env = Cypress.env()
const ls = new LsLoginPO()
const homePage = new HaloHomePO()

const date = new Date()
const tyear = date.getFullYear()

let halo
before(function () {
    cy.fixture('halo').then(function (data) {
        halo = data;
    })
})

Given('Open the browser and launch the LS Application', function () {
    ls.visit(env.Url)
    ls.acceptCookie()
})

When('User enters Valid credentials', function () {
    cy.login(halo.haloUser, halo.password)
})

Then('validate if the user login is successful', function () {
    cy.title().should('eq', halo.home.haloTitle)
})

//Validate Halo home page product
Given('User completed Onboarding flow', () => {
})

Then('Validate the product card', () => {
    cy.get('.active-course-lbl').should('have.text', "In progress")
    homePage.getProductCard().find('.MuiButton-label').should('have.text', "Continue learning")
})

//validate the help
When('Help dropdown is clicked', () => {
    homePage.gethelpDD().click()
})

Then('Check FAQ option is redirected to Learnship FAQ page', () => {
    homePage.getFaq().should('have.attr', 'href', env.help.FAQ)
        .should('have.attr', 'target', '_blank')
})

And('Check Customer support option is redirected to Learnship CS page', () => {
    homePage.getCustomerSupport().should('have.attr', 'href', env.help.CustomerSupport)
        .should('have.attr', 'target', '_blank')
    homePage.escape()
})

//Validate My schedule page
When('My schedule is clicked', () => {
    cy.wait(4000)
    homePage.getMySchedule().click()
})

Then('Validate my schedule URL', () => {
    cy.url().should('include', halo.mySchedule.url)
})

//Validate progress page
When('Progress is clicked', () => {
    homePage.getProgress().click()
})

Then('validate the URL', () => {
    cy.url().should('include', halo.myProgress.url)
})

And('Check the Product tab', () => {
    cy.get('.MuiTab-wrapper').contains('Elevate Business English').click()
})

//Verify the productivity tools
When('Feature dropdown is clicked', () => {
    homePage.getFeature()
    cy.wait(1000)
})

Then('Check the Cultural Center page', () => {
    cy.get('.dropdown-item').contains(halo.features.culturalTitle).click()
    cy.url().should('include', '/culturecenter')
})

And('Check the Email template page', () => {
    homePage.getFeature()
    cy.get('.dropdown-item').contains(halo.features.emailTitle).click()
    cy.url().should('include', '/emailtemplate')
})

And('Check the Accents and dialects page', function () {
    homePage.getFeature()
    cy.get('.dropdown-item').contains(halo.features.accentsTitle).click()
    cy.url().should('include', '/accentsanddialects')
})

And('Verify Talk with Teacher page', () => {
    homePage.getFeature()
    cy.get('.dropdown-item').contains(halo.features.twt).click()
    cy.url().should('include', '/twt')
})

And('Verify Vocabulary Center', () => {
    homePage.getFeature()
    cy.get('.dropdown-item').contains(halo.features.vcTitle).click()
    cy.url().should('include', '/vocabularycenter')
})

And('Verify News Feed page', () => {
    cy.get('.dropdown-item').contains(halo.features.newsFeed).should('have.attr', 'href', env.newsFeed)
        .should('have.attr', 'target', '_blank')
})

//Validate user profile
When('User dropdown is clicked', () => {
    homePage.getUserDropdown().click()
})

Then('validate the username and email id', function () {
    homePage.getDDUsername().then(uname => {
        const username = uname.find('b').text()
        expect(username).equal(halo.haloUser)
    })
})

When('Profile is clicked', () => {
    homePage.getUserprofile().click()
    cy.wait(2000)
})

Then('Validate the profile url', () => {
    cy.url().should('include', '/profile')
})

//Validate Footer
Then('Verify the Footer options', () => {
    homePage.getFooterOptions()
})

When('About is clicked, About page is displayed', () => {
    homePage.getFooterLink().eq(0).should('have.attr', 'href', env.footer.About)
        .should('have.attr', 'target', '_blank')
})

And('Legal is clicked, Legal page is displayed', () => {
    homePage.getFooterLink().eq(1).should('have.attr', 'href', env.footer.Legal)
        .should('have.attr', 'target', '_blank')

})

And('Privacy Policy is clicked, Privacy Policy page is displayed', () => {
    homePage.getFooterLink().eq(2).should('have.attr', 'href', env.footer.PrivacyPolicy)
        .should('have.attr', 'target', '_blank')

})

And('Terms & Condition is clicked, Terms & Condition page is displayed', () => {
    homePage.getFooterLink().eq(3).should('have.attr', 'href', env.footer.TermsNCondition)
        .should('have.attr', 'target', '_blank')

})

And('Validate copyright', () => {
    homePage.getCopyright().should('have.text', "© 2010 - " + tyear)
})

//Verify the Logout functionality
And('Logout is clicked', () => {
    cy.wait(1000)
    homePage.getLogout()
})

Then('User should be logged out successfully', () => {
    cy.title().should('eq', halo.home.loginTitle)
})

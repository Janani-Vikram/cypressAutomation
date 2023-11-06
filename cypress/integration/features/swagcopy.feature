@regression
Feature: Swagdemo Parallelization using Cypress

    Scenario: Login as a user
        Given the user hits the URL in the browser
        When the user enters valid credentials and clicks the login button
        Then the user should land on the home page
        
    Scenario: Filter the products
        When the user clicks on the filter dropdown
        Then filter the products based on the user selection

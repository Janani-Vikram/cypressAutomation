Feature: github user search Parallelization using Cypress

    Scenario: Search a user in gitHub
        Given Open the browser and launch the Application
        When a user is searched 
        Then validate the user card

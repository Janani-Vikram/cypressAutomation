@parallel2
Feature: Halo Smoke suite

    Halo Home page testing

    Scenario: Login as Halo user
        Given Open the browser and launch the LS Application
        When User enters Valid credentials
        Then validate if the user login is successful

    Scenario: Validate Halo home page
        Given User completed Onboarding flow
        Then Validate the product card

    Scenario: Validate My progress page
        When Progress is clicked
        Then validate the URL
        And Check the Product tab

    Scenario: Validate My schedule page
        When My schedule is clicked
        Then Validate my schedule URL

    Scenario: Validate productivity tools
        When Feature dropdown is clicked
        Then Check the Cultural Center page
        And Check the Email template page
        And Check the Accents and dialects page
        And Verify Talk with Teacher page
        And Verify News Feed page

    Scenario: Validate Help
        When Help dropdown is clicked
        Then Check FAQ option is redirected to Learnship FAQ page
        And Check Customer support option is redirected to Learnship CS page

    Scenario: Validate user profile
        When User dropdown is clicked
        Then validate the username and email id
        When Profile is clicked
        Then Validate the profile url

    Scenario: Verify the Logout functionality
        When User dropdown is clicked
        And Logout is clicked
        Then User should be logged out successfully
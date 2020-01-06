@feature/videoPage
Feature: videoPage

    Background: User opens Youtube Page
        Given youtube page

    @smoke
    Scenario: User verifies elements on youtube the page
        Given title Youtube is displayed
        When Youtube search field is displayed

@feature/launchPage
Feature: launchPage

    Background: User opens Google Page
        Given google page
        When title Google is displayed

    @smoke
    Scenario Outline: User passes "<content_type>" to search field
        When User passes "<searched_keyword>" in search field
        Examples:
            | content_type | searched_keyword |
            | hakuna       | hakuna           |
            | matata       | matata           |
            | hakunamatata | hakunamatata     |

    @smoke
    Scenario: User passes hakunamatata and clicks search
        Given User write hakunamatata in search field
        When User sees search button
        # Then should pause the execution
        Then User clicks on search button

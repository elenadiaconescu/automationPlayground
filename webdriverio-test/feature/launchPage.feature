@feature/search
Feature: Search

    Background: User opens Google Page
        Given google page

    @smoke
    Scenario Outline: User passes "<content_type>" to search field
        When title Google is displayed
        When User passes "<searched_keyword>" in search field
        Examples:
            | content_type | searched_keyword |
            | hakuna       | hakuna           |
            | matata       | matata           |
            | hakunamatata | hakunamatata     |

    @smoke
    Scenario: User passes "hakunamatata" and clicks search
        Given User write hakunamatata in search field
        When User sees search button
        Then User clicks on search button
       
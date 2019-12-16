@feature/search
Feature: Search

    Background: User opens Google Page
        Given google page

    @smoke
    Scenario Outline: User passes "<content_type>" to search field
        When title Google is displayed
        Given User clicks on search field
        When User passes "<searched_keyword>" in search field
        Examples:
            | content_type | searched_keyword |
            | hakuna       | hakuna           |
            | matata       | matata           |
            | hakunamatata | hakunamatata     |

    @smoke
    Scenario: User passes "hakunamatata" and clicks search
        When User passes "hakunamatata" in search field
        Then User sees search button
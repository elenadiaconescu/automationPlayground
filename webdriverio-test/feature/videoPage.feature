@feature/search
Feature: Youtube

    Background: User opens Youtube Page
        Given youtube page

    @smoke
    Scenario Outline: User passes "<content_type>" to search field
        When title Youtube is displayed
        When User passes "<searched_keyword>" in search field
        Examples:
            | content_type | searched_keyword |
            | hakunamatata | hakunamatata     |
# Then Users selects youtube video
# Then should pause the execution
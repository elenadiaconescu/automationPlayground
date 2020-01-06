@feature/videoPage
Feature: videoPage

    Background: User opens Youtube Page
        Given youtube page

    @smoke
    Scenario Outline: User passes "<content>" to search field
        Given title Youtube is displayed
        When Youtube search field is displayed
        When User passes "<searched>" in search field
        Examples:
            | content      | searched     |
            | hakuna       | hakuna       |
            | matata       | matata       |
            | hakunamatata | hakunamatata |

# Then Users selects youtube video
# Then should pause the execution
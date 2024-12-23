Feature: QNA-Service Functionality
  Background: File Upload
    Given User navigates to the QNAService page
    When User Select a single document by clicking on the Choose file input
    And User Click on the Upload icon

  Scenario: Verify File Upload is Success
    Then Document must uploaded successfully
    And User deletes the unprocessed File Successfully

  Scenario Outline: Verify File is processed
    Given Document is in unprocessed state
    When User clicks the play button
    Then Document must be processed successfully
    When User enter <query> in the text box
    And click on the Ask Question button to get the answer
    Then <answer> will be displayed in the Answer section
    When User click on expand to see references
    Then User can see the source of the answer
    And User deletes File Successfully

    Examples:
      | query                      | answer                                |
      |"What is the type?"         | "The type of the file is a text file" |
      |"What is the content of file?" | "textformat"                                 |

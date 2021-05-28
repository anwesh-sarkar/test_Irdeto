Feature: Get activity with participants of valid or invalid number
  # This test case shows how to get a valid activity from boredapi with valid/invalid number of participants
  Scenario Outline: Get Bored API Valid Activity with valid number of participants
    When the user sends a GET request to activity API <NoOfParticipants>
    Then the user must receive a response <NoOfParticipants>
    Examples:
      | NoOfParticipants |
      | 1                |
      | 2                |
      | 3                |
      | 4                |
      | 5                |

  Scenario Outline: Get error message with invalid number of participants
    When the user sends a GET request to activity API <NoOfParticipants>
    Then the user must receive a response <Error>
    Examples:
      | NoOfParticipants | Error                                           |
      | 0                | No activity found with the specified parameters |
      | -5               | No activity found with the specified parameters |
      | 10               | No activity found with the specified parameters |
      | e                | Failed to query due to error in arguments       |
      | 0.2              | No activity found with the specified parameters |
Feature: Get activity of valid or invalid type
  # This test case shows how to get a valid activity from boredapi with type valid/invalid
  Scenario Outline: Get Bored API Valid Activity of valid type
    When the user sends a GET request to activity API <Type>
    Then the user must receive a response <Type>
    Examples:
      | Type         |
      | education    |
      | recreational |
      | social       |
      | diy          |
      | charity      |
      | cooking      |
      | relaxation   |
      | music        |
      | busywork     |

  Scenario Outline: Get error message for an invalid type
    When the user sends a GET request to activity API <Type>
    Then the user must receive a response <Error>
    Examples:
      | Type | Error                                           |
      | cry  | No activity found with the specified parameters |
      | 33   | No activity found with the specified parameters |
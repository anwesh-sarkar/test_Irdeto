Feature: Get random activity
  # This test case shows how to get activity from boredapi
  Scenario Outline: Get Bored API Activity
    When the user sends a GET request to activity API
    Then the user must receive a response <Message>
    Examples:
      | Message       |
      | activity      |
      | type          |
      | participants  |
      | price         |
      | link          |
      | key           |
      | accessibility |
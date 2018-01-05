Feature: delete entry



  Scenario Outline: Test to delete an entry
    Given I have successfully signed in with "<username>" and "<password>"
    When I enter the following customer details: "<hotelName>", "<address>", "<owner>", "<phoneNumber>", "<email>" and click on create button
    And I delete the an entry
    Then The entry should be deleted
    Examples: Test data
      |username|password| hotelName  | address            | owner | phoneNumber | email           |
      |admin   |password| HMRC Hotel | 1, New Castle road | Tunde | 0756438992  | tunde@email.com |

Feature: Cynema ticket
    Scenario: Booking 1 ticket
        Given user is on "/index.php" page
        When user selects a day
        When user selects a time
        When user selects a place
        When user push the register button
        Then user sees the message "Вы выбрали билеты:"

    Scenario: Booking 2 tickets
        Given user is on "/index.php" page
        When user selects a day
        When user selects a time
        When user selects a place 1
        When user selects a place 2
        When user push the register button
        Then user sees the message "Вы выбрали билеты:"

    Scenario: The booking button is not available
        Given user is on "/index.php" page
        When user selects a day
        When user selects a time
        When user selects a place 3
        Then user cant push the register button
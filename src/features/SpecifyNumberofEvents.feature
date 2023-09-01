Feature: Specify number of displayed events

    Scenario: When user hasn’t specified a number, 32 events are shown by default.
        Given User has not picked how many events that they want shown to them
        When User select the city to show the events
        Then 32 events are shown

    Scenario: User can change the number of events displayed.
        Given User has picked the amount of events they want displayed
        When User selects the events
        Then A number will be shown of how many events are displayed

Feature: Show/Hide Event Details

    Scenario: An event element is collapsed by default.
        Given User has not selected a city.
        When User opens the app and no action has been completed.
        Then User will have the event element collapsed.

    Scenario: User can expand an event to see details.
        Given User has chose an event that interests them.
        When User chooses the event.
        Then User can see the event details on the app.

    Scenario: User can collapse an event to hide details
        Given User has opened an event and hidden an event that does not interest them.
        When User chooses the event.
        Then User can hide an event on the app

# Features, User Stories, BDD scenarios
## Filter Events By City
### User Story
#### As a User, I should be able to filter events by city, so that I can see a list of events taking place in that city 

### Scenarios
#### Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities
##### Given: User hasn't searched for any city.
##### When: The user opens the app.
##### Then: the user should see a list of options.

#### Scenario 2: User should see a list of suggestions when they search for a city
##### Given: The Main page is open.
##### When: User types in the city.
##### Then: User see a list of cities that match what they typed.

#### Scenario 3: User can select a city from the suggested list
##### Given: User types Toronto in the city textbox and list of suggested cities show.
##### When: User selects a city.
##### Then: User can see all of the events in that city.


## Show/Hide Event Details
### User Story
#### As a User, I should be able to show/hide event details so that I can get information on the events I have interest in.
### Scenarios
#### Scenario 1: An event element is collapsed by default
##### Given: User has not selected a city.
##### When: User opens the app and no action has been completed.
##### Then: User will have the event element collapsed.

#### Scenario 2: User can expand an event to see details.
##### Given: User has chose an event that interests them.
##### When: User chooses the event.
##### Then: User can see the event details on the app.

#### Scenario 3: User can collapse an event to hide details
##### Given: User has opened an event and hidden an event that does not interest them.
##### When: User chooses the event.
##### Then: User can hide an event on the app


## Specify Number of Events
### User Story
#### As a User, I should be able to show a number of events, so I can be able to control how many events are being shown.
### Scenarios
#### Scenario 1: When user hasn’t specified a number, 32 events are shown by default.
##### Given: User has not picked how many events that they want shown to them.
##### When: User select the city to show the events
##### Then: 32 events are shown

#### Scenario 2: User can change the number of events displayed
##### Given: User has picked the amount of events they want displayed
##### When: User selects the events
##### Then: A number will be shown of how many events are displayed


## Use the App When Offline
### User Story
#### As a User, I should be able to use the app offline, so that I can be able to access event information when I cannot connect to the internet
### Scenarios
#### Scenario 1: Show cached data when there’s no internet connection
##### Given: User looses connection while on app
##### When: User goes on app to search for events
##### Then: The app will show client the event details for cached data

#### Scenario 2: Show error when user changes search settings (city, number of events).
##### Given: User changed the search settings on the app
##### When: User opens the app from the search settings
##### Then: User will receive an error message stating that user changed the search settings<


## Add an App Shortcut to the Home Screen
### User Story
#### As a User, I should be able to access the home screen, so that I can be able to check my events
### Scenarios
#### Scenario 1: User can install the meet app as a shortcut on their device home screen
##### Given: User has the app installed on their on their preferred device.
##### When: User installs the app on their preferred device.
##### Then: User will be able to access the home screen as a shortcut.


## Display Charts Visualizing Event Details
### User Story
#### As a User, I should be able to see a chart, so that I can be able to view the amount of events are upcoming in each city
### Scenarios
#### Scenario 1: Show a chart with the number of upcoming events in each city.
##### Given: User has selected a number of events per city
##### When: User wants to see how many events are there per city
##### Then: User will see a chart that will be displayed on how many events per city

# How Serverless Function Will Be Used
#### The Serverless function will be used to provde cost-effeciency due to the reason that the serverless function will be handling a lot of the tasks like event processing and visualization. This will give the user a good and smooth experience on the app as there really won't be any managing any server infrastructure. Cloud based serverless solutions will allow the app to be running smooth and give clients real-time data for the events of their choice
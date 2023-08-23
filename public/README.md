<h1>Features, User Stories, BDD scenarios</h1>
<h2>Filter Events By City</h2>
<h3>User Story</h3>
<h4>As a User, I should be able to filter events by city, so that I can see a list of events taking place in that city </h4>
<h3>Scenarios</h3>
<h4>Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities</h4>
<h5>Given: User hasn't searched for any city.</h5>
<h5>When: The user opens the app.</h5>
<h5>Then: the user should see a list of options.</h5>

<h4>Scenario 2: User should see a list of suggestions when they search for a city</h4>
<h5>Given: The Main page is open.</h5>
<h5>When: User types in the city.</h5>
<h5>Then: User see a list of cities that match what they typed.</h5>

<h4>Scenario 3: User can select a city from the suggested list</h4>
<h5>Given: User types Toronto in the city textbox and list of suggested cities show.</h5>
<h5>When: User selects a city.</h5>
<h5>Then: User can see all of the events in that city.</h5>


<h2>Show/Hide Event Details</h2>
<h3>User Story</h3>
<h4>As a User, I should be able to show/hide event details so that I can get information on the events I have interest in.</h4>
<h3>Scenarios</h3>
<h4>Scenario 1: An event element is collapsed by default</h4>
<h5>Given: User has not selected a city.</h5>
<h5>When: User opens the app and no action has been completed.</h5>
<h5>Then: User will have the event element collapsed.</h5>

<h4>Scenario 2: User can expand an event to see details.</h4>
<h5>Given: User has chose an event that interests them.</h5>
<h5>When: User chooses the event.</h5>
<h5>Then: User can see the event details on the app.</h5>

<h4>Scenario 3: User can collapse an event to hide details</h4>
<h5>Given: User has opened an event and hidden an event that does not interest them.</h5>
<h5>When: User chooses the event.</h5>
<h5>Then: User can hide an event on the app</h5>


<h2>Specify Number of Events</h2>
<h3>User Story</h3>
<h4>As a User, I should be able to show a number of events, so I can be able to control how many events are being shown.</h4>
<h3>Scenarios</h3>
<h4>Scenario 1: When user hasn’t specified a number, 32 events are shown by default.</h4>
<h5>Given: User has not picked how many events that they want shown to them.</h5>
<h5>When: User select the city to show the events</h5>
<h5>Then: 32 events are shown</h5>

<h4>Scenario 2: User can change the number of events displayed</h4>
<h5>Given: User has picked the amount of events they want displayed</h5>
<h5>When: User selects the events</h5>
<h5>Then: A number will be shown of how many events are displayed</h5>


<h2>Use the App When Offline</h2>
<h3>User Story</h3>
<h4>As a User, I should be able to use the app offline, so that I can be able to access event information when I cannot connect to the internet</h4>
<h3>Scenarios</h3>
<h4>Scenario 1: Show cached data when there’s no internet connection</h4>
<h5>Given: User looses connection while on app</h5>
<h5>When: User goes on app to search for events</h5>
<h5>Then: The app will show client the event details for cached data</h5>

<h4>Scenario 2: Show error when user changes search settings (city, number of events).</h4>
<h5>Given: User changed the search settings on the app</h5>
<h5>When: User opens the app from the search settings</h5>
<h5>Then: User will receive an error message stating that user changed the search settings</h5>


<h2>Add an App Shortcut to the Home Screen</h2>
<h3>User Story</h3>
<h4>As a User, I should be able to access the home screen, so that I can be able to check my events</h4>
<h3>Scenarios</h3>
<h4>Scenario 1: User can install the meet app as a shortcut on their device home screen</h4>
<h5>Given: User has the app installed on their on their preferred device.</h5>
<h5>When: User installs the app on their preferred device.</h5>
<h5>Then: User will be able to access the home screen as a shortcut.</h5>


<h2>Display Charts Visualizing Event Details</h2>
<h3>User Story</h3>
<h4>As a User, I should be able to see a chart, so that I can be able to view the amount of events are upcoming in each city</h4>
<h3>Scenarios</h3>
<h4>Scenario 1: Show a chart with the number of upcoming events in each city.</h4>
<h5>Given: User has selected a number of events per city</h5>
<h5>When: User wants to see how many events are there per city</h5>
<h5>Then: User will see a chart that will be displayed on how many events per city</h5>

<h1>How Serverless Function Will Be Used</h1>
<h4>The Serverless function will be used to provde cost-effeciency due to the reason that the serverless function will be handling a lot of the tasks like event processing and visualization. This will give the user a good and smooth experience on the app as there really won't be any managing any server infrastructure. Cloud based serverless solutions will allow the app to be running smooth and give clients real-time data for the events of their choice</h4>
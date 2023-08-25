// src/App.js

import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="App">
        <CitySearch />
        <EventList />
        <NumberOfEvents />
      </div>
    </div>
  );
}

export default App;

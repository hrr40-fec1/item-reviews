import React from 'react';
import Summary from './Summary';
import Filters from './Filters';
import Reviews from './Reviews';

const App = () => (
  <div className="App">
    <h1> Target Reviews </h1>
    <Summary />
    <Filters />
    <Reviews />
  </div>
);

export default App;

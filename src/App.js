import React from 'react';
import Stocks from './Stocks';
import './App.scss';

function App() {
  return (
    <div className="App">
       <h2>Live Stocks  - {(new Date).toDateString()}</h2>
       <Stocks />
    </div>
  );
}

export default App;
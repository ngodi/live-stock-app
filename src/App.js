import React from 'react';

import './App.scss';

function App() {
  return (
    <div className="App">
       <h2>Live Stocks  - {(new Date).toDateString()}</h2>
    </div>
  );
}

export default App;
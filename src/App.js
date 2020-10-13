import React from 'react';
import ocean from './ocean.jpg';
import './App.css';
import first from './First_Component';

function App() {
  return (
    <div>
      <div className="Ocean">
          <img src={ocean} className="Ocean" alt="logo" />
      </div>
      <div className="Second">
          <first/>
      </div>
    </div>
  );
}

export default App;

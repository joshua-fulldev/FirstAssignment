import React from 'react';
import trafalger_law from './One piece/trafalgar_law.jpg';
import './App.css';

function TenthComponent() {
  return (
    <div>
      <div className="Ocean">
          <a href="https://www.github.com">Hello, there</a>
          <a href="https://www.google.com">
            <img src={trafalger_law} alt="" />
          </a>
      </div>
    </div>
  );
}

export default TenthComponent;

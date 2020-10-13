import React from 'react';
import ace from './One piece/ace.jpg';
import './App.css';

function FifthComponent() {
  return (
    <div>
      <div className="Ocean">
          <a href="https://www.github.com">Hello, there</a>
          <a href="https://www.google.com">
            <img src={ace} alt="" />
          </a>
      </div>
    </div>
  );
}

export default FifthComponent;

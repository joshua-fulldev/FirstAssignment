import React from 'react';
import shanks from './One piece/shanksf.jpg';
import './App.css';

function SevenComponent() {
  return (
    <div>
      <div className="Ocean">
          <a href="https://www.github.com">Hello, GHost</a>
          <a href="https://www.google.com">
            <img src={shanks} alt="" />
          </a>
      </div>
    </div>
  );
}

export default SevenComponent;

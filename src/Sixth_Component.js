import React from 'react';
import pic from './One piece/thumb-1920-516664.jpg';
import './App.css';

function SixthComponent() {
  return (
    <div>
      <div className="Ocean">
          <a href="https://www.github.com">Hello, there</a>
          <a href="https://www.google.com">
            <img src={pic} alt="" />
          </a>
      </div>
    </div>
  );
}

export default SixthComponent;

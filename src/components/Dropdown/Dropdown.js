import React, { useState } from 'react';
import './DropDown.css'

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-menu">
      <button onClick={toggleDropdown} className="dropdown-button">
        Features
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <a href="/sen">Sentiment analysis</a>
          <a href="/churn">Churn prediction</a>
          <a href="/social">Social listening</a>
          <a href="/fake">Fake sentiment analysis</a>
          <a href="/meme">Meme analysis</a>
        </div>
      )}
    </div>
  );
};

export default DropDown;

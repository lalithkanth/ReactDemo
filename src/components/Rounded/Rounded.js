import React from 'react';
import './Rounded.css'; // Create a CSS file for styling

const Rounded = ({ text, onClick }) => {
  return (
    <button className="rounded-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Rounded;

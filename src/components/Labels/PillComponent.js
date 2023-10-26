import React from 'react';

const Pill = ({ text, color }) => {
  const pillStyle = {
    backgroundColor: color,
    color: 'white', // Text color
    borderRadius: '16px',
    padding: '8px 16px',
    margin: '4px',
    display: 'inline-block',
    fontSize: '14px',
  };

  return (
    <div style={pillStyle}>
      {text}
    </div>
  );
};

const PillComponent = () => {
  return (
    <div>
      <Pill text="Topic" color="#04BADE" />
      <Pill text="Positive" color="#3A805B" />
      <Pill text="Negative" color="#e74c3c" />
    </div>
  );
};

export default PillComponent;

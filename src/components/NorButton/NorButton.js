import React from 'react';
import { Link } from 'react-router-dom';
import './NorButton.css';

const NorButton = ({ to, text, icon, iconStyle }) => {
  const iconElement = icon && React.cloneElement(icon, { className: `icon ${iconStyle}` });

  return (
    <Link to={to} style={{ textDecoration: 'none', fontFamily: 'Poppins' }}>
      <button className='main1'>
 
        {text}
        {iconElement}
      </button>
    </Link>
  );
};

export default NorButton;

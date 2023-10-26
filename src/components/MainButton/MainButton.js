import React from 'react';
import { Link } from 'react-router-dom';
import './MainButton.css';

const MainButton = ({ to, text, icon, iconStyle }) => {
  const iconElement = icon && React.cloneElement(icon, { className: `icon ${iconStyle}` });

  return (
    <Link to={to} style={{ textDecoration: 'none', fontFamily: 'Poppins' }}>
      <button className='main'>
 
        {text}
        {iconElement}
      </button>
    </Link>
  );
};

export default MainButton;

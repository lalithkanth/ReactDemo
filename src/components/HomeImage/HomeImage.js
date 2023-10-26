import React from 'react';
import image from '../../assets/Homepage.png';

import './HomeImage.css';

const HomeImage = () => {
  return (
    <div className="image-container">
      <img src={image} alt="image1" className="image4"  />
    </div>
  );
};

export default HomeImage;

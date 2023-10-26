import React from 'react';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import './Image.css';

const Image = () => {
  return (
    <div className="image-container">
      <img src={image1} alt="image1" className="image1"  />
      <img src={image2} alt="Image 2" className="image2" />
    </div>
  );
};

export default Image;

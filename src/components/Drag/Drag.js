import React, { useState } from 'react';
import './Drag.css'; 
import upload from '../../assets/upload.png'


const Drag = () => {
  const [dragging, setDragging] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);

    const files = Array.from(e.dataTransfer.files);
    console.log(files);
  };

  return (
    <div
      className={`file-drop-area ${dragging ? 'dragging' : ''}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <img src={upload}  className="image3"  />
      <p>Drag and drop files here</p>
      <p>Only xlsx, csv Format Files are accepted</p>
      <label className="file-input-label">
        <input type="file" multiple style={{ display: 'none' }} />
       <p> Your files here or browse to upload</p>
      </label>
    </div>
  );
};

export default Drag;

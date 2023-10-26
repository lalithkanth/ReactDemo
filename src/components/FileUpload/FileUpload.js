import React, { useRef } from 'react';
import './FileUpload.css';

function FileUpload({ onFileChange }) {
  const fileInputRef = useRef(null);

  const handleFileUpload = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      onFileChange(selectedFile);
    }
  };

  return (
    <div>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <button onClick={handleFileUpload}>Upload </button>
    </div>
  );
}

export default FileUpload;

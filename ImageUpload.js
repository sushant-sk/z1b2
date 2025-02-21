import React, { useState } from 'react';

const ImageUpload = ({ onImageUpload }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    if (selectedFile) {
      onImageUpload(selectedFile);
    }
  };

  return (
    <div className="image-upload-container">
      <h2 className="image-upload-title">Upload Image</h2>
      <input
        type="file"
        onChange={handleFileChange}
        className="image-upload-input"
      />
      {file && <p className="image-upload-file-name">Selected file: {file.name}</p>}
    </div>
  );
};

export default ImageUpload;

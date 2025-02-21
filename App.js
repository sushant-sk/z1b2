// src/App.js
import React, { useState } from 'react';
import ImageUpload from './components/ImageUpload';
import ImageResizer from './components/ImageResizer';
import ImagePreview from './components/ImagePreview';

function App() {
  const [imageFile, setImageFile] = useState(null);
  const [resizedImages, setResizedImages] = useState([]);

  const handleImageUpload = (file) => {
    setImageFile(file);
  };

  const handleResizedImages = (images) => {
    setResizedImages(images);
  };

  return (
    <div>
      <h1>Image Upload and Resize</h1>
      <ImageUpload onImageUpload={handleImageUpload} />
      {imageFile && (
        <ImageResizer imageFile={imageFile} onResizedImages={handleResizedImages} />
      )}
      <ImagePreview images={resizedImages} />
    </div>
  );
}

export default App;

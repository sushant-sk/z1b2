// src/components/ImageResizer.js
import React, { useState, useEffect } from 'react';

const ImageResizer = ({ imageFile, onResizedImages }) => {
  const [resizedImages, setResizedImages] = useState([]);

  const resizeImage = (file, width, height) => {
    const img = new Image();
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    const reader = new FileReader();
    reader.onloadend = () => {
      img.src = reader.result;
      img.onload = () => {
        // Set canvas dimensions to the target size
        canvas.width = width;
        canvas.height = height;

        // Draw the image on the canvas
        ctx.drawImage(img, 0, 0, width, height);

        // Convert the canvas to a base64 image string
        const resizedImage = canvas.toDataURL('image/jpeg');
        setResizedImages((prevImages) => [...prevImages, resizedImage]);
      };
    };
    reader.readAsDataURL(file);
  };

  const handleResize = () => {
    if (imageFile) {
      // Resize the image into the required sizes
      resizeImage(imageFile, 300, 250);
      resizeImage(imageFile, 728, 90);
      resizeImage(imageFile, 160, 600);
      resizeImage(imageFile, 300, 600);
    }
  };

  // Send resized images to parent component
  useEffect(() => {
    if (resizedImages.length > 0) {
      onResizedImages(resizedImages);
    }
  }, [resizedImages, onResizedImages]);

  return (
    <div className="image-resizer-container">
      <button className="resize-button" onClick={handleResize}>
        Resize Image
      </button>
      {resizedImages.length > 0 && (
        <div className="resized-images-container">
          {resizedImages.map((image, index) => (
            <img key={index} src={image} alt={`Resized ${index}`} className="resized-image" />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageResizer;

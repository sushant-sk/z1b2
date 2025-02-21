// src/components/ImagePreview.js
import React from 'react';

const ImagePreview = ({ images }) => {
  return (
    <div className="image-preview-container">
      {images.length > 0 ? (
        <div>
          <h3 className="preview-title">Preview of Resized Images:</h3>
          <div className="image-preview-grid">
            {images.map((image, index) => (
              <div key={index} className="image-preview-item">
                <h4 className="image-preview-heading">{`Resized Image ${index + 1}`}</h4>
                <img src={image} alt={`resized-${index}`} className="image-preview-img" />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="no-images-text">No images to preview.</p>
      )}
    </div>
  );
};

export default ImagePreview;

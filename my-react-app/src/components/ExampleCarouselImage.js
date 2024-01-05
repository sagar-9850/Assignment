// components/ExampleCarouselImage.js
import React from 'react';

function ExampleCarouselImage({ text }) {
  return (
    <img
      className="d-block w-100"
      src={`https://via.placeholder.com/800x400?text=${text}`}
      alt={text}
    />
  );
}

export default ExampleCarouselImage;

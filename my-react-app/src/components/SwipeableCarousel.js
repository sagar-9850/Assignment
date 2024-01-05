// src/components/SwipeableCarousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SwipeableCarousel.css'; // Import the CSS file

function SwipeableCarousel() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="swipeable-carousel">
      <Slider {...settings}>
        <div className="carousel-slide">
          <div className="slide-content">
            <h2>Section 1</h2>
            {/* Add content for the first section */}
          </div>
        </div>
        <div className="carousel-slide">
          <div className="slide-content">
            <h2>Section 2</h2>
            {/* Add content for the second section */}
          </div>
        </div>
        <div className="carousel-slide">
          <div className="slide-content">
            <h2>Section 3</h2>
            {/* Add content for the third section */}
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default SwipeableCarousel;

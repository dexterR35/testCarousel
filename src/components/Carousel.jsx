import React, { useState, useEffect } from 'react';

import image1 from '../assets/2.png';
import image2 from '../assets/3.png';
import image3 from '../assets/Desktop-banner.png';



const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      image: image1,
      alt: 'Image 2.png'
    },
    {
      id: 2,
      image: image2,
      alt: 'Image 3.png'
    },
    {
      id: 3,
      image: image3,
      alt: 'Desktop Banner'
    }
  ];

  // Autoplay effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="container-slider">
      <div className="slider caroselloPromo">
        <div className="slick-list">
          <div className="slick-track">
            {slides.map((slide, index) => (
              <div 
                key={slide.id} 
                className={`slick-slide ${index === currentSlide ? 'slick-current slick-active' : ''}`}
                style={{
                  opacity: index === currentSlide ? 1 : 0,
                  transition: 'opacity 600ms ease-in-out',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%'
                }}
              >
                <div className="immagine-slider" style={{maxHeight: '300px', width: '100%'}}>
                  <img 
                    className="carosello-promo" 
                    src={slide.image} 
                    alt={slide.alt}
                    style={{width: '100%', height: '100%', objectFit: 'cover'}}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

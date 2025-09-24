import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import image1 from '../assets/2.png';
import image2 from '../assets/3.png';
import image3 from '../assets/Desktop-banner.png';

const Carousel = () => {
  const sliderRef = useRef(null);

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

  useEffect(() => {
    let isMounted = true;

    const initializeSlick = async () => {
      try {
        // Import Slick Carousel
        await import('slick-carousel/slick/slick.min.js');
        
        if (isMounted && sliderRef.current && typeof $ !== 'undefined' && $.fn.slick) {
          $(sliderRef.current).slick({
            dots: false,                    
            infinite: true,                 
            speed: 800,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,                
            autoplaySpeed: 2000,           
            pauseOnHover: true,           
            fade: true,                   
            cssEase: 'ease-in-out',
            arrows: false,                 
            responsive: [                   
              {
                breakpoint: 768,
                settings: {
                  autoplaySpeed: 2500,    
                  speed: 600
                }
              },
              {
                breakpoint: 480,
                settings: {
                  autoplaySpeed: 2000,     
                  speed: 500
                }
              }
            ]
          });
        }
      } catch (error) {
        console.error('Error loading Slick Carousel:', error);
      }
    };

    initializeSlick();

   
    return () => {
      isMounted = false;
      if (sliderRef.current && $(sliderRef.current).hasClass('slick-initialized')) {
        $(sliderRef.current).slick('unslick');
      }
    };
  }, []);

  return (
    <div className="carousel-container">
      <div ref={sliderRef} className="slick-carousel">
        {slides.map((slide) => (
          <div key={slide.id} className="slide-item">
            <div className="slide-content">
              <img 
                src={slide.image} 
                alt={slide.alt}
                className="slide-image"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
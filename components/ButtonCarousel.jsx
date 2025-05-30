import { useState } from 'react';
import './css/ButtonCarousel.css';

const ButtonCarousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel-container">
      <button className="nav-button left" onClick={goToPrev}>&lt;</button>

      <div className="carousel-content">
        <img src={slides[currentIndex].image} alt="slide" className="carousel-image" />
        <p className="carousel-description">{slides[currentIndex].description}</p>
      </div>

      <button className="nav-button right" onClick={goToNext}>&gt;</button>

      <div className="carousel-markers">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ButtonCarousel;

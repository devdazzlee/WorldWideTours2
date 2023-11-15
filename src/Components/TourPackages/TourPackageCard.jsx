import React, { useEffect, useState } from 'react';
import '../Animation/Animation.css';
import './TourPackageCard.css';
import { Link } from 'react-router-dom';

const TourPackageCard = ({ img, name, description }) => {
  useEffect(() => {
    // Add your scroll animation logic here
    const cards = document.querySelectorAll('.tour-package-card');

    const handleScroll = () => {
      cards.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight) {
          card.classList.add('fade-up-element');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="tour-package-card">
      <div className="image-container">
        <img src={img} alt={name} className="package-image" />
      </div>
      <div className="text-container">
        <h2 className="package-title">{name}</h2>
        <p className="package-description">{description}</p>
        <Link to="/Contact-us">
          <button className="book-now-button">Book Now</button>
        </Link>
      </div>
    </div>
  );
};

export default TourPackageCard;

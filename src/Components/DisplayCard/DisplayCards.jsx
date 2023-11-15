import React, { useEffect } from 'react';
import './DisplayCard.css';
import '../Offer/OfferCard.css'
import '../Animation/Animation.css'
import img1 from '../../Images/Asset 1.svg';
import img2 from '../../Images/Asset 2.svg';
import img3 from '../../Images/Asset 7.svg';

const DisplayCards = () => {
  useEffect(() => {
    // Add your scroll animation logic here
    const cards = document.querySelectorAll('.card');

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
    <div className='flex flex-wrap justify-center bg-white cardsPosition'>
      <div className="Offer-card">
        <img className='w-16  m-auto' src={img3} alt="Image 3" />
        <h1>Professional Tour Guide</h1>
        <p>A professional tour guide is the key to unlocking the hidden stories and historical significance of a destination, transforming a simple visit into an enlightening journey. </p>
      </div>
      <div className="Offer-card">
        <img className='w-16  m-auto' src={img2} alt="Image 2" />
        <h1>Certified Travel Agency</h1>
        <p>A certified travel agency offers peace of mind to travelers, assuring them of quality service and expertise in planning their trips. With trained professionals and access.</p>
      </div>
      <div className="Offer-card">
        <img className='w-16  m-auto' src={img1} alt="Image 1" />
        <h1>24/7 Premium Support</h1>
        <p>
A 24/7 premium support service is a lifeline for travelers, offering assistance and solutions around the clock, regardless of time zones or emergencies.</p>
      </div>
    </div>
  );
};

export default DisplayCards;

import React, { useEffect, useState } from 'react';
import './ImageFixed.css';
import '../Animation/Animation.css'

const ImageFixed = () => {

  useEffect(() => {
    // Add your scroll animation logic here
    const cards = document.querySelectorAll('.main-center-text');

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
    <div  className="component-container" >
      <div className="background-image"></div>
      <div className="overlay"></div>
      <div className="content">
        <h1 className=" main-center-text text-3xl sm:text-4xl md:text-5xl text-white font-bold text-center">
          No matter where you’re <br /> going from, we take you <br /> there.
        </h1>
        <p className=" main-center-text text-white text-center mt-2 sm:mt-4">
        we are your trusted partner in getting you to your destination.<br />  We provide seamless and reliable transportation solutions, ensuring you
        </p>
      </div >
    </div>
  );
};

export default ImageFixed;

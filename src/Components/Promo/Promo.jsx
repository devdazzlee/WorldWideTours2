import './Promo.css'  
import React, { useEffect, useState } from 'react';
import '../Animation/Animation.css'
import { Link } from 'react-router-dom';

const Promo = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.animation-from-bottom');
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
    <div className="component-container2">
    <div className="background-image2"></div>
    <div className="p-4 md:p-0 flex flex-col m-auto">
      <h3 className="text-xl sm:text-xl md:text-xl lg:text-xl text-white font-bold text-center">PROMO</h3>
      <h1 className="animation-from-bottom text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-white font-bold text-center">
        No matter where you’re <br /> going from, we take you <br /> there.
      </h1>
      <p className="animation-from-bottom text-white text-center mt-2 sm:mt-2 md:mt-2 lg:mt-2">
      No matter your starting point, our expertise in travel ensures that  <br />we'll accompany you on a seamless journey to your chosen destination.
      </p>
      <div className="text-center mt-2 sm:mt-2 md:mt-2 lg:mt-2">

        <Link to={'/Contact-us  '} > 
        <button style={{'background' :"#0090B7"}} className="animation-from-bottom w-36 sm:w-36 md:w-36 lg:w-36  text-white font-bold py-2 px-4 rounded">
          Claim promo
        </button>
        </Link>
      </div>
    </div>
  </div>
  
  

  )
}

export default Promo
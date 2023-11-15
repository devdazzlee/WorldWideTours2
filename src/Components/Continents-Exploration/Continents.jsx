import React, { useEffect } from 'react';
import '../Animation/Animation.css'
const Continents = () => {

  useEffect(() => {
    // Add your scroll animation logic here
    const cards = document.querySelectorAll('.Main-Center-heading');

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
    <div className='  bg-white p-4 sm:p-6 md:p-8'>
  <h1 className=' Main-Center-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black font-bold text-center'>
  Popular Tour Package
  </h1>
  <p className=' Main-Center-heading text-black text-center py-2 sm:py-4 md:py-6'>
    
Our popular tour package offers an exciting and well-crafted itinerary <br /> arefully designed to showcase the best a destination has to offer.
  </p>
</div>

  )
}

export default Continents
import React, { useEffect } from 'react';
import '../Animation/Animation.css'
const DetailTours = () => {
  useEffect(() => {
    // Add your scroll animation logic here
    const cards = document.querySelectorAll('.main-center-heading');

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
    <div  className='flex flex-col items-center mt-36 '>
    <h1 className='main-center-heading text-4xl md:text-6xl font-bold text-white my-2 md:my-4'>Tours</h1>
    <p className='main-center-heading text-lg md:text-2xl font-bold mt-2 md:mt-4 text-white text-center'>We are professional planners for your vacations.</p>
  </div>
  
  )
}

export default DetailTours
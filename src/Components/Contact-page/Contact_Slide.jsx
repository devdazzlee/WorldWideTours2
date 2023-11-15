import React, { useEffect } from 'react';
import '../Animation/Animation.css'
const Contact_Slide = () => {
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
    <h1 className='fade-up-element  text-4xl md:text-6xl font-bold text-white my-2 md:my-4'>Contact us</h1>
    <p className='fade-up-element  text-lg md:text-2xl font-bold mt-2 md:mt-4 text-white text-center'>We would love to hear from you.</p>
  </div>
  )
}

export default Contact_Slide
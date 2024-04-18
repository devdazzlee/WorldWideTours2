import React, { useEffect } from 'react';
import '../Animation/Animation.css'
import Form from '../Form/Form';
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
    <div className='flex justify-center py-12   flex-wrap'  >
    <div     className='flex flex-col justify-center		 md:px-12 px-0' >
    
    <h3 class="text-white text-xl md:text-2xl font-bold" >Contact us</h3>
          <h1 class="text-white text-3xl md:text-6xl font-bold my-2 md:my-4"  >
            Experience the world, <br /> like never before
          </h1>
        
    </div>
    
    <div  className='  md:mt-0 mt-10' >
    <Form />
    </div>
    </div>
  )
}

export default Contact_Slide
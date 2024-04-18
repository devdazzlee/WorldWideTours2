import React, { useEffect } from 'react';
import '../Animation/Animation.css'
const GetinTouch = () => {

  useEffect(() => {
    
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
    <>
    <div  className='flex main-center-heading justify-center flex-col items-center py-14	' >
    <h2  style={{"color" : "#06885C"}} class="mb-6 text-3xl font-bold">GET IN TOUCH</h2>
    <p class="mb-6  w-2/4	text-center text-neutral-500 dark:text-neutral-300">
    Feel free to reach out and connect with us - your gateway to personalized travel experiences. Whether you have questions, need assistance, or want to start planning your next adventure, we're here to make your travel dreams come true.


    </p>
    </div>
    
    </>
  )
}

export default GetinTouch
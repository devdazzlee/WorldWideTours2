import React, { useEffect, useState } from 'react';
import '../Animation/Animation.css'
import './Testimonal.css';
import img1 from '../../Images/woman-with-backpack-exploring-bali-indonesia-.jpg';
import img2 from '../../Images/img__0003_Layer-5.jpg';
import img3 from '../../Images/img__0007_Layer-1.jpg';

const Testimonial = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.animation-from-left');
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
    <div className='ImageCard py-10 w-full'>
      <div className="flex flex-wrap animation-from-left">
        <div className=" md:w-2/5	md:ml-20		 h-4/5 mb-4 md:mb-0">
          <img className='w-full md:w-11/12' src={img1} alt="Testimonial Image" />
        </div>
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl md:text-md text-white font-bold my-4 image-card-heading">
            TESTIMONIAL
          </h3>
          <h1 className="text-4xl font-bold image-card-subheading">
            What they say about us
          </h1>
          <p className='py-4'>
          Discover what our satisfied travelers are saying about their incredible journeys with us. Read firsthand testimonials and reviews.
          </p>
          <div className='flex flex-col md:flex-row'>
  <div className="w-full md:w-1/2 Offer-card mb-4 md:mb-0">
    <p className='text-left'>
    This tourism company exceeded our expectations. From seamless bookings to personalized recommendations, 
    </p>
    <div className='flex p-2'>
      <img className='w-1/5 h-1/5' src={img2} alt="Offer Image" />
      <div className='ml-4 text-left'>
        <h2 className='font-bold' style={{ "color": "#334066" }}>Sophia</h2>
      <h2 className='font-bold' style={{ "color": "#B3B2BB" }}>Content Writer</h2>
      </div>
    </div>
  </div>
  <div className="w-full md:w-1/2 Offer-card">
    <p className='text-left'>
    We had an unforgettable experience with this tourism company! Their exceptional service, well-planned itineraries,
    </p>
    <div className='flex p-2'>
      <img className='w-1/5 h-1/5' src={img3} alt="Offer Image" />
      <div className='ml-4 text-left'>
        <h2 className='font-bold' style={{ "color": "#334066" }}>Bethany Jenkins</h2>
        <h2 className='font-bold' style={{ "color": "#B3B2BB" }}>Vlogger</h2>
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
  );
}

export default Testimonial;

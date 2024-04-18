import React, { useEffect, useState } from 'react';
import '../Animation/Animation.css'
import './Testimonal.css';
import img1 from '../../Images/woman-with-backpack-exploring-bali-indonesia-.jpg';
import { Link } from 'react-router-dom';

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
    <div className='ImageCard py-10 w-full md:px-0 px-12'>
      <div className="flex flex-wrap animation-from-left">
        <div className=" md:w-2/5	md:ml-20		 h-4/5 mb-4 md:mb-0">
          <img    className='w-full md:w-11/12 rounded-3xl	' src={img1} alt="Testimonial Image" />
        </div>
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl md:text-md text-white font-bold my-4 image-card-heading">
          Explore World with us.
          </h3>
          <h1 className="text-4xl font-bold image-card-subheading">
          Avail Discounted Tours Up to 30% off

          </h1>
          <p className='py-4'>
          Let’s indulge in the amazing life experience of traveling to Pakistan. Hassle-free fully managed tours with an option to customization as per client needs, guided tours, safe and secure travel, best accommodations and quality food. Search your favorite tourist destinations of Pakistan below or check out our latest travel blogs.
          </p>
          <Link to="/Contact-us">
          <button  style={{"background" :"#0090B7"}} class="text-white font-bold py-4 px-5 rounded-full">
          See Promotional Tours
          </button>
          </Link>


        </div>
      </div>
    </div>
  );
}

export default Testimonial;

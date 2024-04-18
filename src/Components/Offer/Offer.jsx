import React, { useEffect } from 'react';
import '../Animation/Animation.css'
import img from '../../Images/shell_1-prxfq85ypq4ac51fm1hz69hmyqtdb3tuai2un8rw8w.png'
import img2 from '../../Images/shell_2-prxfq93swk5knr02gjwlqr93k4oqisxkmmqc4iqi2o.png'
import Card from '../Card/Card'
import OfferCards from './OfferCards'
import OfferCardssec from './OfferCard2'

const Offer = () => {

  useEffect(() => {
    const cards = document.querySelectorAll('.heading-center-text');
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
    <div className='bg-white'>
    <div className="sm:flex sm:justify-center text-center">
      <div className="p-4 sm:ml-0 md:ml-20">
        <h3  style={{ color: '#06885C' }}  className="heading-center-text text-2xl md:text-md text-white font-bold my-4 image-card-heading">WHO WE ARE</h3>
        <h1 className="heading-center-text text-4xl font-bold image-card-subheading">
          Explore the world and<br /> become your own tour <br /> guide.
        </h1>
      </div>
    </div>
  
    <OfferCards />
    <OfferCardssec />
  
    {/* <div className='flex justify-center sm:justify-start'>
      <img src={img2} alt="" />
    </div> */}
  </div>
  
  )
}

export default Offer
import React, { useEffect } from 'react';
import './OfferCard.css'
import '../Animation/Animation.css'
import img1 from '../../Images/Asset 9.svg'
import img2 from '../../Images/Asset 4.svg'
import img3 from '../../Images/Asset 3.svg'

const OfferCards = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.Offer-card');
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
    <div>

<div className='flex flex-wrap justify-center bg-white  main-Offer-card  '>
      <div className="Offer-card">
      <img  className='w-16  m-auto'   src={img1} />
        <h1>Destination weddings</h1>
        <p>Create the wedding of your dreams in a breathtaking destination with our specialized destination wedding services.</p>
      </div>
      <div className="Offer-card">
      <img  className='w-16  m-auto'   src={img2} />
        <h1>Honeymoons</h1>
        <p>Celebrate your love story with an enchanting honeymoon in the world's most romantic destinations Our tailor-made honeymoon </p>
      </div>
      <div className="Offer-card">
      <img  className='w-16  m-auto'   src={img3} />
        <h1>Group getaways</h1>
        <p>Gather your friends or family for an unforgettable group getaway to create lasting memories. Our customized group travel packages</p>
      </div>
    </div>
    </div>
  )
}

export default OfferCards
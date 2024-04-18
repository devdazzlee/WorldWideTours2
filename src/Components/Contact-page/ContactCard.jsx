import React, { useEffect } from 'react';
import '../Animation/Animation.css'
const ContactCard = () => {

  useEffect(() => {
    // Add your scroll animation logic here
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
    <div style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }} className="Offer-card">
          <i  style={{"fontSize" : "2rem" , "color" : "#0090B7"}} class="fa-solid fa-location-dot"></i>
            <h1>Location</h1>
            <p>Gulshan Iqbal, Karachi</p>
          </div>
          <div style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }} className="Offer-card">

          <i   style={{"fontSize" : "2rem" , "color" : "#0090B7"}}  class="fa fa-phone " aria-hidden="true"></i>
            <h1>Call us</h1>
            <p>+92 342-3344040</p>
          </div>
          <div style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }} className="Offer-card">

          <i   style={{"fontSize" : "2rem" , "color" : "#0090B7"}}  class="fa fa-envelope " aria-hidden="true"></i>
            <h1>Our email</h1>
            <p>contact@worldwidetours.co</p>

          </div>
        </div>
        </div>
  )
}

export default ContactCard
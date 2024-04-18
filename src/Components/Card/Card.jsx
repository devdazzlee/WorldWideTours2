import React, { useEffect, useState } from 'react';
import '../Animation/Animation.css'
import './Card.css';
import img1 from '../../Images/young-couple-with-dog-traveling-with-dog-on-vintage-minivan.jpg';
import { Link } from 'react-router-dom';

const Card = () => {
  useEffect(() => {
    const cards1 = document.querySelectorAll('.image-animation');
    const cards2 = document.querySelectorAll('.leftCardAnimation');
  
    const handleScroll = () => {
      cards1.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight) {
          card.classList.add('fade-from-right'); // Apply animation for class1
        }
      });
  
      cards2.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight) {
          card.classList.add('element-to-animate'); // Apply animation for class2
        }
      });
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  return (
    <div className={`ImageCard py-10`} >
      <div className="flex leftCardAnimation flex-col-reverse md:flex-row">
        <div className={`w-full md:w-1/2 p-4 text-center md:text-left md:ml-20`}>
          <h3 style={{ color: '#06885C' }}  className="text-2xl md:text-md text-white font-bold my-4 image-card-heading">WHO WE ARE</h3>
          <h1 className="text-4xl font-bold image-card-subheading">
            Traveling opens the door to <br /> creating memories.
          </h1>
          <p className="ImageCard-para">
          Traveling is a gateway to a world of endless possibilities, where each journey unfolds a tapestry of experiences and moments that become cherished memories. It's an opportunity to immerse oneself in different cultures, savor exotic cuisines, and witness the beauty of diverse landscapes.
          </p>
          <Link to={'/Contact-us'}>
          <button type="submit" className="elementor-button elementor-size-lg custom-button mt-4">
            <span>
              <span className="elementor-button-icon"></span>
              <span className="elementor-button-text">Learn More</span>
            </span>
          </button>
          </Link>
        </div>
        <div className=" w-full md:w-1/2">
          <img style={{ "borderRadius": "2%" }} className='w-full image-animation' src={'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} alt="Travel Image" />
        </div>
      </div>
    </div>
  );
};

export default Card;

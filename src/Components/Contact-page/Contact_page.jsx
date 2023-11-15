import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import ImageSlider from '../ImageSlider/ImageSlider';
import Form from '../Form/Form';
import Card from '../Card/Card';
import ImageFixed from '../ImageFixed/ImageFixed';
import DisplayCards from '../DisplayCard/DisplayCards';
import Continents from '../Continents-Exploration/Continents';
import VisitingCards from '../VisitingCards/VisitingCards';
import Offer from '../Offer/Offer';
import Testimonal from '../Testimonal/Testimonal';
import Promo from '../Promo/Promo';
import Reviews from '../../Reviews/Reviews';
import TourPackages from '../TourPackages/TourPackages';
import WorldBook from '../World-book/WorldBook';
import Contactus from '../Contact-us/Contact-us';
import Footer from '../Footer/Footer';
import ImageSection from '../ImageSection/ImageSection';
import Contact_Slide from './Contact_Slide';
import GetinTouch from './GetinTouch';
import DetailTours from '../DetailedTour/Tour';
import ContactCard from './ContactCard';
import Contact_Form from './Contact_Form';
import { Helmet } from 'react-helmet';
const Contact_Page = () => {
  const images = [
    require('../../Images/eiffel-tower-in-paris.jpg'),
    require('../../Images/evening-view-of-prague-bridges-over-vltava-river.jpg'),
    require('../../Images/fukuoka-japan-skyline.jpg'),
    require('../../Images/grand-canyon-arizona-usa-landscape.jpg'),
  
  ];
const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  const backgroundImageStyle = {
    backgroundSize: 'cover',
    height: "100vh",
    backgroundRepeat: 'no-repeat',
    backgroundImage: `linear-gradient(rgba(78, 89, 121, 0.7), rgba(78, 89, 121, 0.7)), url(${images[currentImageIndex]})`,
    transition: 'background-image 1s ease',
  };

  return (
    <>
    <Helmet>
    <meta charSet="utf-8" />
  <title>Contact Us - Worldwide Tours</title>
  <link rel="canonical" href="https://worldwidetours.co/contact-us" /> 
  <meta name="description" content="Contact Worldwide Tours for inquiries, bookings, and travel assistance. We are here to help you plan your next adventure." />
  <meta name="keywords" content="contact, contact us, inquiries, bookings, travel assistance, worldwide tours" />
  <meta property="og:title" content="Contact Us - Worldwide Tours" />
  <meta property="og:description" content="Contact Worldwide Tours for inquiries, bookings, and travel assistance. We are here to help you plan your next adventure." />
  <meta property="og:image" content="https://worldwidetours.co/contact-us-image.jpg" />
  <meta property="og:url" content="https://worldwidetours.co/contact-us" />


</Helmet>
      <div className="background-image-slider" style={backgroundImageStyle}>
        <Navbar />
        <Contact_Slide />
      </div>
      
<div  className='bg-white'  >
      <GetinTouch />

</div>

<ContactCard/>

      <div className='bg-white'  >

        <Contact_Form/>
      </div>

      <Footer />

    </>
  );
};

export default Contact_Page;
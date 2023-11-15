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
import { Helmet } from 'react-helmet';
const Destination = () => {
  const images = [
    require('../../Images/eiffel-tower-in-paris.jpg'),
    require('../../Images/evening-view-of-prague-bridges-over-vltava-river.jpg'),
    require('../../Images/fukuoka-japan-skyline.jpg'),
    require('../../Images/grand-canyon-arizona-usa-landscape.jpg'),
    // require('../../Images/kelingking-beach-nusa-penida-bali-indonesia.jpg'),
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
  <title>Destinations - Worldwide Tours</title> 
  <link rel="canonical" href="https://worldwidetours.co/destination" /> 
  <meta name="description" content="Discover our handpicked destinations from around the world. Plan your next adventure and explore breathtaking locations with Worldwide Tours." />
  <meta name="keywords" content="destinations, travel destinations, vacation spots, worldwide tours, adventure, travel" />
  <meta property="og:title" content="Destinations - Worldwide Tours" />
  <meta property="og:description" content="Discover our handpicked destinations from around the world. Plan your next adventure and explore breathtaking locations with Worldwide Tours." />
  <meta property="og:image" content="https://worldwidetours.co/destination-image.jpg" />
  <meta property="og:url" content="https://worldwidetours.co/destination" />
 
</Helmet>
      <div className="background-image-slider" style={backgroundImageStyle}>
        <Navbar />
        <ImageSection />
      </div>
      <div className='bg-white h-auto flex flex-wrap'  >

        <Card customClass="ImageCard" />
      </div>
      <div className='h-auto '   >

        <ImageFixed />
        <DisplayCards />
      </div>
      <Continents />
      <VisitingCards />
      <Offer />
      <div className='bg-white'  >

        <Testimonal />
        <Promo />
        <Reviews />
        <TourPackages />
        <WorldBook />
      </div>
      <div className='bg-white' >
        <Contactus />
      </div>
      <Footer />

    </>
  );
};

export default Destination;

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
import DetailTours from './Tour';
import { Helmet } from 'react-helmet';
const DetailTour = () => {
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
  <title>Detail Tour - Worldwide Tours</title> 
  <link rel="canonical" href="https://worldwidetours.co/detail-tour" /> 
  <meta name="description" content="Explore the details of this incredible tour. Get all the information you need, from itinerary to booking options, and embark on an unforgettable journey with Worldwide Tours." />
  <meta name="keywords" content="detail tour, tour details, tour itinerary, booking, travel, adventure, worldwide tours" />
  <meta property="og:title" content="Detail Tour - Worldwide Tours" />
  <meta property="og:description" content="Explore the details of this incredible tour. Get all the information you need, from itinerary to booking options, and embark on an unforgettable journey with Worldwide Tours." />
  <meta property="og:image" content="https://worldwidetours.co/detail-tour-image.jpg" />
  <meta property="og:url" content="https://worldwidetours.co/detail-tour" />
</Helmet>
    
      <div className="background-image-slider" style={backgroundImageStyle}>
        <Navbar />
        <DetailTours />
      </div>
      

      <VisitingCards />

      <div className='bg-white'  >

        <Promo />
        <Reviews />
        <Testimonal />
      </div>

      <Footer />

    </>
  );
};

export default DetailTour;
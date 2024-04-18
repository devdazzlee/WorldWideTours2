import React, { useState, useEffect } from 'react';
// import '../ImageSlider/ImageSlider.css';
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
import {Helmet} from "react-helmet";
import Reviews2 from '../../Reviews/Reviews2';
import Headpara from '../Head&para/Head&para';
import Mid_Sec_Opt from '../Mid_Sec_Opt/Mid_Sec_Opt';
import Hover_Image_Card from '../Hover_Image_Card/Hover_Image_Card';
import HoverImageCard from '../Hover_Image_Card/Hover_Image_Card';
import  '../Hover_Image_Card/Hover_Image_Card.css';
import FourImage from '../fourImage/fourImage';
import hunza from '../../Images/Hunza2.jpg'
import skardu from '../../Images/Skardu.jpg'
import fairy from '../../Images/FairyMedows.jpg'
const Home = () => {
  const images = [
    require('../../Images/Banner2.jpg'),
    require('../../Images/Banner2.jpg'),
    require('../../Images/Banner2.jpg'),
    require('../../Images/Banner2.jpg'),
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
    backgroundRepeat: 'no-repeat',
    backgroundImage: `linear-gradient(rgba(78, 89, 121, 0.6), rgba(78, 89, 121, 0.6)), url(${images[currentImageIndex]})`,

    transition: 'background-image 1s ease',

  };

  return (
    <>
<Helmet>
  <meta charSet="utf-8" />
  <title>Amazing Worldwide Tours - Explore the Best Travel Destinations</title>
  <link rel="canonical" href="https://worldwidetours.co/" />
 <meta name="description" content="Embark on an unforgettable adventure with Amazing Worldwide Tours. Explore the world's most stunning destinations and plan your dream vacation with us." />
  <link rel="canonical" href="https://worldwidetours.co" /> 
<meta name="keywords" content="worldwide tours, travel, adventure, vacation, destinations, explore the world" />
<meta property="og:title" content="Amazing Worldwide Tours - Your Home for Adventure" />
<meta property="og:description" content="Explore the world with amazing worldwide tours. Discover new destinations and plan your next adventure with us." />
<meta property="og:image" content="https://worldwidetours.co/home-image.jpg" />
<meta property="og:url" content="https://worldwidetours.co" />
</Helmet>


      <div className="background-image-slider" style={backgroundImageStyle}>
        <Navbar />
        <ImageSlider />
      </div>
      <Reviews2 />
      <Headpara
        title="Pakistan’s Leading Tourism Company"
        paragraph="Discover breathtaking and amazing Pakistan with one of the best Travel and Tourism Company of Pakistan. We are offering valued touristy plans with complete travel services in affordable tour packages from Lahore, Islamabad, and Karachi. Our tour managers and guides organize thrilling and audacious journeys to bring unforgettable holidays happening. So, pack your bags and travel with Pakistan Travel Places (PTP) to turn your travel dreams into reality."
      />

<VisitingCards />
<Mid_Sec_Opt/>


<Headpara
        title="Pakistan’s Top Tourism Destinations"
        paragraph="Pakistan’s awe-inspiring destinations should be visited with a hike of charm and excitement. Pakistan is enriched with the vast mountain ranges for trekkers, adventure lovers and relaxing views for the calm personalities, however, Northern Pakistan is particularly called the enduring region worldwide. Breathtaking peaks, scenic lakes, whistling springs, lush green meadows, archaeological and historical sites, there are many more to make rejoice your travel expedition.
        Check Tour Packages according to popular destinations of Pakistan and confirm your booking."
      />


<div   className='flex  justify-between bg-white hoverimagecard-resposive' >
<HoverImageCard
        imageUrl="https://images.unsplash.com/photo-1510797215324-95aa89f43c33?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fG5hdHVyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        title="View All Tours"
        defaultText="Nee Valley "
      />
      <HoverImageCard
        imageUrl={skardu}
        title="View All Tours"
        defaultText="Skardu"
      />
      <HoverImageCard
        imageUrl="https://images.unsplash.com/photo-1592396355679-1e2a094e8bf1?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="View All Tours"
        defaultText="Shog Valley"
      />
      <HoverImageCard
        imageUrl={hunza}
        title="View All Tours"
        defaultText="Hunza Valley"
      />
          <HoverImageCard
        imageUrl={fairy}
        title="View All Tours"
        defaultText="Fairy Meadows"
      />
  
</div>



<Headpara
        title="Our Recent Tours Gallery"
        paragraph="Pakistan is a very blessed country as it has high rising mountains, vast rivers, lakes, waterfalls, and much more. We offer you to travel the northern areas of Pakistan with Pakistan Travel Places and witness the beauty that God has bestowed upon Pakistan. Here is the gallery of our recent tours to the northern areas of Pakistan."
      />


      <FourImage/>
      <Testimonal />
      <Offer />

      <div className='bg-white'  >
        <TourPackages />
      </div>
      <div className='bg-white' >
        <Contactus />
      </div>
      <Footer />

    </>
  );
};

export default Home;

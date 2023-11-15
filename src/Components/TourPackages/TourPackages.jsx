import TourPackageCard from './TourPackageCard'
import './TourPackageCard.css'
import React, { useEffect, useState } from 'react';
import '../Animation/Animation.css'
import img1 from '../../Images/australian-coastline.jpg'
import img2 from '../../Images/back-view-of-friends-traveling-in-forest-in-sunny-day-with-backpacks-camping-outdoor.jpg'
import img3 from '../../Images/fukuoka-japan-skyline (1).jpg'
import img4 from '../../Images/grand-canyon-arizona-usa-landscape (1).jpg'
import img5 from '../../Images/evening-view-of-prague-bridges-over-vltava-river.jpg'
import img6 from '../../Images/eiffel-tower-in-paris.jpg'
import img7 from '../../Images/kelingking-beach-nusa-penida-bali-indonesia-.jpg'
import img8 from '../../Images/young-couple-with-dog-traveling-with-dog-on-vintage-minivan.jpg'


const TourPackages = () => {

    useEffect(() => {
        // Add your scroll animation logic here
        const cards = document.querySelectorAll('.Text-from-bottom');
    
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
        <div className='bg-white p-4 sm:p-6 md:p-8'>
            <h1     style={{"color"  :"#313E64"}}  className='Text-from-bottom text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black font-bold text-center'>
                Incredible  Tour Package
            </h1>
            <p className='Text-from-bottom text-black text-center py-2 sm:py-4 md:py-6'>
            Meticulously designed to immerse you in the wonders of your chosen destination, <br />Our incredible tour package offers a once-in-a-lifetime adventure.
            </p>

            <div className="flex flex-wrap justify-center maincard-container">
  <TourPackageCard
    img={img1}
    name="Romantic Dinner"
    description="Elevate your romance with an unforgettable dining experience. Our romantic dinner packages set the stage for cherished moments."
  />
  <TourPackageCard
    img={img2}
    name="Japan Culture Tour"
    description="Embark on a cultural journey through the heart of Japan. Our Japan Culture Tour offers a captivating exploration of ancient traditions."
  />
  <TourPackageCard
    img={img3}
    name="Sierra Nevada Tour"
    description="Discover the natural beauty and outdoor adventures of the Sierra Nevada on our immersive tour. From majestic mountains."
  />
  <TourPackageCard
    img={img4}
    name="Classical Tour"
    description="Experience the timeless allure of classical destinations with our expertly crafted Classical Tour. Immerse yourself in the rich history."
  />
</div>

            <div    className='flex flex-wrap  w-full maincard justify-between  flex-container '  >
                <TourPackageCard 
               img={img5}
                 name="Explore Bali Beach"
                 description="Dive into the serene and captivating world of Bali's beaches with our Explore Bali Beach package."
                />
        <TourPackageCard 
                            img={img6}
                 name="Hiking  Tour"
                 description="
                 Embark on an exhilarating Hiking Tour, where you'll conquer challenging trails and immerse yourself in the awe-inspiring beauty"
                />
                        <TourPackageCard 
                 img={img7}
                 name=" Exploration tour"
                 description="Our Exploration Tour is the ultimate adventure for those with a curious spirit. Journey through uncharted territories, discover hidden gems"
                />
                        <TourPackageCard 
                 img={img8}
                 name="Hiking  Newzealand"
                 description="Embark on an unforgettable journey through New Zealand's breathtaking landscapes with our Hiking New Zealand tour. "
                />
            </div>

        </div>
    )
}

export default TourPackages
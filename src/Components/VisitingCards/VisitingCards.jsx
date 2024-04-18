import React, { useEffect } from 'react';
import './VisitingCards.css'
import '../Card/Card.css'
import '../Animation/Animation.css'
import { Link } from 'react-router-dom';

const VisitingCards = () => {
    useEffect(() => {
        // Add your scroll animation logic here
        const cards = document.querySelectorAll('.Visiting-Cards');
    
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
        <div className='bg-white' >

<div className='flex flex-wrap justify-center p-4'>
    <Link to={'/Contact-us'} >

<div class="Visiting-Cards custom-card8 flex flex-col justify-center items-center mx-2 sm:mx-0 my-4 sm:my-0">
    <div  className='popular-tag'>Popular</div>
    <h3 class='text-xl sm:text-4xl font-bold'>Dubai</h3>
    <p class='text-sm sm:text-md text-center py-4 font-medium'>
    Explore the enchanting beauty of Indonesia with our exclusive tour packages. 
    </p>
    <span class="visitCard-button block  text-white py-2 px-4  mt-2 hover:bg-blue-700 cursor-pointer">
        Learn More
    </span>
</div>
    </Link>
<Link to={'/Contact-us'}>

<div class="Visiting-Cards custom-card2 flex flex-col justify-center items-center mx-2 sm:mx-0 my-4 sm:my-0">
<div  className='popular-tag'>Popular</div>
    <h3 class='text-xl sm:text-4xl font-bold'>USA</h3>
    <p class='text-sm sm:text-md text-center py-4 font-medium'>
    Embark on an unforgettable journey through the Land of the Rising Sun with our meticulously crafted Japan tours.
    </p>
    <span class="visitCard-button block  text-white py-2 px-4  mt-2 hover:bg-blue-700 cursor-pointer">
        Learn More
    </span>
</div>
</Link>
<Link  to={'/Contact-us'} >
<div class="Visiting-Cards custom-card3 flex flex-col justify-center items-center mx-2 sm:mx-0 my-4 sm:my-0">
<div  className='popular-tag'>Popular</div>
    <h3 class='text-xl sm:text-4xl font-bold'>United Kingdom</h3>
    <p class='text-sm sm:text-md text-center py-4 font-medium'>
    Experience the timeless elegance and culinary delights of France through our thoughtfully curated tour packages.
    </p>
    <span class="visitCard-button block  text-white py-2 px-4  mt-2 hover:bg-blue-700 cursor-pointer">
        Learn More
    </span>
</div>
</Link>

</div>
<div className='flex flex-wrap justify-center pb-4'>

<Link to={'/Contact-us'}  >
<div class="Visiting-Cards custom-card1 flex flex-col justify-center items-center mx-2 sm:mx-0 my-4 sm:my-0">
<div  className='popular-tag'>Popular</div>
    <h3 class='text-xl sm:text-4xl font-bold'>Turkey</h3>
    <p class='text-sm sm:text-md text-center py-4 font-medium'>
    Discover the stunning landscapes and diverse wildlife of Australia with our tailor-made tour packages. 
    </p>
    <span class="visitCard-button block  text-white py-2 px-4  mt-2 hover:bg-blue-700 cursor-pointer">
        Learn More
    </span>
</div>
</Link>

<Link  to={'/Contact-us'} >
<div class="Visiting-Cards custom-card4 flex flex-col justify-center items-center mx-2 sm:mx-0 my-4 sm:my-0">
<div  className='popular-tag'>Popular</div>
    <h3 class='text-xl sm:text-4xl font-bold'>Thialand</h3>
    <p class='text-sm sm:text-md text-center py-4 font-medium'>
    Embark on an epic journey across the diverse landscapes of America, 
    </p>
    <span class="visitCard-button block  text-white py-2 px-4  mt-2 hover:bg-blue-700 cursor-pointer">
        Learn More
    </span>
</div>
</Link>

<Link   to={'/Contact-us'}  >  

<div class="Visiting-Cards custom-card5 flex flex-col justify-center items-center mx-2 sm:mx-0 my-4 sm:my-0">
<div  className='popular-tag'>Popular</div>
    <h3 class='text-xl sm:text-4xl font-bold'>Malaysia</h3>
    <p class='text-sm sm:text-md text-center py-4 font-medium'>
       
Experience the rich history and charming cities of the Czech Republic with our captivating tour packages.
    </p>
    <span class="visitCard-button block  text-white py-2 px-4  mt-2 hover:bg-blue-700 cursor-pointer">
        Learn More
    </span>
</div>
</Link>
</div>
<div className='flex flex-wrap justify-center pb-4'>

<Link   to={'/Contact-us'}  >  

<div class="Visiting-Cards custom-card6 flex flex-col justify-center items-center mx-2 sm:mx-0 my-4 sm:my-0">
<div  className='popular-tag'>Popular</div>
    <h3 class='text-xl sm:text-4xl font-bold'>Singapore</h3>
    <p class='text-sm sm:text-md text-center py-4 font-medium'>
       
Experience the rich history and charming cities of the Czech Republic with our captivating tour packages.
    </p>
    <span class="visitCard-button block  text-white py-2 px-4  mt-2 hover:bg-blue-700 cursor-pointer">
        Learn More
    </span>
</div>
</Link>
<Link   to={'/Contact-us'}  >  

<div class="Visiting-Cards custom-card7 flex flex-col justify-center items-center mx-2 sm:mx-0 my-4 sm:my-0">
<div  className='popular-tag'>Popular</div>
    <h3 class='text-xl sm:text-4xl font-bold'>Europe</h3>
    <p class='text-sm sm:text-md text-center py-4 font-medium'>
       
Experience the rich history and charming cities of the Czech Republic with our captivating tour packages.
    </p>
    <span class="visitCard-button block  text-white py-2 px-4  mt-2 hover:bg-blue-700 cursor-pointer">
        Learn More
    </span>
</div>
</Link>
</div>



        </div>
    )
}

export default VisitingCards
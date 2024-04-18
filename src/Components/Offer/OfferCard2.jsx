import React from 'react'
import './OfferCard.css'
import img1 from '../../Images/parental-control.png'
import img2 from '../../Images/Asset 6.svg'
import img3 from '../../Images/diamond.png'

const OfferCardssec = () => {
  return (
    <div>

<div className='flex flex-wrap justify-center bg-white  main-Offer-card  '>
      <div className="Offer-card">
      <img  className='w-16  m-auto'   src={img1} />
        <h1>Family vacations</h1>
        <p>Make unforgettable family memories with our carefully planned vacation packages designed to cater to all ages and interests.</p>
      </div>
      <div className="Offer-card">
      <i  style={{"color" :"#0090B7"}} class="fa fa-flag fa-4x" ></i>
        <h1>Cruises</h1>
        <p>
Embark on a luxurious and unforgettable journey at sea with our curated cruise packages. Whether you're seeking Caribbean islands, Mediterranean coasts</p>
      </div>
      <div className="Offer-card">
      <img  className='w-16  m-auto'   src={img3} />
        <h1>Luxury experiences</h1>
        <p>Indulge in opulent and personalized luxury experiences that define the pinnacle of travel. Our meticulously crafted itineraries and premium services.</p>
      </div>
    </div>
    </div>
  )
}

export default OfferCardssec
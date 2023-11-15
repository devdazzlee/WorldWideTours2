import React from 'react'
import './WorldBook.css'
import { Link } from 'react-router-dom'



const WorldBook = () => {
  return (
    <div className="component-container2">
    <div className="background-image2"></div>
    <div className="p-4 md:p-0 flex flex-col m-auto">
      <h3 className="text-xl sm:text-xl md:text-xl lg:text-xl text-white font-bold text-center">PROMO</h3>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-white font-bold text-center">
        No matter where you’re <br /> going from, we take you <br /> there.
      </h1>
      <p className="animation-from-bottom text-white text-center mt-2 sm:mt-2 md:mt-2 lg:mt-2">
      No matter your starting point, our expertise in travel ensures that  <br />we'll accompany you on a seamless journey to your chosen destination.
      </p>
      <div className="text-center mt-2 sm:mt-2 md:mt-2 lg:mt-2">
      <Link to={'/Contact-us  '} >
        <button className="animation-from-bottom w-36 sm:w-36 md:w-36 lg:w-36 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Claim promo
        </button>
        </Link>
      </div>
    </div>
  </div>
  
  )
}

export default WorldBook
import React from 'react'
import '../Animation/Animation.css'
import { animated } from '@react-spring/web'

const ImageSlider = () => {
  return (
    <animated.div className='fade-up-element flex flex-col items-center mt-36'>
      <h3 className='text-2xl md:text-md text-white font-bold'>WELCOME TO WORLDWIDE TOUR</h3>
      <h1 className='text-4xl md:text-6xl font-bold text-white my-2 md:my-4'>
        Experience the world, <br /> one voyage at a time.
      </h1>
      <p className='text-lg md:text-2xl font-bold mt-2 md:mt-4 text-white text-center'>
        Let us transport you with our highly affordable and reliable <br /> holiday packages.
      </p>
    </animated.div>
  )
}

export default ImageSlider

import React from 'react'
import '../Animation/Animation.css'
import { animated } from '@react-spring/web'
import Form from '../Form/Form'

const ImageSlider = () => {
  return (
<div className='flex justify-center py-12   flex-wrap'  >
<div className="flex flex-col justify-center  md:px-12 px-0">

<h3    class="text-white text-xl md:text-2xl font-bold px-2">WELCOME TO WORLDWIDE TOUR</h3>

<h1 class="text-white text-3xl md:text-6xl font-bold my-2 md:my-4 px-2">
  Experience the world, <br class="hidden md:inline" /> like never before
</h1>

 

</div>


<div  className='  md:mt-0 mt-10' >
<Form />
</div>
</div>
  )
}

export default ImageSlider

import React from 'react';
import { Link } from 'react-router-dom';

const Mid_Sec_Opt = () => {
  return (
    <div  style={{"background" : "#0090B7"}} className=' py-4 sm:py-8'>
      <div className='container mx-auto flex flex-col items-center'>
        <h1 className='text-2xl sm:text-4xl text-white mb-4 text-center font-bold'>
          Request a Custom Travel Quote
        </h1>
        <div className='flex flex-col sm:flex-row justify-center'>
          <Link  to={'/Contact-us'} >
          <button style={{"color" : "#0090B7"}}  className='bg-white  text-blue-600  hover:text-black font-bold py-3 px-4 rounded-full mb-4 sm:mb-0 sm:mr-4'>
            Corporate Tours
          </button>
          </Link>
          <Link  to={'/Contact-us'} >
          <button style={{"color" : "#0090B7"}} className='bg-white  text-blue-600 font-bold py-3 px-4 rounded-full'>
            Family Tours
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Mid_Sec_Opt;

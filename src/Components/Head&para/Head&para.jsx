import React from 'react';

const Headpara = ({ title, paragraph }) => {
  return (
    <div className='bg-white py-6 sm:py-12'>
      <div className='w-full sm:w-11/12 md:w-10/12 lg:w-8/12 xl:w-6/12 m-auto px-4'>
        <h1 className='text-2xl  font-bold sm:text-4xl mb-4 sm:mb-6 text-start'>
          {title}
        </h1>
        <p className='text-sm sm:text-base'>
          {paragraph}
        </p>
      </div>
    </div>
  );
}

export default Headpara;

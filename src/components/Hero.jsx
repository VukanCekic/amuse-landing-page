import React from 'react';
import Typed from "react-typed"
const Hero = () => {
  return (
    <div className='max-w-[800px] mt-[-96px] w-full  h-screen mx-auto text-center flex flex-col justify-center'>
    <p className='text-white font-bold uppercase'>
     Connecting / Music / And / People
    </p>
    <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-white flex justify-center items-center flex-col'>
      Let yourself be <div className='bg-white text-tetriary shadow rounded-2xl w-5/12 m-4 '>AMUSED</div>
    </h1>
    <div className='flex justify-center items-center'>
    <p className='md:text-2xl text-xl font-bold text-white'>Experience social media through your favorite</p>
      <Typed
          className='md:text-2xl text-xl font-bold md:pl-4 pl-2 text-tetriary'
            strings={['ARTISTS', 'MUSIC']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
    </div>
    <button className='bg-tetriary w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Learn more</button>
  </div>  );
};

export default Hero;
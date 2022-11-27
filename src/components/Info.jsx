import React from 'react';
import Auth from '../assets/amuse-auth.PNG';

const Info = () => {
  const scroll = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView();
  }
  return (
    <div id="info-section" className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Auth} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-tetriary font-bold '>Authorization Screen</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-gray-800'>What is AMUSE?</h1>
          <p className='text-gray-800 mb-5'>
          Amuse is a upcoming social network based on music taste, our personal goal and vision is to enable people to 
            share their taste and opinions regarding their favorite artists and music with others.
          </p>
          <button className='bg-tetriary w-[200px] rounded-md font-mediu mx-auto md:mx-0 py-3 text-white' onClick={() => scroll('contact-section')}>Learn more</button>

        </div>
      </div>
    </div>
  );
};

export default Info;
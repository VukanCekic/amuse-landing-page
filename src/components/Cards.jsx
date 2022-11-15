import React from 'react';


const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <h2 className='text-2xl font-bold text-center py-8'>Album/Song Ratings</h2>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Various options for rating an album/song</p>
                  <p className='py-2 mx-8'>Star based rating, with possibility to highly most liked song</p>
              </div>
              <button className='bg-tetriary w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Reach out</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <h2 className='text-2xl font-bold text-center py-8'>Favorite Artists</h2>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Connecting options based on favorite artists</p>
                  <p className='py-2  mx-8'>Favorite artists section shows up on profile</p>
              </div>
              <button className='bg-tetriary w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Reach out</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <h2 className='text-2xl font-bold text-center py-8'>Create Posts</h2>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Posts are parts of songs that can be viewed,liked,commented on...</p>
                  <p className='py-2 mx-8'>Lyrics of favorite part of the song can be displayed as part of post</p>
              </div>
              <button className='bg-tetriary w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Reach out</button>
          </div>
      </div>
    </div>
  );
};

export default Cards;
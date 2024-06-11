import React from 'react'

const HomePage = () => {
  return (
    <div className='home-img h-screen w-full'>
      {/* overlay */}
      <div className='bg-black/50 h-screen w-full absolute top-0 left-0 z-0' />

      {/* content */}
      <div className='text-white z-10'>
        HomePage
      </div>
    </div>
  )
}

export default HomePage

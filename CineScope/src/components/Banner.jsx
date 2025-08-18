import React from 'react'

function Banner() {
  return (
    <div className='h-[20vh] md:h-[90vh] bg-cover bg-center flex items-end' style={{backgroundImage : 'url(https://wallpapercave.com/wp/wp4265835.jpg)'}}>
        <div className='text-white text-xl text-center w-full bg-gray-900/60 p-4'>
            Avengers Endgame
        </div>
      
    </div>
  )
}

export default Banner

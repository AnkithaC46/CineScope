import React from 'react'

function Pagination({handleNext, handlePrev, pageNo}) {
  return (
    <div className='bg-gray-400 m-5 p-4 flex justify-center items-center'>
      <div className='px-8 ' onClick={handlePrev}><i className="fa-solid fa-arrow-left"></i></div>
      <div className='font-bold'>{pageNo}</div>
     <div className='px-8 ' onClick={handleNext} ><i className="fa-solid fa-arrow-right"></i></div>
     
    </div>
  )
}

export default Pagination

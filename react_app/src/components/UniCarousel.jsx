import React from 'react'
import photo from '../img/CardBg.png';

const UniCarousel = () => {
  return (
    <>
        <div className='wrapper m-5 flex flex-col  border-2 rounded-md'>
            <img src={photo} className='object-fill h-64'></img>
            <h1 className='bg-blue-100 border-slate-950 h-11 flex justify-center items-center'>Olympics At Its Best</h1>
        </div>
    </>
  )
}

export default UniCarousel;
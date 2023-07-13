import React from 'react'

const Modal = (image) => {
  return (
    <>
        <div className='relative w-screen h-screen bg-red-500'>
            <img src={image} className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'></img>
        </div>
    </>
  )
}

export default Modal;
import React from 'react'

const MiniHeader = () => {
  return (
    <>
        <header class="container mx-auto flex flex-wrap p5 flex-col justify-around items-center h-20 text-gray-900 body-font bg-gray-400 rounded-3xl">
          <nav class="flex lg:w flex-wrap items-center text-base ">
            <a class="mr-10 hover:text-gray-900 text-2xl">Bejing</a>
            <a class="mr-10 hover:text-gray-900 text-2xl">Paris</a>
            <a class="mr-10 hover:text-gray-900 text-2xl">Moscow</a>
            <a class="mr-10 hover:text-gray-900 text-2xl">Delhi</a>
            <a class="mr-10 hover:text-gray-900 text-2xl">Washington</a>
          </nav>
      </header>
    </>
  )
}

export default MiniHeader
import React from 'react'
import logo from '../img/logo2.png';

const Header = () => {
  return (
    <>
        <header class="text-gray-600 body-font bg-gradient-to-r mb-3 from-indigo-200 to-blue-200 rounded-b-3xl">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        {/* <img src={logo} className='w-10 h-10'></img>
            <span class="ml-3 text-xl">Tailblocks</span> */}
          <a class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
            <img src={logo} className='h-12 w-36'></img>
          </a>
          <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
            <a class="mr-5 hover:text-gray-900">Olympics</a>
            <a class="mr-5 hover:text-gray-900">Athletes</a>
            <a class="mr-5 hover:text-gray-900">Sports</a>
            <a class="hover:text-gray-900">News</a>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
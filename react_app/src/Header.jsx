import React from 'react'

import logo from './img/logo2.png'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
        <header className="text-gray-600 body-font bg-gradient-to-r mb-3 from-indigo-200 to-green-300 rounded-b-3xl">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <NavLink to='/'  className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
            <img src={logo} className='h-12 w-36'></img>
          </NavLink>
          <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
            <a href='https://olympics.com/en/' target='_blank' className="mr-5 hover:text-gray-900">Olympics</a>
            <a className="mr-5 hover:text-gray-900">Athletes</a>
            <a className="mr-5 hover:text-gray-900">Sports</a>
            <a className="mr-5 hover:text-gray-900">News</a>
            <NavLink to='/signertype' className="mr-5 hover:text-gray-900" >Signin</NavLink>
            <NavLink to='/login' className="mr-5 hover:text-gray-900" >Login</NavLink>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header;
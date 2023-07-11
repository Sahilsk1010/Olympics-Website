import React from 'react';

const MiniHeader = () => {
  return (
    <>
        <header className="container mx-auto flex flex-wrap p5 flex-col justify-around items-center h-12 text-gray-900 body-font bg-gradient-to-l from-indigo-200 to-blue-300 rounded-t-3xl">
          <nav className="flex lg:w flex-wrap items-center text-base ">
            <a href='https://olympics.com/en/olympic-games/paris-2024' target='_blank' className="mr-10 hover:text-gray-900 text-2xl">France</a>
            <a href='https://olympics.com/en/olympic-games/milano-cortina-2026' target='_blank' className="mr-10 hover:text-gray-900 text-2xl">Milano</a>
            <a href='https://olympics.com/en/olympic-games/los-angeles-2028' target='_blank' className="mr-10 hover:text-gray-900 text-2xl">Los Angeles</a>
            <a href='https://olympics.com/en/olympic-games/brisbane-2032' target='_blank' className="mr-10 hover:text-gray-900 text-2xl">Brisbane</a>
            <a href='https://olympics.com/en/olympic-games/brisbane-2032' target='_blank' className="mr-10 hover:text-gray-900 text-2xl">Brisbane</a>
          </nav>
      </header>
    </>
  )
}

export default MiniHeader;
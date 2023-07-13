import React from 'react';

const MiniHeader = () => {
  return (
    <>
        <header className="container mx-auto flex flex-wrap p5 flex-col justify-around items-center h-12 text-gray-900 body-font bg-gradient-to-l from-amber-200 to-yellow-200 rounded-t-3xl">
          <nav className="flex lg:w flex-wrap items-center text-base ">
            <a href='https://olympics.com/en/olympic-games/paris-2024' target='_blank' className="mr-10 hover:text-gray-900 text-lg">France</a>
            <a href='https://olympics.com/en/olympic-games/milano-cortina-2026' target='_blank' className="mr-10 hover:text-gray-900 text-lg">Milano</a>
            <a href='https://olympics.com/en/olympic-games/los-angeles-2028' target='_blank' className="mr-10 hover:text-gray-900 text-lg">Los Angeles</a>
            <a href='https://olympics.com/en/olympic-games/brisbane-2032' target='_blank' className="mr-10 hover:text-gray-900 text-lg">Brisbane</a>
            <a href='https://olympics.com/en/olympic-games/brisbane-2032' target='_blank' className="mr-10 hover:text-gray-900 text-lg">Brisbane</a>
          </nav>
      </header>
    </>
  )
}

export default MiniHeader;
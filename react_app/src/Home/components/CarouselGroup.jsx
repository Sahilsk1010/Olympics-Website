import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import UniCarousel from './UniCarousel';

const Hero = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <>
    <Carousel responsive={responsive} swipeable={false} draggable={false} showDots={true} ssr={true} autoPlaySpeed={1000} keyBoardControl={true} className='mb-5'>
      <UniCarousel/>
      <UniCarousel/>
      <UniCarousel/>
      <UniCarousel/>
      <UniCarousel/>
    </Carousel>
    </>
  )
}

export default Hero
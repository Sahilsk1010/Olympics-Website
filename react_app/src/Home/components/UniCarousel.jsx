import React from 'react'
import styled from 'styled-components';

import photo from '../../img/dummy.jpg';

const Text=styled.p`
  display:-webkit-box;
  overflow:hidden;
  -webkit-box-orient:vertical;
  -webkit-line-clamp:3;
`;

const UniCarousel = () => {
  return (
    <>
        <div className='wrapper m-5 flex flex-col  border-2 rounded-md'>
            <img src={photo} className='object-fill h-80'></img>
            <div  className="w-full h-24 p-4 text-md">
              <Text>Fred is inquisitive and creative, and always conjuring up ways to improve Binaryville. He's twiways to improve Binaryville. He's twiways to improve Binaryville. He's twicys to improve Binaryville. He's twicys to improve Binaryville. He's twicys to improve Binaryville. He's twicys to improve Binaryville. He's twicys to improve Binaryville. He's twicys to improve Binaryville. He's twicys to improve Binaryville. He's twicys to improve Binaryville. He's twice been awarded the highly coveted BinaryvilleMedallionOfHonorAndExcellentAward</Text>
            </div>
        </div>
    </>
  )
}

export default UniCarousel;
import React from 'react';
import front from '../../assets/images/front.png';


const Hero = () => {
  return (
    <div className='h-screen bg-[#f1cedb]'>
            <div className=' items-center p-[100px]'>
                <div>
                  <a href='#' className='flex items-center '>
                  <img src={front} className='h-max w-max text-left' /></a>
                </div>
                <div>
                <h1 className='font-dancingScript items-center flex text-right'>Pastelitos</h1>
            </div>
    </div></div>
  )
}

export default Hero
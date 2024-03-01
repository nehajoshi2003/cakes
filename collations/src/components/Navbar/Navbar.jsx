import React from 'react';
import logo from '../../assets/images/logo.png';
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div>
        <div className='shadow-md bg-[#f9f0f1]'>
            <div className='container bg-[#f9f0f1] h-22'>
              <div className='flex justify-between items-center'>
                <div>
                  <a href='#' className='flex items-center gap-2 '>
                  <img src={logo} className='w-[120px]' /></a>
                </div>
                <div>
                <ul className='hidden sm:flex gap-5 '>
                    <li ><a href='#' className='inline-block font-poppins text-3xl font-semibold text-[#a12e32] py-7  hover:text-[#411111]'>Home</a></li>
                    <li ><a href='#'className='inline-block font-poppins text-3xl font-semibold text-[#a12e32] py-7 hover:text-[#411111]'>Menu</a></li>
                    <li><a href='#' className='inline-block font-poppins text-3xl font-semibold text-[#a12e32] py-7 hover:text-[#411111]'>Contact</a></li>
                    <li> <a href='#' className='inline-block font-poppins text-7xl font-semibold text-[#a12e32] py-7 hover:text-[#411111]'><FaCartShopping className="text-3xl drop-shadow-sm text-[#411111]] cursor-pointer" /></a></li>
                  </ul>
                <button  className='flex items-center gap-2 bg-[#d791a1] font-semibold font-poppins text-xl px-6 py-2 rounded-md text-[#582a35] m-7 sm:hidden hover:scale-105 duration-300'>Order<FaCartShopping className="text-xl drop-shadow-sm text-[#582a35] cursor-pointer" /></button></div>
            </div></div>
        </div>
    </div>
  )
}

export default Navbar
import React, { useState } from 'react';

import {
  FaBars,
  FaTimes,
  FaInstagram,
  FaPhone,
} from 'react-icons/fa';
                                                                                                               
import { HiOutlineMail } from 'react-icons/hi';
                                                                                                                                  

                                                     
import './Navbar.css'
import { Link } from 'react-scroll';
                                                 
const Navbar = (props) => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div  className='z-20 navbar dark:from-black  dark:bg-gradient-to-b from-[#ba86bd] bg-gradient-to-b  fixed w-full h-[80px] flex justify-between   items-center px-4 font-bold dark:font-normal dark:text-[#c9c9c9]  text-[#4f2f54]   '>
    
    
    <ul className='flex '> 
             <li>
            <a
              className='flex justify-between items-center w-full dark:text-inherit hover:dark:text-white text-[#4f2f54]'
              href='_blank'
            >
               <FaPhone size={30} />
            </a>
            </li>
    
    <li>
            <a
              className='flex justify-between items-center w-full dark:text-inherit hover:dark:text-white text-[#4f2f54]'
              href='_blank'
            >
               <FaInstagram size={30} />
            </a>
            </li>
      <li >
            <a
              className='flex justify-between items-center w-full dark:text-inherit hover:dark:text-white text-[#4f2f54]'
              href='_blank'
            >
               <HiOutlineMail size={30} />
            </a>
          </li>
          </ul>
   






      {/* menu */}
   
      <ul className='items-center hidden md:flex font-bold'>
     
        <li>
          <Link to='home' className='hover:dark:text-white'  smooth={true} duration={400}>
            Home
          </Link> 
        </li>
        <li>
          <Link to='about' className='hover:dark:text-white' smooth={true} duration={400}>
            About
          </Link>
        </li>
        <li>
          <Link to='plans' className='hover:dark:text-white' smooth={true} duration={400}>
            Plans
          </Link>
        </li>
       
        <li>
          <Link to='reviews' className='hover:dark:text-white' smooth={true} duration={400}>
            Reviews
          </Link>
        </li>
       
      
      </ul>



     






 

    
          <div onClick={handleClick} className='md:hidden inline-block text-2xl   z-10'>
            
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

     {/*  <ul className='hover:dark:text-white'>   <li>
          <BsFillMoonStarsFill
                  onClick={() => props.setdarkMode()}
                  className=" cursor-pointer text-2xl "
                /></li></ul> */}
     
    

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute bg-white dark:bg-black dark:text-white  text-[#4f2f54] top-0 left-0 w-full h-screen  flex flex-col justify-center items-center'
        }
      >



{/* <a href='_blank' className='mb-16 border-2 dark:border-white hover:dark:border-white border-[#4f2f54] hover:bg-[#4f2f54]  hover:dark:text-[#4f2f54]  text-[#4f2f54] dark:text-white hover:text-white group  px-4 py-1  flex items-center hover:dark:bg-white '>
            Resume
            <span className=''>
              <MdOutlineSaveAlt className='ml-3 ' />
            </span>
          </a> */}





        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={400}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={400}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='Heighlights' smooth={true} duration={400}>
          Heighlights
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='Reviews' smooth={true} duration={400}>
          Reviews
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={400}>
            Contact
          </Link>
        </li>

        
      </ul>

   
    </div>
  );
};

export default Navbar;

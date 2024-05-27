import React from 'react';

import './Home.css';

import w1 from "../../assets/w1.jpg"



const Home = () => {



  return (
    <div name='home' className='relative panel home w-full h-screen '>
     


      <img  src={  w1 } alt="" className="h-screen w-full absolute coverimg  object-cover"/>

      <div className='   mx-auto px-8 flex flex-col justify-center h-full'>
  
<div className='grid gap-2 description-profile  '>

 
        <h1 className='text-center sm:text-start text-4xl sm:text-5xl font-bold text-[#4f2f54] dark:text-white'>
        Speed-Up TV
        </h1>
        <h2 className='text-center sm:text-start  text-2xl sm:text-3xl font-bold text-[#464f5e] dark:text-[#bdbdbd]'>
        Discover Our IPTV Wonderland
        </h2>
    
        <div className='  t-4 flex absolute bottom-20  md:bottom-6 w-full left-0 sm:static   justify-center sm:justify-start'>
          <a href='https://drive.google.com/file/d/1esmZo2mWYMVbnHgs3x4Ry-_OLj1mHWbA/view?usp=share_link' className=' border-2 dark:border-white md:dark:border-black border-[#4f2f54] dark:bg-black bg-[#4f2f54] text-white   dark:text-white hover:dark:text-[#4f2f54] group  px-8 py-5  flex items-center hover:dark:bg-white hover:dark:border-white'>
           <span className='hover:dark:font-bold text-2xl' >START NOW !</span> 
           <span className=''>
             
            </span>
          </a>
        
        </div>

</div>
        
      </div>
    </div>
  );
};

export default Home;

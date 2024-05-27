import React from 'react';

import './Aboute.css';

const About = (props) => {
  return (
    <div name='about' className='aboute panel   relative  w-full pb-10 pt-10    dark:text-white text-black dark:bg-black bg-white'>
         
         
      <div className=' flex flex-col  items-center  w-full h-full '>
       
        
  
       <div className='md:w-full     '>
     
         
        
       <p className='aboute-title text-4xl font-bold   text-center block'>
       About Us
      </p>
    
        
           <p className=' text-1xl aboute-title text-center  leading-9 mt-4 px-7'> 
           Transform your home entertainment experience with SPEED-UP TV, where lightning-fast and rock-solid IPTV service takes center stage. Dive into a vast array of channels and content, all from the cozy confines of your home. Bid farewell to frustrating buffering moments, and say hello to uninterrupted, top-notch streaming. Welcome a new era of convenience and exhilaration into your life with our cutting-edge IPTV service.
           </p>  
           
        
       </div>



        {/*    <div className=' flex  mt-20 text-center '>
           <div className='flex-auto w-1/2 leading-10 ' > 
           <span className='block aboute-title font-bold  text-3xl '>What Sets Us Apart?</span>
<ul className='lg:flex lg:justify-between   mt-10'>
  <li><strong className='block'>Expert Guides:</strong> Our team consists of dedicated and knowledgeable guides who are experts in the field of night exploration. They bring a wealth of experience and a deep appreciation for the natural world.</li>
  <li ><strong className='block'>Unique Adventures: </strong>We offer carefully crafted adventures that go beyond the ordinary. Whether you're stargazing under a blanket of stars or observing elusive nocturnal wildlife, each experience is designed to be extraordinary.</li>
  <li><strong className='block'>Safety First:</strong>Your safety is our top priority. We provide all the necessary guidance and equipment to ensure your adventure is both thrilling and secure.</li>
</ul>


 </div>

           </div> */}

           <div className='flex flex-col mt-20 text-center  md:w-1/2 leading-10 ' > 
           <span className='block aboute-title font-bold  text-3xl '>Join Us on This Journey</span>
<p className='mt-10 px-6 md:px-0'>We invite you to join us on a journey that transcends the boundaries of day and night. Whether you're a seasoned night explorer or embarking on your first adventure, there's always something new to discover in the world of Moonlight Odyssey.</p>
           </div>
      

           </div>   
          
          





        
  </div>
  );
};

export default About;

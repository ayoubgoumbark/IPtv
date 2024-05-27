import React from 'react';

import { FaCheck } from "react-icons/fa";
import './Plans.css';
const Plans = () => {








  
  return (
    <div name='plans' className=' panel py-10 px-5   skills   bg-gray-100  relative  w-full   text-black'>
 <h2 className="text-3xl font-semibold text-center mb-6  ">Plans </h2>



 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Plan 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md plan ">
          <h2 className="text-xl font-bold mb-3 text-center">Basic Plan</h2>
          <ul className="mb-4 ">
            <li> <FaCheck size={15} color='green'   /> <span>50+ Channels</span></li>
            <li><FaCheck size={15} color='green'   /><span>SD Quality</span></li>
            <li><FaCheck size={15} color='green'   /><span>Access to On-Demand Content</span></li>
          </ul>
          <p className="text-lg font-bold">$9.99/month</p>
          <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Select
          </button>
        </div>

        {/* Plan 2 */}
        <div className="bg-[#dcdcdc] p-6 rounded-lg shadow-md plan">
          <h2 className="text-xl font-bold mb-3 text-center">Standard Plan</h2>
          <ul className="mb-4">
            <li> <FaCheck size={15} color='green'   /><span>100+ Channels</span></li>
            <li> <FaCheck size={15} color='green'   /><span>HD Quality</span></li>
            <li> <FaCheck size={15} color='green'   /><span>Access to On-Demand Content</span></li>
          </ul>
          <p className="text-lg font-bold">$19.99/month</p>
          <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Select
          </button>
        </div>

        {/* Plan 3 */}
        <div className="bg-[#fadbbc] p-6 rounded-lg shadow-md plan">
          <h2 className="text-xl font-bold mb-3 text-center">Premium Plan</h2>
          <ul className="mb-4">
            <li> <FaCheck size={15} color='green'   /><span>200+ Channels</span></li>
            <li> <FaCheck size={15} color='green'   /><span>HD & 4K Quality</span></li>
            <li> <FaCheck size={15} color='green'   /><span>Access to On-Demand Content</span></li>
            <li> <FaCheck size={15} color='green'   /><span>Multi-Device Support</span></li>
          </ul>
          <p className="text-lg font-bold">$29.99/month</p>
          <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Select
          </button>
        </div>

        {/* Plan 4 */}
        <div className="bg-[#FFED8F] p-6 rounded-lg shadow-md plan">
          <h2 className="text-xl font-bold mb-3 text-center">Ultimate Plan</h2>
          <ul className="mb-4">
            <li> <FaCheck size={15} color='green'   /><span>300+ Channels</span></li>
            <li> <FaCheck size={15} color='green'   /><span>HD & 4K Quality</span></li>
            <li> <FaCheck size={15} color='green'   /><span>Access to On-Demand Content</span> </li>
            <li> <FaCheck size={15} color='green'   /><span>Multi-Device Support</span></li>
            <li> <FaCheck size={15} color='green'   /><span>International Channels</span></li>
          </ul>
          <p className="text-lg font-bold">$39.99/month</p>
          <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Select
          </button>
        </div>
      </div>



    </div>
  );
};

export default Plans;

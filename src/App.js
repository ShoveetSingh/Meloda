//import {ToastContainer,toast} from 'react-toastify';
//import "react-toastify/dist/ReactToastify.css";
import React from "react";

import {FaMusic} from 'react-icons/fa'


function App() {
  
  return (
  <div style={{'overflow':'hidden'}}>
    <div className="relative flex">
    <div  style={{
      'background-image':'url(/image1.png)',
      'backgorundSize':'cover',
      'backgroundPosition':'end',
      'backgroundRepeat':'no-repeat',
      'filter': 'saturate(200%) brightness(70%) hue-rotate(330deg)',
      'clipPath': 'url(#wave-clip)'
      }}>
    <img 
     src="/image1.png"
     alt="singer"
     className=" w-screen h-screen"
     />
    </div>
    <div className="absolute flex flex-col">
    <div className=" flex flex-row">
           <div className="flex flex-row"> <div className="flex px-6 py-6 text-white"><FaMusic/></div>
               <h1 className="text-white sm:text-md lg:text-lg py-4 px-4">MelodaHouse.com</h1></div>
                  <div className="flex py-5 px-64 text-sm">
      <p1 className="text-white px-2">Home</p1>
      <p1 className="text-white px-2">Courses</p1>
      <p1 className="text-white px-2">Blogs</p1>
      <p1 className="text-white px-2">Support</p1>
      <p1 className="text-white px-2">Career</p1>
      <button className="flex px-2 text-white border border-white rounded-full">LogIn</button>
      <div className="flex px-4">
      <button className="flex px-3 font-semibold text-[rgba(71,85,105,1)] bg-white rounded-full">Book</button>
      </div>
            </div>
           </div>
           <h1 className="text-white font-semibold text-4xl px-8 py-3">Where Every Note <br/>Finds a Home</h1>
          <p2 className="text-[rgba(71,85,105,1)] font-semibold text-md px-8 py-3">Learn,Play, and Create with Meloda<br/>House</p2>
          <div className="px-8 py-6">
          <button className="text-white w-1/5  py-3  rounded-full border border-white">Book a free trial</button>
          </div>
          </div>
  </div>
  <svg width="100%" height="100%">
        <defs>
          <clipPath id="wave-clip" clipPathUnits="objectBoundingBox">
            <path d="M0,0 L1,0 L1,0.9 C0.7,0.95 0.3,1 0,0.9Z" />
          </clipPath>
        </defs>
      </svg>
     <div className="bg-[ rgba(241, 245, 249, 1)] flex flex-row">
      <div className="flex flex-col">
        <h1 className="text-rgba(0,0,0,1) text-4xl font-semibold px-32">Who we are</h1>
        <p1 className="px-32 py-6 font-semibold">Meloda House,we are a <br/>passionate community of<br/>musicians,educators,and music<br/>
        enthusiasts dedicated to making <br/>the world of music accessible to <br/>
        everyone.
        </p1>
      </div>
      
     </div>

  </div>
);
  
}
export default App;
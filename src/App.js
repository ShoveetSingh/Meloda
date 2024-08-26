//import {ToastContainer,toast} from 'react-toastify';
//import "react-toastify/dist/ReactToastify.css";
import React from "react";
import {Card,List,ListItem,ListItemPrefix,Typography} from "@material-tailwind/react";
import {FaMusic,FaHeart,FaGem,FaGraduationCap} from 'react-icons/fa'



function App() {
  
  let image1 = [{id:1,image:'/tabla.jpg',h:'Tabla'},{id:2,image:'/Piano.jpg',h:'Piano'},{id:3,image:'/Violin.jpg',h:'Violin'},{id:4,image:'/Guitar.png',h:'Guitar'}];
  let image2 = [{id:1,image:'/oldman.png',h:'Hindustani'},{id:2,image:'/kurta.png',h:'Carnatic'},{id:3,image:'/Singer.png',h:'Western vocal'},{id:4,image:'/Boy.png',h:'Bollywood vocal'}]


  return (
    <div>
  <div style={{'overflow':'hidden'}} className="bg-[ rgba(241, 245, 249, 1)]">
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
     <div style={{'overflow':'hidden'}}>
      <div style={{
      'backgroundImage':'url(/tabla.jpg)',
      'backgorundSize':'cover',
      'backgroundPosition':'end',
      'backgroundRepeat':'no-repeat',
      'clipPath': 'url(#wave1-clip)'
      }}>
        <img
        src="/tabla.jpg"
        alter="tabla"
        className="h-screen w-screen"
        />
      </div>
      <div className="flex flex-col">
        <h1 className="text-rgba(0,0,0,1) text-4xl font-semibold px-16">Who we are</h1>
        <p1 className="px-16 py-6 font-semibold">Meloda House,we are a <br/>passionate community of<br/>musicians,educators,and music<br/>
        enthusiasts dedicated to making <br/>the world of music accessible to <br/>
        everyone.
        </p1>
      </div>
      <svg width="0" height="0" className="absolute bottom-0 left-0 w-full h-auto"
          // viewBox="0 0 1440 320"
          // xmlns="http://www.w3.org/2000/svg"
>
        <defs>
          <clipPath id="wave1-clip" clipPathUnits="objectBoundingBox">
            <path d="M0,224L60,218.7C120,213,240,203,360,181.3C480,160,600,128,720,106.7C840,85,960,75,1080,96C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
          </clipPath>
        </defs>
      </svg>  
     </div>
     </div>

     <div className="py-4 px-64 bg-[rgba(71,85,105,1)] rounded-bottom flex flex-row ">
      <div className=" px-5 flex flex-col">
        <div className="px-5">
       <FaHeart className=" text-white text-2xl"/></div>
      <h1 className=" py-1 px-4 text-white font-3xl">10+</h1>
      <p1 className="text-white font-semibold  text-sm">User countries</p1>
      </div>
      <div className="px-5 flex flex-col">
        <div className="px-5">
      <FaGem className="text-white text-2xl"/></div>
      <h1 className="py-1 px-4 text-white font-3xl">50+</h1>
      <p1 className=" text-white font-semibold text-sm">values teachers</p1>
      </div>
      <div className="px-5 flex flex-col">
        <div className="px-5">
      <FaGraduationCap className="text-white text-2xl"/></div>
      <h1 className="py-1 px-4 text-white font-3xl">200+</h1>
      <p1 className=" text-white font-semibold text-sm">happy students</p1>
      </div>
     </div>
     <div className="bg-[rgba(241, 245, 249, 1)]">
      <h1 className="text-4xl font-semibold flex py-4 justify-center text-[rgba(51,65,85,1)]">Courses</h1>
      <div className="flex flex-row">
        <div className="flex flex-col px-3">
        <h1 className="text-xl font-semibold flex px-32  text-[rgba(51,65,85,1)]">Instruments</h1>
      
       {image1.map((img,index)=>(
        <div className="flex justify-center items-center flex-row py-2 rounded-lg mb-4 px-2 bg-gray-200">
          
        <div className="py-2 px-12"><img src={img.image} alt="abcd" className="w-20 h-20"></img></div>
        <div className="flex flex-col">
        <h1 className="text-[rgba(51,65,85,1)] text-sm font-semibold">{img.h}</h1>
        <p1 className="text-sm ">Artist is a term applied<br/> to a person who engages<br/> in an activity deemed to <br/>be an art.</p1>
        <button className="text-white text-sm flex mr-3 w-20 font-semibold  rounded-lg bg-[rgba(51,65,85,1)]">Explore</button></div>
        </div>
       ))}
       
        </div>
        <div className="flex flex-col ml-auto float-right px-3">
        <h2 className="text-xl font-semibold  px-8 text-[rgba(51,65,85,1)]">Singing</h2>
        {image2.map((img,index)=>(
        <div className="flex justify-center items-center flex-row py-2 rounded-lg mb-4 px-2 bg-gray-200">
          
        <div className="py-2 px-12"><img src={img.image} alt="abcd" className="w-20 h-20"></img></div>
        <div className="flex flex-col">
        <h1 className="text-[rgba(51,65,85,1)] text-sm font-semibold">{img.h}</h1>
        <p1 className="text-sm ">Artist is a term applied<br/> to a person who engages<br/> in an activity deemed to <br/>be an art.</p1>
        <button className="text-white flex mr-3 text-sm  w-20 rounded-lg bg-[rgba(51,65,85,1)]">Explore</button></div>
        </div>
       ))}
        </div>
      </div>
     </div>
     {/* <div className="text-5xl text-semibold flex text-[rgba(54,65,85,1)] justify-center items-center py-6">
      How it Works
     </div> */}
     <div className="flex flex-row px-6">
         <img src='/Section.png' alt='how'></img>
     </div>
     <div className="text-5xl text-bold flex text-[rgba(54,65,85,1)] justify-center items-center py-6">
      Our rising stars
     </div>
     <div className="flex fle-row px-24  py-2">
      <div className="flex flex-col">
      <img src='/Left.png' alt="left" className="px-2"/>
      <h1 className="font-semibold text-[rgba(54,65,85,1)] text-lg px-16">Rohan Roy</h1>
      <p1 className="font-semibold text-gray-400 text-lg px-16 py-2">Delhi</p1>
      </div>
      <div className="flex flex-col">
      <img src='/Left (1).png' alt="left1" className="px-2"/>
      <h1 className="font-semibold text-[rgba(54,65,85,1)] text-lg px-16">Ram Acharya</h1>
      <p1 className="font-semibold text-gray-400 text-lg px-16 py-2">Rajasthan</p1>
      </div>
      <div className="flex flex-col">
      <img src='/Left (2).png' alt="left2" className="px-2"/>
      <h1 className="font-semibold text-[rgba(54,65,85,1)] text-lg px-16">irfan Rana</h1>
      <p1 className="font-semibold text-gray-400 text-lg px-16 py-2">Kolkata</p1>
      </div>
     </div>
  </div>
);
  
}
export default App;
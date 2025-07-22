import React from "react";
import { useState } from "react";
import { CiHome } from "react-icons/ci";
import About from "../component/About";
import Process from "../component/process";
import Portfolio from "../component/Portfolio";
import Work from "../component/work";
import Blog from "./Blog";
import Watido from "../component/watido";
import Happy from "../component/Happy";

export default function Home() {
  const HandleContact =() => {
    const PhoneNumber = '2348139188264';
    const url = `https://wa.me/${PhoneNumber}`;
    window.open(url, '_blank');
  }
  return (
    <>
      <div className="lg:relative lg:h-270 home h-fit">
        <div className="flex justify-between lg:flex-row flex-col  w-full lg:p-16  my-6 ">
          <div className=" ">
            <div className="text-left  lg:mt-19 text-lg text-[Gray/900]">
              <span className="text-[72px] leading-20 font-semi-bold">
                Hello, I’m <br /> Promise
              </span>
              {/* <br /> A passionate front-end developer dedicated to crafting
              engaging and user-friendly web experiences. I love turning design
              concepts into interactive realities using HTML, CSS, and
              JavaScript, and I'm always eager to learn and explore the latest
              technologies in the front-end world. */} <br />
           <p className="">   A Web Developer & Designer based in Lagos,  
               <br className="hidden lg:block" /> I create stunning websites and designs with a focus on performance and user experience. <br className="hidden lg:block" /> Let’s build something amazing together!</p>
              <button className="py-3 px-9 shadow  my-8 bg-[#A53DFF] rounded text-white" onClick={HandleContact}>
                Say Hello
              </button>
            </div>

            {/* <div className="flex gap-4"> */}
              
              {/* <button className='py-3 px-9 shadow  m-8 bg-[] rounded'>Link</button> */}
            {/* </div> */}

            <div className="w-[100%]  p-1 m-auto flex justify-between">
              <div className=" bg-[#EDD8FF80] w-[33%] p-1  text-center">
                <p className=" text-3xl ">
                  1Y. <br />
                  <span className="text-sm">Expirence</span>
                </p>
              </div>

              <div className=" bg-[#EDD8FF80] w-[33%] p-1  text-center">
                <p className="text-3xl">
                  5 <br />
                  <span className="text-sm">Project complete</span>
                </p>
              </div>

              <div className=" bg-[#EDD8FF80] w-[33%] p-1  text-center">
                <p className="text-3xl">
                  2 <br />
                  <span className="text-sm">Happy client</span>
                </p>
              </div>
            </div>
          </div>
          <div className=" lg:w-[40%]  w-full border rounded-2xl">
            <img src="../../assets/profile.jpg" alt="" className="w-full cover h-full rounded-2xl" />
          </div>
        </div>

        <About />
      </div>
      <Process />
      <Portfolio />
      <Work />
      <Blog />
      <Watido/>
      <Happy/>
    </>
  );
}



import React from "react";
import { CiSaveDown2 } from "react-icons/ci";
import { NavLink } from "react-router-dom";

// const HandleContact = () => {
//   const PhoneNumber = '2348139188264'
//   const url =` http://wa.me/${PhoneNumber}`;
//   window.open(url, '_blank');
// }
export default function About() {
  return (
    <>
      <div className="container lg:px-16 lg:absolute lg:top-160  mx-auto lg:left-0 lg:right-5 w-full bg-white shadow-2xl lg:w-[90%] top-0 ">
        <div className="w-[100%] my-7 mx-auto lg:flex bg-white justify-between flex-col lg:flex-row">
          <div className="lg:w-[40%] w-full   ">
            <img src="../../assets/profile.jpg" alt="" />
          </div>

          <div className="lg:w-[55%] items-center mt-12  p-10 w-full text-[#556070]">
            <p className="font-semibold text-4xl mb-7">
              I am Professional web developer
            </p>
            <p className="text-lg">
              I design and develop services for customers specializing creating
              stylish, modern websites, web services and online stores. My
              passion is to design digital user experiences.
            </p>
            <p className="mt-5">
              I design and develop services for customers specializing creating
              stylish, modern websites, web services.
            </p>
            <div className="flex gap-4">
              <button className="py-3 px-9 shadow text-white  my-8 bg-[#A53DFF] font-semibold rounded">
               <NavLink to={"/portfolio"} >Project</NavLink>
              </button>
              <button className="py-3 px-9 shadow text-[#A53DFF] font-semibold  m-8 border rounded flex align-center gap-2 justify-center">
              <span><CiSaveDown2 /></span>  Download cv
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

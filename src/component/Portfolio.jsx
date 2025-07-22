import React from 'react'
import { FaArrowRight } from "react-icons/fa";
export default function Portfolio() {
  return (
   <>
    <div className='h-full '>
      <div className='w-full lg:p-16'>
        <div className=' '>
    <center><h1 className='text-4xl font-semibold mb-5'>Portfolio</h1></center>
    <center><p className='text-[#556070]'>There are many variations of passages of Lorem Ipsum available,<br /> but the majority have suffered alteration.</p></center>
        </div>
        <div className='grid lg:grid-cols-3 lg:grid-rows-2 w-full lg:p-16  gap-5'>
        <div className='flex flex-col shadow  '>
        <div>
           <img src="../../assets/grid1.png" alt="" /> 
        </div>
        <div className='p-5'>
            <p className='text-sm '>WEB DESIGN <br /><span className='my-20 text-lg font-medium'>Enzzyme Clonework</span></p>
            <p className='text-[#556070]'>Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.</p>
            <button className='py-2 px-5 rounded border my-5 text-[#b565fc] flex gap-5 items-center'>Case study <span><FaArrowRight /></span></button>
        </div>
        </div>

        <div className='flex flex-col shadow  '>
        <div>
           <img src="../../assets/grid2.png" alt="" /> 
        </div>
        <div className='p-5'>
            <p className='text-sm '> WEB DESIGN <br /><span className='my-7 text-lg font-medium'>Interactive Quiz</span></p>
            <p className='text-[#556070]'>Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.</p>
            <button className='py-2 px-5 rounded border my-5 text-[#b565fc] flex gap-5 items-center'>Case study <span><FaArrowRight /></span></button>
        </div>
        </div>

        <div className='flex flex-col shadow  '>
        <div>
           <img src="../../assets/grid3.png" alt="" /> 
        </div>
        <div className='p-5'>
            <p className='text-sm '>WEB DESIGN <br /><span className='my-7 text-lg font-medium'>Fitness Tracker</span></p>
            <p className='text-[#556070]'>Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.</p>
            <button className='py-2 px-5 rounded border my-5 text-[#b565fc] flex gap-5 items-center'>Case study <span><FaArrowRight /></span></button>
        </div>
        </div>

        <div className='flex flex-col shadow  '>
        <div>
           <img src="../../assets/grid4.png" alt="" /> 
        </div>
        <div className='p-5'>
            <p className='text-sm '>WEB DESIGN <br /><span className='my-7 text-lg font-medium'>Personal Portfolio</span></p>
            <p className='text-[#556070]'>Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.</p>
            <button className='py-2 px-5 rounded border my-5 text-[#b565fc] flex gap-5 items-center'>Case study <span><FaArrowRight /></span></button>
        </div>
        </div>

        <div className='flex flex-col shadow  '>
        <div>
           <img src="../../assets/grid5.png" alt="" /> 
        </div>
        <div className='p-5'>
            <p className='text-sm '>WEB DESIGN <br /><span className='my-7 text-lg font-medium'>Daniel kitchen</span></p>
            <p className='text-[#556070]'>Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.</p>
            <button className='py-2 px-5 rounded border my-5 text-[#b565fc] flex gap-5 items-center'>Case study <span><FaArrowRight /></span></button>
        </div>
        </div>

        <div className='flex flex-col shadow  '>
        <div>
           <img src="../../assets/grid6.png" alt="" /> 
        </div>
        <div className='p-5'>
            <p className='text-sm '>WEB DESIGN <br /><span className='my-7 text-lg font-medium'>Blog</span></p>
            <p className='text-[#556070]'>Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.</p>
            <button className='py-2 px-5 rounded border my-5 text-[#b565fc] flex gap-5 items-center'>Case study <span><FaArrowRight /></span></button>
        </div>
        </div>

        </div>
        <center><button className='py-3 px-5 bg-[#b565fc] my-6 rounded text-white'>More Project</button></center>
      </div>
    </div>
   </>
  )
}

import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <div className=' container lg:px-16 mx-auto shadow lg:py-20 bg-[#2B384C] lg:h-85 text-[16px] text-[#F0F1F3] '>
      <div className=' flex lg:gap-30 lg:mt-45 items-center lg:flex-row flex-col '>
        <div className='flex items-center gap-3'>
             <div className='bg-[#A53DFF]  w-8 flex items-center justify-center h-8 rounded-full '><p>p</p></div>
             <p className='text-[32px] font-semibold'>Promise</p>
        </div>
       
      
        <ul className='flex gap-6 lg:flex-row flex-col'>
             <li><NavLink to={"/Home"} >Home</NavLink></li>
            <li><NavLink to={"/About"} >About</NavLink></li>
            <li><NavLink to={"/Process"} >Process</NavLink></li>
            <li><NavLink to={"/portfolio"} >Portfolio</NavLink></li>
            <li><NavLink to={"/Blog"} >Blog</NavLink></li>
            <li><NavLink to={"/Service"} >Services</NavLink></li>
            <li><NavLink className="bg-[#A53DFF] py-1 px-5 rounded text-white">Contact</NavLink></li>

        </ul>
       <div>Copyright © 2022 Picto.</div>
      </div>
      
    </div>
  )
}

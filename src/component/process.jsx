import React from 'react'
import { GoPencil } from "react-icons/go";
import { GoGraph } from "react-icons/go";
import { LuLaptop } from "react-icons/lu";
export default function Process() {
  return (
   <>
    <div className='container lg:px-16 lg:h-150 shadow  pro bg-[#f6f5f7] border '>
      <div className='flex lg:mt-45 justify-between lg:flex-row flex-col '>
        <div className='lg:w-[75%] m-auto px-2'>
            <h1 className='font-bold text-3xl leading-15 '>Work Process</h1>
            <p className='text-[18px] pb-4 text-[#556070]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet<br /> orci. Mauris ultrices eget lorem ac vestibulum. Suspendis <br /> imperdiet,</p>
            <p className='text-[18px] text-[#556070]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non.</p>
        </div>

        <div className='grid lg:grid-cols-2 lg:gird-row-2 gap-4 w-full lg:ml-8 text-[#556070]'>
            <div className='w-[] shadow p-5 bg-white'>
                <div className='bg-[#A53DFF]  w-10 flex items-center justify-center h-10 text-white '>R</div>
                <h1 className='font-medium text-2xl leading-10'>1. Research</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.</p>
            </div>
            <div className='shadow p-5 bg-white'>
                <div className='bg-[#A53DFF]  w-10 flex items-center justify-center h-10 text-white '><GoGraph /></div>
                <h1 className='font-medium text-2xl leading-10'>2. Research</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.</p>
            </div>
            <div className='shadow p-5 bg-white'>
                <div className='bg-[#A53DFF]  w-10 flex items-center justify-center h-10 text-white '><GoPencil /></div>
                <h1 className='font-medium text-2xl leading-10'>3. Research</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.</p>
            </div>
            <div className='shadow p-5 bg-white'>
                <div className='bg-[#A53DFF]  w-10 flex items-center justify-center h-10 text-white '><LuLaptop /></div>
                <h1 className='font-medium text-2xl leading-10'>4. Research</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.</p>
            </div>
        </div>
      </div>
    </div>
   </>
  )
}

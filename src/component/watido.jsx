import React from 'react'

export default function Watido() {
    const HandleContact =() => {
    const PhoneNumber = '2348139188264';
    const url = `https://wa.me/${PhoneNumber}`;
    window.open(url, '_blank');
  }
  return (
    <>
    <div className=''>
      <div className='w-full lg:p-16 flex  justify-between bg-[#F0F1F3] lg:flex-row flex-col '>
        <div className='lg:w-[40%]  my-auto'>
            <h1 className='text-4xl font-semibold mb-5'>My Skills?</h1>
            <p className='text-lg mb-3 text-[#87909D]'>What inspires me to create amazing digital experiences every day.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non.</p>
            <button className='mt-5 py-2 px-5 border bg-[#A53DFF] text-white rounded' onClick={HandleContact}>Says Hello!</button>
        </div>
        <div className='lg:w-[50%] flex flex-col gap-6'>
            <div className='shadow p-5 rounded wat bg-white'>
                <h1 className='text-2xl mb-2 font-semibold'>HTML</h1>
                <p className='text-[16px] text-[#87909D]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.</p>
            </div>
            <div className='shadow p-5 rounded bg-white'>
                <h1 className='text-2xl mb-2 font-semibold'>REACT</h1>
                <p className='text-[16px] text-[#87909D]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.</p>
            </div>
            <div className='shadow p-5 rounded bg-white'>
                <h1 className='text-2xl mb-2 font-semibold'>JAVASCRIPT</h1>
                <p className='text-[16px] text-[#87909D]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.</p>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

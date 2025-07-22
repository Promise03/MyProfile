import React from 'react'
import { FaArrowRight } from "react-icons/fa";
export default function Work() {
    const HandleContact =() => {
    const PhoneNumber = '2348139188264';
    const url = `https://wa.me/${PhoneNumber}`;
    window.open(url, '_blank');
  }
  return (
    <>
    <div className='bg-[#132238] py-12 text-white'>
      <div className=''>
        <div className='my-6'>
        <center><p className='text-4xl'>Do you have Project Idia? <br />
Let's discuss your project!</p></center>
      </div>
      <div className='mb-5'>
       <center> <p className='text-[#A5ACB5]'>There are many variations of passages of Lorem Ipsum available,<br />
but the majority have suffered alteration.</p></center>
      </div>
      <center><button className='py-2 px-5 bg-[#A53DFF] text-white mb-5 flex gap-5 items-center' onClick={HandleContact}>Let's work together <span><FaArrowRight /></span></button></center>
      </div>
    </div>
    </>
  )
}

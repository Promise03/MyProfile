import React from 'react'
import { SlLocationPin } from "react-icons/sl";
import { VscSend } from "react-icons/vsc";
export default function Contact() {
  
    const handleWhatsapp = () =>{
     const phoneNumber = '2348139188264'; // Your full international phone number
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, '_blank'); 
  
}
  return (
    <>
     <div className='lg:absolute  lg:w-[90%] shadow-2xl   lg:top-120 bg-white '>
      <div className='flex m-10 lg:flex-row flex-col   justify-between '>
        <div className='lg:w-[45%]  flex flex-col gap-4 h-full '>
            <div><h1 className='font-semibold text-3xl mb-3'>Let's discuss your project</h1>
        <p className='text-lg text-[#87909D]'>There are many variation of lorem ipsu <br /> available . but the majority have suffered alte</p></div>
        <div className='flex  p-2 gap-3 items-center shadow w-[90%]'>
            <div className='bg-[#A53DFF]  w-10 flex items-center justify-center h-10 text-white '><SlLocationPin /></div>
                <p>Address: <br /><span>Hamony Estate, ifako.</span></p>
            </div>
             <div className='flex  p-2 gap-3 items-center shadow w-[90%]'>
                <div className='bg-[#EDD8FF80]  w-10 flex items-center justify-center h-10 text-[#A53DFF] '><SlLocationPin /></div>
                <p>My Email: <br /> <span>rachealouwapelumi77@gmail.com</span></p>
             </div>
              <div className='flex  p-2 gap-3 items-center shadow w-[90%] mb-4'>
                <div className='bg-[#EDD8FF80]  w-10 flex items-center justify-center h-10 text-[#A53DFF]'><SlLocationPin /></div>
                <p onClick={handleWhatsapp}>Call me now: <br /> <span>08139188264</span></p>
              </div>
              <div className='flex gap-5'>
              <div className='bg-[#A53DFF]  w-10 flex items-center justify-center h-10 text-white '>
                <img src="../../assets/f.png" alt="" />
              </div>
              <div className='bg-white  w-10 flex items-center justify-center h-10 text-[#A53DFF]'>
                <img src="../../assets/t.png" alt="" />
              </div>
              <div className='bg-white  w-10 flex items-center justify-center h-10 text-[#A53DFF]'>
                <img src="../../assets/be.png" alt="" />
              </div>
              <div className='bg-white  w-10 flex items-center justify-center h-10 text-[#A53DFF]'>
                <img src="../../assets/i.png" alt="" />
              </div>
              <div className='bg-white  w-10 flex items-center justify-center h-10 text-[#A53DFF]'>
                <img src="../../assets/in.png" alt="" />
              </div>
              </div>
        </div>
            <div className='lg:w-[48%] text-[#87909D] mt-10'>
              <p className='text-[18px] mb-5'>There are many variations of passages of Lorem Ipsu available,<br />
but the majority have suffered alte.</p>
                <form action="" className=' flex flex-col '>
                    <input type="text" placeholder='Name* ' className='input-active py-2 text-[#A53DFF]'/>
                    <input type="text" placeholder='Email* ' className='input py-2'/>
                    <input type="text" placeholder='Location ' className='input py-2'/>
                   <div className='flex gap-6 lg:flex-row flex-col'>
                     <input type="text" placeholder='Budget* ' className='input py-2'/>
                    <input type="text" placeholder='Name* ' className='input py-2'/>
                   </div>
                    <textarea name="text" placeholder='Message*' className='input py-2' id=""></textarea>
                    <button className='border py-2  my-6 lg:w-[20%] text-white bg-[#A53DFF] flex items-center gap-3 px-3'>Submit  <span><VscSend /></span></button>
                </form>
               </div>
        
      </div>
      <div></div>
    </div>
    </>
  )
}

import React from 'react'
import Testimonial from './testimonial'

export default function Happy() {
  return (
   <>
    <div>
      <div className='my-7'>
        <div className='my-4'>
           <center> <h1 className='font-semibold text-4xl mb-7'>Happy Client</h1></center>
           <center> <p className='text-lg text-[#87909D]'>There are many variations of passages of Lorem Ipsum available, <br />but the majority have suffered alteration.</p></center>
        </div>

        <div className=' flex w-full p-16 lg:flex-row flex-col'>
            <img src="../../assets/google.png" alt="" />
             <img src="../../assets/dribbble.png" alt="" />
              <img src="../../assets/linkedin.png" alt="" />
               <img src="../../assets/amazon.png" alt="" />
                <img src="../../assets/medium.png" alt="" />
                 <img src="../../assets/spotify.png" alt="" />
        </div>
      </div>
      <Testimonial/>
    </div>
   </>
  )
}

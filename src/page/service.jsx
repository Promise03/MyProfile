import React from 'react'

function Service() {
  return (
    <>
     <div className='w-[90%] m-auto '>
      <div className='my-6'>
        <center><h2 className='text-6xl my-6'>Quality Service</h2></center>
        <center><p>I offer a range of service to help bring your digital ideas to life with cutting-edge technology and creativity</p></center>
      </div>

      <div className='flex flex-col'>
        <div className='border p-7 rounded-2xl   my-7 text-2xl'> 
            <h3>Web Development <span></span></h3>
        </div>
        <div className='border p-7 rounded-2xl text-2xl mb-7'>
            <h3>Mobile Apps </h3>
        </div>
      </div>
    </div>
    </>
  )
}

export default Service

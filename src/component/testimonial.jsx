import React from 'react'
import Contact from '../page/contact'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonial() {
    var settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
        fade: false,

    }
  return (
    <>
     <div className='  relative lg:h-210 mx-auto w-full lg:p-16 h-fit'>

        <center><h1 className='text-4xl font-semibold mb-4'>Testimonial</h1></center>
        <center><p className='text-lg mb-7 text-[#87909D]'>What my clients say about my work.</p></center>

       <Slider {...settings}>
         <div className='mt-16 '>
            <center><p >“promise delivered an outstanding website that exceeded our expectations. Highly recommend!”</p></center>
            <center><p className='text-lg font-medium mt-8'>Esther Howard</p></center>
            <center><p className='text-lg'>Managing Director, ABC company</p></center>
        </div>

        <div className='mt-16 '>
            <center><p >“Nulla efficitur nisl sit amet velit malesuada dapibus. Duis mollis felis turpis, nec semper odio <br />convallis at. Curabitur imperdiet semper arcu, a finibus arcu suscipit in. Donec quis placerat nibh. <br />Maecenas est purus, eleifend ac cursus sed, tincidunt ut sapien. <br /> Morbi ornare elit at libero suscipit porta.”</p></center>
            <center><p className='text-lg font-medium mt-8'>Esther Howard</p></center>
            <center><p className='text-lg'>Managing Director, ABC company</p></center>
        </div>
       </Slider>

        <Contact/>

      {/* <div className='w-[90%] m-auto border flex justify-between '> */}



        {/* <div className=' p-3 m-auto w-[28%] border my-6 rounded-3xl'> */}
            {/* <div className='flex mb-6 justify-between items-center'>
                <div className='py-2 px-4 rounded-4xl text-center border'>Real Estate</div>
               <div className='w-[20%] border rounded-full shadow'>
            <img src="../../assets/test.jpg" alt="" className='cover w-[100%] rounded-full' />
      </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis vel harum dicta illo assumenda nulla ad quas adipisci autem, totam perferendis repudiandae itaque accusamus laborum laudantium necessitatibus, nemo est quaerat?</p>
            <div className='mt-6 '>
                <h1 className='text-4xl'>Oluwapelumi</h1>
                <p>CEO, p-tech</p>
            </div>
        </div>

        <div className=' p-3 m-auto w-[28%] border my-6 rounded-3xl'>
            <div className='flex mb-6 justify-between items-center'>
                <div className='py-2 px-4 rounded-4xl text-center border'>Real Estate</div>
               <div className='w-[20%] border rounded-full shadow'>
            <img src="../../assets/test.jpg" alt="" className='cover w-[100%] rounded-full' />
      </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis vel harum dicta illo assumenda nulla ad quas adipisci autem, totam perferendis repudiandae itaque accusamus laborum laudantium necessitatibus, nemo est quaerat?</p>
            <div className='mt-6 '>
                <h1 className='text-4xl'>Oluwapelumi</h1>
                <p>CEO, p-tech</p>
            </div>
        </div>

        <div className=' p-3 m-auto w-[28%] border my-6 rounded-3xl'>
            <div className='flex mb-6 justify-between items-center'>
                <div className='py-2 px-4 rounded-4xl text-center border'>Real Estate</div>
               <div className='w-[20%] border rounded-full shadow'>
            <img src="../../assets/test.jpg" alt="" className='cover w-[100%] rounded-full' />
      </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis vel harum dicta illo assumenda nulla ad quas adipisci autem, totam perferendis repudiandae itaque accusamus laborum laudantium necessitatibus, nemo est quaerat?</p>
            <div className='mt-6 '>
                <h1 className='text-4xl'>Oluwapelumi</h1>
                <p>CEO, p-tech</p>
            </div> */}
        {/* </div> */}
      {/* </div> */}
    </div>
    </>
  )
}

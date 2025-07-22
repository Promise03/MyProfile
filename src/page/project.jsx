import React from 'react'

export default function Project() {
  return (
    <>
     <div className='border my-7 '>
      <div>
        <center><h1 className='text-4xl my-4'>Project</h1></center>
        <div className='m-auto flex text-center w-[20%]  justify-between mb-7'>
            <div className='border rounded-3xl py-3 px-5 shadow'>App</div>
            <div className='border rounded-3xl py-3 px-5 shadow'>Web</div>
            <div className='border rounded-3xl py-3 px-5 shadow'>All</div>
        </div>
      </div>

      <div className='flex m-auto w-[90%] border justify-between'>
        <div className='shadow p-6 w-[48%]'>
             <img src="../../assets/enzzme.png" alt="" />

            <div>
                <h1>EnzzymeClone</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam porro sit dignissimos adipisci dolor cupiditate nesciunt corrupti vel voluptas quod tenetur ipsa, tempora officiis iste nemo unde aut minus ea.</p>
            </div>
        </div>
        <div  className='shadow p-6 w-[48%]'>
            <img src="../../assets/enzzme.png" alt="" />
        </div>

        <div className='shadow p-6 w-[48%]'>
             <img src="../../assets/enzzme.png" alt="" />

            <div>
                <h1>EnzzymeClone</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam porro sit dignissimos adipisci dolor cupiditate nesciunt corrupti vel voluptas quod tenetur ipsa, tempora officiis iste nemo unde aut minus ea.</p>
            </div>
        </div>

        <div className='shadow p-6 w-[48%]'>
             <img src="../../assets/enzzme.png" alt="" />

            <div>
                <h1>EnzzymeClone</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam porro sit dignissimos adipisci dolor cupiditate nesciunt corrupti vel voluptas quod tenetur ipsa, tempora officiis iste nemo unde aut minus ea.</p>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

import React from 'react'
import ff from '../assets/ff.png'
import tt from '../assets/tt.png'
import nm from '../assets/nm.png'
import sc from '../assets/sc.png'

const ProjectCard = ({ title, p, img }) => {




  return (
    <>
      <div className=" border-mist-300 border w-70 md:w-85 flex flex-col items-center justify-between rounded-2xl bg-white rounded-t-2xl gap-3 ">
        <div className='h-[120px]'>
          <img src={img == 'tt' ? tt : img == 'ff' ? ff : img == 'nm' ? nm : img == 'sc' ? sc : ff} alt="tt" className=' transition-transform ease-in-out w-full object-cover rounded-t-2xl' /></div>
        <div className='mt-2 bg-white rounded-xl flex flex-col gap-1 '>
          <h1 className='text-2xl text-blue-500 text-center font-semibold p-3 relative z-10 w-full'>{title}</h1>

          <p className='px-5 text-center text-sm'>{p} <span className='text-blue-500'>..more</span> </p>

          <div className='flex flex-wrap gap-1  justify-center text-sm mt-1 '>
            <p className='border-mist-500 border rounded-2xl px-1'>#javascrpt</p>
            <p className='border-mist-500 border text-mist-800 font-medium rounded-2xl px-1'>#css</p>
            <p className='border-mist-500 border rounded-2xl px-1'>#tailwind</p>
            <p className='border-mist-500 border rounded-2xl px-1'>+1</p>
          </div>
        </div>

        <div className='h-3'></div>
      </div>
    </>
  )
}

export default ProjectCard
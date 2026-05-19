import React from 'react'
import ff from '../assets/ff.png'
import tt from '../assets/tt.png'
import nm from '../assets/nm.png'
import sc from '../assets/sc.png'
import arrow from '../assets/arrow.png'

const ProjectCard2 = ({ title, p, img }) => {




  return (
    <>
    <div className="flex mt-5 ">

      <div className="relative ">
        <img src={img == 'tt' ? tt : img == 'ff' ? ff : img == 'nm' ? nm : img == 'sc' ? sc : ff} alt="tt" className='  border-mist-300 gra border cursor-pointer  transition-transform ease-in-out w-100 object-cover h-60 [corner-shape:squircle] rounded-4xl ' />
            <div className='lg:hidden absolute bottom-0 p-3 m-px text-black backdrop-blur-[17px] rounded-4xl [corner-shape:squircle]'>
              <h1 className=' text-2xl font-medium ms-2 mt-2'>{title}</h1>
              <p className=' text-sm mt-8 pe-10 ps-2 mb-3'>{p}</p>
            </div>
        <div className='relative '>

            <img src={arrow} alt="link" className=' size-8 absolute right-5 bottom-5 ' />


        </div>
        
      </div>

      <div className='hidden lg:flex flex-col p-3 ms-3 w-sm '>
        <h1 className=' text-2xl font-medium mt-2'>{title}</h1>
        <p className='  text-mist-800 mt-8'>{p}</p>
      </div>

    </div>
    </>
  )
}

export default ProjectCard2
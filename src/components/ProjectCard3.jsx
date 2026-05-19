import React from 'react'
import ff from '../assets/ff.png'
import tt from '../assets/tt.png'
import nm from '../assets/nm.png'
import sc from '../assets/sc.png'
import arrow from '../assets/arrow.png'
import { useTheme } from '../context/themeContext'

const ProjectCard2 = ({ title, p, img, link }) => {
    const { isDarkMode, setDarkMode, toggleDarkMode } = useTheme()
  const redirect = () => {
    if (window.confirm(`Proceed to open ${title} project in new tab?` )) {
      // Action if user clicks 'OK' (returns true)
      console.log("Proceeding...");
      window.open(link,"_target") // Navigate to new page
    } else {
      // Action if user clicks 'Cancel' (returns false)
      console.log("Action canceled.");
    }
  }



  return (
    <>
      <div className={isDarkMode?"flex mt-5 lg:active:bg-white/7 lg:bg-white/3 rounded-2xl sm:p-9":"flex mt-5 lg:active:bg-black/7 lg:bg-black/3 rounded-2xl sm:p-9"} onClick={redirect}>

        <div className="flex flex-col">
          <img src={img == 'tt' ? tt : img == 'ff' ? ff : img == 'nm' ? nm : img == 'sc' ? sc : ff} alt="tt" className='  border-mist-300 border cursor-pointer  transition-transform ease-in-out w-100 object-cover sm:h-60 [corner-shape:squircle] rounded-4xl shadow-lg' />
          <div className={isDarkMode?"text-white lg:hidden bottom-0 p-3 m-px rounded-4xl [corner-shape:squircle]":'lg:hidden bottom-0 p-3 m-px text-black rounded-4xl [corner-shape:squircle]'}>
            <h1 className='text-xl font-medium '>{title}</h1>
            <div className="flex justify-between">
              <p className='text-sm w-65'>{p}</p>
              <img src={arrow} alt="link" className=' relative size-5 mt-auto right-0 bottom-0 ' />
            </div>
            {/*
              <p className=' text-sm mt-8 pe-10 ps-2 mb-3 w-90'>{p}</p>
             */}


          </div>

        </div>

        <div className={isDarkMode?'text-white hidden lg:flex flex-col p-3 ms-3 w-sm gap-4 relative':'hidden lg:flex flex-col p-3 ms-3 w-sm gap-4 relative'}>
          <h1 className=' text-2xl font-medium mt-3'>{title}</h1>
          <p className={isDarkMode?'text-mist-300  mt-4':'  text-mist-800 mt-4'}>{p}</p>
          <img src={arrow} alt="link" className=' size-8 ms-auto mt-auto' />
        </div>

      </div>
    </>
  )
}

export default ProjectCard2
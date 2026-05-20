import React from 'react'
import ff from '../assets/ff.png'
import tt from '../assets/tt.png'
import nm from '../assets/nm.png'
import sc from '../assets/sc.png'
import arrow from '../assets/arrow.png'
import arrowlight from '../assets/arrowlight.png'
import { useTheme } from '../context/themeContext'
import { motion } from "motion/react"


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
      <motion.div initial={{opacity:0, y:100}}  transition={{duration:2, ease:"anticipate"}}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount:0.2 }} className={isDarkMode?"flex mt-5 sm:active:bg-white/20 sm:bg-white/0 active:bg-white/17 bg-white/10 sm:hover:bg-white/10 rounded-2xl p-2":"flex mt-5 sm:active:bg-black/9  sm:bg-black/0 active:bg-black/8 bg-black/5 sm:hover:bg-black/5 rounded-2xl p-2"} onClick={redirect}>

        <div className="flex flex-col">
          <img src={img == 'tt' ? tt : img == 'ff' ? ff : img == 'nm' ? nm : img == 'sc' ? sc : ff} alt="tt" className='  border-mist-300 border  transition-transform ease-in-out w-100 object-cover sm:h-60 [corner-shape:squircle] rounded-4xl ' />
          <div className={isDarkMode?"lg:hidden bottom-0 p-3 m-px rounded-4xl [corner-shape:squircle]":'lg:hidden bottom-0 p-3 m-px text-black rounded-4xl [corner-shape:squircle]'}>
            <h1 className={isDarkMode?'text-xl font-medium text-white':'text-xl font-medium '}>{title}</h1>
            <div className="flex justify-between">
              <p className={isDarkMode?'text-[14px] md:text-sm w-65 text-mist-300':'text-[14px] md:text-sm w-65'}>{p}</p>
              <img src={!isDarkMode?arrow:arrowlight} alt="link" className=' relative size-5 mt-auto right-0 bottom-0 ' />
            </div>
            {/*
              <p className=' text-sm mt-8 pe-10 ps-2 mb-3 w-90'>{p}</p>
             */}


          </div>

        </div>

        <div className={isDarkMode?'text-white hidden lg:flex flex-col p-3 ms-3 w-sm gap-4 relative':'hidden lg:flex flex-col p-3 ms-3 w-sm gap-4 relative'}>
          <h1 className=' text-2xl font-medium mt-3'>{title}</h1>
          <p className={isDarkMode?'text-mist-300  mt-4':'  text-mist-800 mt-4'}>{p}</p>
          <img src={!isDarkMode?arrow:arrowlight} alt="link" className=' size-8 ms-auto mt-auto' />
        </div>

      </motion.div>
    </>
  )
}

export default ProjectCard2
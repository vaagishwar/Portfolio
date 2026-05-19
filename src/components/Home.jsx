import React from 'react'
import me from '../assets/profile.png'
import { useTheme } from '../context/themeContext.jsx'

import { motion } from 'motion/react'
const Home = () => {

   const { isDarkMode, setDarkMode, toggleDarkMode } = useTheme()
  return (
    <>

      <div className=" select-text" className={isDarkMode? "absolute -z-10 inset-0 h-full w-full  bg-[size:40px_40px] bg-[linear-gradient(to_right,#55555533_1px,transparent_1px),linear-gradient(to_bottom,#55555533_1px,transparent_1px)]":"bg-[linear-gradient(to_right,#55555511_1px,transparent_1px),linear-gradient(to_bottom,#55555511_1px,transparent_1px)] absolute -z-10 inset-0 h-full w-full  bg-[size:40px_40px]"} id='About' />
      <div className={isDarkMode?"min-h-[80vh] flex flex-col justify-center items-center gap-4 text-white":"min-h-[80vh] flex flex-col justify-center items-center gap-4 "}>


        <motion.div whileHover={{ scale: 1.04, ease: "easeOut" }} initial={{ opacity: 0, y: 10 }} transition={{ duration: 0.3, ease: "easeOut" }} animate={{ opacity: 1, y: 0 }} className="p-[4px] rounded-full bg-[conic-gradient(#db4437_0deg_70deg,#f4b400_70deg_140deg,#0f9d58_140deg_220deg,#4285f4_220deg_320deg,#db4437_320deg_360deg)]">

          <img src={me} alt="profile.png" className='size-30 lg:size-40 rounded-full border-4 border-white' />
        </motion.div>



        {/* <img src={me} alt="me.png" className='absolute bottom-0 -z-1 lg:size-[400px] object-cover w-[300px]' /> */}
        <motion.h1 initial={{ opacity: 0, y: 10 }} transition={{ duration: 0.65, ease: "easeOut", delay: 0.2 }} animate={{ opacity: 1, y: 0 }} className='name text-4xl lg:text-7xl'>Vaagishwar M</motion.h1>
        <motion.h1 initial={{ opacity: 0, y: 10 }} transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }} animate={{ opacity: 1, y: 0 }} className='max-w-[290px] sm:max-w-[300px] md:max-w-lg lg:text-2xl lg:max-w-3xl text-center pb-9' >Web Dev Intern | Zoho Cliqtrix Enthusiast | MERN-Stack Developer | IEEE Research Project & Open-Source Contribution</motion.h1>
        <div className="" className={isDarkMode?"absolute  top-0 h-40 w-full -z-10 overlay  bg-[linear-gradient(#030712ff,#03071200)]":"absolute  top-0 h-40 w-full -z-10 overlay  bg-[linear-gradient(#ffffffff,#ffffff00)]"} ></div>      </div>
      <div className="" className={isDarkMode?"absolute  bottom-0 h-70 w-full  -z-10 overlay bg-[linear-gradient(#03071200,#030712ff)]":"absolute  bottom-0 h-70 w-full  -z-10 overlay bg-[linear-gradient(#ffffff00,#ffffffff)]"}></div>
    </>
  )
}

export default Home
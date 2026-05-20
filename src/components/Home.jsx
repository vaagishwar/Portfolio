import React from 'react'
import me from '../assets/profile.png'
import download from '../assets/download.png'
import pdf from '../assets/Final_Resume.pdf'
import { useTheme } from '../context/themeContext.jsx'
import github from '../assets/github.png'


import { motion } from 'motion/react'
const Home = () => {


   const { isDarkMode, setDarkMode, toggleDarkMode } = useTheme()
  return (
    <>
  {/* <img src="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F266e05dba3864799b4715cf4bfd8aa2a" alt="" className='absolute -z-20 object-cover h-[785px] w-full bg-blend-darken' /> */}
      <div className={
    isDarkMode
      ? "absolute z-0 inset-0  w-full bg-[size:44px_44px] bg-[position:15px_43px] bg-[linear-gradient(to_right,#55555533_1px,transparent_1px),linear-gradient(to_bottom,#55555533_1px,transparent_1px)]"
      : "absolute z-0 inset-0  w-full bg-[size:44px_44px] bg-[position:15px_43px] bg-[linear-gradient(to_right,#55555511_1px,transparent_1px),linear-gradient(to_bottom,#55555511_1px,transparent_1px)]"
  } id='About' />
      {/* <div className=" select-text" className={isDarkMode? "absolute -z-10 inset-0 h-full w-full  bg-[size:40px_40px] bg-[linear-gradient(to_right,#55555533_1px,transparent_1px),linear-gradient(to_bottom,#55555533_1px,transparent_1px)]":"bg-[linear-gradient(to_right,#55555511_1px,transparent_1px),linear-gradient(to_bottom,#55555511_1px,transparent_1px)] absolute -z-10 inset-0 h-full w-full  bg-[size:40px_40px]"} id='About' /> */}
      <div className={isDarkMode?"relative z-10 min-h-[80vh] flex flex-col justify-center items-center gap-4 text-white":"relative z-10 min-h-[80vh] flex flex-col justify-center items-center gap-4 "}>


        <motion.div viewport={{ once: false, amount:0.2 }} whileHover={{scale: 1.07, ease: "easeOut" }}  initial={{ opacity: 0, y: 10 }} transition={{ duration: 0.3, ease: "easeOut" }} animate={{ opacity: 1, y: 0 }} className="p-[4px] rounded-full bg-[conic-gradient(#db4437_0deg_70deg,#f4b400_70deg_140deg,#0f9d58_140deg_220deg,#4285f4_220deg_320deg,#db4437_320deg_360deg)]">

          <img src={me} alt="profile.png" className={isDarkMode?"size-30 lg:size-40 rounded-full border-4 border-black":'size-30 lg:size-40 rounded-full border-4 border-white'} />
        </motion.div>



        {/* <img src={me} alt="me.png" className='absolute bottom-0 -z-1 lg:size-[400px] object-cover w-[300px]' /> */}
        <motion.h1 viewport={{ once: false, amount:0.2 }} initial={{ opacity: 0, y: 10 }} transition={{ duration: 0.65, ease: "easeOut", delay: 0.2 }} animate={{ opacity: 1, y: 0 }} className='name text-4xl lg:text-7xl'>Vaagishwar M</motion.h1>
        <motion.h1 viewport={{ once: false, amount:0.2 }} initial={{ opacity: 0, y: 10 }} transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }} animate={{ opacity: 1, y: 0 }} className='max-w-[290px] sm:max-w-[300px] md:max-w-lg lg:text-2xl lg:max-w-3xl text-center pb-9' >Web Dev Intern | Zoho Cliqtrix Enthusiast | MERN-Stack Developer | IEEE Research Project & Open-Source Contribution</motion.h1>

        <div className={isDarkMode?"absolute -top-19 h-40 w-full z-0 overlay bg-[linear-gradient(#030712ff,#03071200)]":"absolute -top-19 h-40 w-full z-0 overlay bg-[linear-gradient(#ffffffff,#ffffff00)] "} ></div>
        <div className="flex gap-4 items-center">
          <motion.a viewport={{ once: false, amount:0.2 }} onTap={{scale:0.6}} initial={{opacity:0, y:10}} animate={{opacity:1,y:0}} transition={{duration:0.45, ease:"easeOut", delay:0.6}} className={isDarkMode?"cursor-none text-sm md:text-lg bg-white rounded-full flex p-2 px-4 text-black font-medium shadow-xl m-1":"m-1 text-sm md:text-lg bg-black rounded-full flex p-2 px-4 text-white font-medium drop-shadow-2xl cursor-none glossy-btn"} href={pdf} target='_blank' > Get Resume</motion.a>
        <motion.a viewport={{ once: false, amount:0.2 }} initial={{opacity:0, y:10}} animate={{opacity:1,y:0}} transition={{duration:0.40, ease:"easeOut", delay:0.8}}  href="https:github.com/vaagishwar" target="_blank" className='size-10 cursor-none ' ><img src={github} alt="github" className='' /></motion.a>
        
        </div>
      <div className={isDarkMode?
        "absolute -bottom-34 h-70 w-full z-0 overlay bg-[linear-gradient(#03071200,#030712ff)]":
        "absolute -bottom-34 h-70 w-full z-0 overlay bg-[linear-gradient(#ffffff00,#ffffffff)]"}></div>
        </div>
    </>
  )
}

export default Home

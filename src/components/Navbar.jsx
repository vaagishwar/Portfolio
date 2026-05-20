import React, { useEffect } from 'react'
import github from '../assets/github.png'
import { motion } from 'motion/react'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import { useTheme } from '../context/themeContext.jsx'

const Navbar = () => {
    const { isDarkMode, toggleDarkMode } = useTheme();
    return (
        <>
            <nav  className='flex justify-between py-5 px-7 items-center sticky z-20 top-0 md:text-md bg-transparent text-sm'>
                <motion.ul initial={{y:-70}} animate={{y:0}} transition={{ease:"easeOut",duration:0.9, delay:0.6, type: "spring", stiffness: 100, damping: 25}}>
                    <li className={!isDarkMode?'text-black':'text-white'}>/Home</li>
                </motion.ul>

                <motion.ul initial={{y:-70}} animate={{y:0}} transition={{ease:"easeOut",duration:0.9, delay:0.8, type: "spring", stiffness: 100, damping: 25}} whileTap={{ scale: 0.96 }} className='flex md:gap-9 gap-4 shadow-sm bg-amber-300 p-0 md:py-2 rounded-full px-3 py-0.5 md:px-7 uppercase'>
                    <li><a className={isDarkMode?'cursor-none text-black':'cursor-none '} href="#About">About</a></li>
                    <li><a className={isDarkMode?'cursor-none text-black':'cursor-none '} href="#Projects">Projects</a></li>
                    {/* <li><a className={isDarkMode?'cursor-none text-black':'cursor-none '} href="#Contact">Contact</a></li> */}
                </motion.ul>

                <motion.ul initial={{y:-70}} animate={{y:0}} transition={{ease:"easeOut",duration:0.9, delay:0.9, type: "spring", stiffness: 100, damping: 25}} className='flex gap-4 text-2xl items-center'>
                    <DarkModeSwitch
                        checked={isDarkMode}
                        onChange={toggleDarkMode}
                        size={27}
                        
                    />
                    {/* <li><a href="https:github.com/vaagishwar" target="_blank" ><img src={github} alt="github" className='size-8 object-contain' /></a></li> */}
                </motion.ul>
            </nav>
        </>
    )
}

export default Navbar

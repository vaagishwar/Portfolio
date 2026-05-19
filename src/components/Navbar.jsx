import React, { useEffect } from 'react'
import github from '../assets/github.png'
import { motion } from 'motion/react'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import { useTheme } from '../context/themeContext.jsx'

const Navbar = () => {
    const { isDarkMode, toggleDarkMode } = useTheme();
    // useEffect(()=>{
    //     console.log(isDarkMode)
    // })
    return (
        <>
            <nav className='flex justify-between py-5 px-7 items-center sticky z-10 top-0 md:text-md bg-transparent text-sm'>
                <ul>
                    <li className={!isDarkMode?'text-black':'text-white'}>/Home</li>
                </ul>
                <motion.ul whileTap={{ scale: 0.96 }} initial={{}} animate={{}} className='flex md:gap-9 gap-4 bg-amber-300 p-0 md:py-2 rounded-full px-3 py-0.5 md:px-7 uppercase'>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Projects">Projects</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </motion.ul>
                <ul className='flex gap-4 text-2xl items-center'>
                    <DarkModeSwitch
                        checked={isDarkMode}
                        onChange={toggleDarkMode}
                        size={27}
                    />
                    {/* <li><a href="https:github.com/vaagishwar" target="_blank" ><img src={github} alt="github" className='size-8 object-contain' /></a></li> */}
                </ul>
            </nav>
        </>
    )
}

export default Navbar

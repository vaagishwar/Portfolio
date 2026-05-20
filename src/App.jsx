import { useEffect, useState } from 'react';
import './App.css'

import About from './components/About.jsx';
import Contacts from './components/Contacts.jsx';
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx';
import Projects from './components/Projects.jsx';

import { motion } from "motion/react"
import Footer from './components/Footer.jsx';

function App() {
  // Cursor Position
  const [cursorPosition, setCursorPosition] = useState({
    x: -100,
    y: -100
  })

  // Mobile Detection
  const [isMobile, setIsMobile] = useState(false)

  // Mouse Move
  useEffect(() => {

    const moveCursor = (e) => {
      setCursorPosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", moveCursor)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
    }

  }, [])

  // Detect Mobile Screen
  useEffect(() => {

    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkScreenSize()

    window.addEventListener("resize", checkScreenSize)

    return () => {
      window.removeEventListener("resize", checkScreenSize)
    }

  }, [])

  return (

    <>

      {/* Custom Cursor */}
      {!isMobile && (

        <motion.img
          src="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fbba6d6b3473d436098e3637650f64ee2"

          alt="cursor image"

          animate={{
            x: cursorPosition.x,
            y: cursorPosition.y
          }}

          transition={{
            type: "spring",
            stiffness: 1000,
            damping: 50
          }}

          className="fixed top-0 left-0 z-[999] pointer-events-none"

          width={70}
          height={40}
        />

      )}

      <Navbar />

      <Home />

      {/* <About /> */}

      <Projects />

      {/* <Contacts /> */}


      <div className='py-15'></div>
      <Footer/>

    </>
  );
}

export default App;




// Navbar
// Hero
// About
// Skills
// Projects
// Experience
// Certificates
// GitHub Stats
// Contact
// Footer

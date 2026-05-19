import React from 'react'
import ProjectCard3 from './ProjectCard3'
import ff from '../assets/ff.png'
import tt from '../assets/tt.png'
import nm from '../assets/nm.png'
import { useTheme } from '../context/themeContext'
const Projects = () => {

    const { isDarkMode, setDarkMode, toggleDarkMode } = useTheme()


  return (
    <>
      <div className='mx-10' id='Projects'>
        <div className="py-25"> <h1 className={isDarkMode?"text-white text-center md:text-4xl text-2xl":"text-center md:text-4xl text-2xl"} >PROJECTS</h1></div>
        <div className="flex gap-4 flex-wrap justify-evenly">



          <div className=''>
            <ProjectCard3 img='tt' link='https://timetabletimer.web.app' title='Timetable Management' p='A productive login based timetable which highlights ongoing period respective to their classes' />
          <ProjectCard3 img='ff' link='https://friendshipquiz.live' title='Friendship Quiz' p='A Friendship quizzes and sharable Links which include personal questions, score tracking.' />
          
          </div>
          <div className="">

          <ProjectCard3 img='nm' link='https://nlc-project.vercel.app/admin' title='E-Notice Management' p='A Notice board management application focuses CRUD notices on webpages using Node.js.' />
          <ProjectCard3 img='sc' link='https://github.com/vaagishwar/SiteComments' title='SiteComments' p='A Chrome Extension that enables users to Like and comment on any website you visit' />
              
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
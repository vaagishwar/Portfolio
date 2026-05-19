import { useEffect } from 'react';
import './App.css'
import About from './components/About.jsx';
import Contacts from './components/Contacts.jsx';
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx';
import Projects from './components/Projects.jsx';
import { useTheme } from './context/themeContext.jsx';

function App() {

   const { isDarkMode } = useTheme()

   useEffect(()=>{
    if(isDarkMode){
      document.body.style.backgroundColor = '#030712'
    }else{
      document.body.style.backgroundColor = '#ffffff'
    }
   })

  return (

    <>

      <Navbar/>
      <Home/>
      {/* <About/> */}
      <Projects/>
      {/* <Contacts/> */}
      <div className='py-45'></div>
    
    </>
  );
}

export default App;
import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
function ScrollTop(){
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
export default function App(){ return <><ScrollTop/><Navbar/><main><Routes><Route path="/" element={<Home/>}/><Route path="/projects" element={<Projects/>}/><Route path="/resume" element={<Resume/>}/></Routes></main><Footer/></> }

import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const [currentSection, setCurrentSection] = useState('home')

  const renderCurrentSection = () => {
    switch (currentSection) {
      case 'home':
        return <Home key="home" />
      case 'about':
        return <About key="about" />
      case 'projects':
        return <Projects key="projects" />
      case 'contact':
        return <Contact key="contact" />
      default:
        return <Home key="home" />
    }
  }

  return (
    <div className="App">
      <Navbar currentSection={currentSection} setCurrentSection={setCurrentSection} />
      <AnimatePresence mode="wait">
        {renderCurrentSection()}
      </AnimatePresence>
    </div>
  )
}

export default App

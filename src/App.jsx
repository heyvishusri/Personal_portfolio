import { useState, useEffect } from 'react'
import { DarkModeProvider } from './contexts/DarkModeContext'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'education', 'projects', 'contact']
      const scrollPosition = window.scrollY + 150

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <DarkModeProvider>
      <div className="min-h-screen bg-dark-bg dark:bg-light-bg transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-5 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-11">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="bg-dark-card dark:bg-light-card border border-dark-border dark:border-light-border rounded-2xl p-10">
              <Header
                activeSection={activeSection}
                setActiveSection={setActiveSection}
              />
              <About />
              <Skills />
              <Education />
              <Projects />
              <Contact />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </DarkModeProvider>
  )
}

export default App


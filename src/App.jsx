import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Skills from './pages/skills/Skills'
import Education from './pages/education/Education'
import Work from './pages/works/Work'
import Experience from './pages/experience/Experience'
import Contact from './pages/contact/Contact'

const App = () => {
  return (
    <main>
      <Header />
      <Home />
      <About />
      <Skills />
      <Education />
      {/* <Work />
      <Experience /> */}
      <Contact />
      <Footer />
    </main>
  )
}

export default App

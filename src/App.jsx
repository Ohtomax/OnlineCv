import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import DataAnalytics from './components/DataAnalytics'
import Contact from './components/Contact'

// Load global CSS files
import './cssfiles/about.css'

export default function App() {
  const [activeTab, setActiveTab] = useState('home')

  // Re-run AOS animations whenever active page tab changes
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({
        duration: 1200,
        once: false,
      })
      window.AOS.refresh()
    }
  }, [activeTab])

  // Helper function to render active component
  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home />
      case 'about':
        return <About />
      case 'skills':
        return <Skills />
      case 'experience':
        return <Experience />
      case 'data-analytics':
        return <DataAnalytics />
      case 'contact':
        return <Contact />
      default:
        return <Home />
    }
  }

  return (
    <div className="app-container">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="content-section">
        {renderContent()}
      </main>
    </div>
  )
}

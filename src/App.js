import React from 'react'
import './App.css'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Projects from './pages/Projects/Projects'
import Contact from './pages/Contact/Contact'
import Nav from './components/Nav/Nav'

function App() {
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;

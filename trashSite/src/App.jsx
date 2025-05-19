import React from 'react'
import { Navbar } from './components/Navbar'
import { About } from './components/About'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Email } from './components/Email';
import { FadeIn } from './components/fadeIn';
export const App = () => {
  return (
  <>
   <Navbar/>
  <About/>
  <FadeIn> <Email/>

  </FadeIn>
  <FadeIn>
    <Footer/>
  </FadeIn>
  
  </>
  )
}

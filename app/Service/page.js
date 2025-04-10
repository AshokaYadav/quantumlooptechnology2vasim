import React from 'react'
import Navbar from '../../components/common/Navbar'
import Footer from '../../components/common/Footer'
import Hero from './components/Hero'
import Services from './components/Services'
import HowWeWork from './components/HowWeWork'
import Technologies from './components/Technologies'
import CTA from './components/CTA'

const page = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Services/>
    <HowWeWork/>
    <Technologies/>
    <CTA/>
    <Footer/>
    </>
  )
}

export default page
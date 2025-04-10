import React from 'react'
import Navbar from '../../components/common/Navbar'
import Footer from '../../components/common/Footer'
import Hero from './components/Hero'
import FAQ from '../../components/sections/FAQ';
import ContactSection from './components/ContactSection';

const page = () => {
  return (
   <>
   <Navbar/>
   <Hero/>
   <FAQ/>
   <ContactSection/>
   <Footer/>
   </>
  )
}

export default page
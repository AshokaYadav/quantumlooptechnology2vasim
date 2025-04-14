import React from 'react'
import Navbar from '../../components/common/Navbar'
import Footer from '../../components/common/Footer'
import Hero from './components/Hero'
import FAQ from '../../components/sections/FAQ';
import ContactSection from './components/ContactSection';
import ContactSection1 from './components/ContactSection1';

const page = () => {
  return (
   <>
   <Navbar/>
   <Hero/>
   <FAQ/>
   <ContactSection/>
   <ContactSection1/>
   <Footer/>
   </>
  )
}

export default page
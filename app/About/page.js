import React from 'react';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import Hero from './components/Hero'
import VisionMission from './components/VisionMission';
import Team from './components/Team';
import CoreValues from './components/CoreValues';
import Partners from './components/Partners';
import JoinTeam from './components/JoinTeam';

const About = () => {
  return (
   <>
         <Navbar />
         <Hero />
         <VisionMission/>
         <Team/>
         <CoreValues/>
         <Partners/>
         <JoinTeam/>
        < Footer />
   </>
  )
}

export default About
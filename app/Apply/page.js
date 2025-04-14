'use client'
import { useState } from "react";
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer'
import FormComponent from './components/FormComponent';

export default function Apply() {
  
  return (
    <div
    className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/0a/f7/74/0af7741991985e2b530c8f62135c3eea.jpg')",
        
      }}
    >
      <Navbar />

      <FormComponent/>

      <Footer />
    </div>
  );
}

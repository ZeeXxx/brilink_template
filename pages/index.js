import React, { useState } from 'react'
import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Tarif from "../components/tarif.js";

export default function Home() {
  const [login, setLogin] = useState(false)

  function goToLogin(val){
    if (val == true) {
      setLogin(true)
    }
  }
  return (
    <>
      
      <Navbar />
      {
        !login ?
          <Tarif goToLogin={(val)=>goToLogin(val)}/>
        :
          <Hero />

      }
      <Footer />
    </>
  );
}
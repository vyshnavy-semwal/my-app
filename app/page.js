'use client'

import About from "./components/About";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Faq from "./components/Faq";

export default function Home() {
  return (
   <>
   <Navbar/>
   <Header/>
   <About/>
   <Services/>
   <Contact/>
   <Faq/>
 <  Footer/>
 
   </>
     
  );
}

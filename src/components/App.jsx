import React from "react";
import Header from "./header/Header";
import Navbar from "./navbar/Navbar"
import About from "./about/About";
import Experience from "./experience/Experience";
import Service from "./service/Service";
import Portfolio from "./portfolio/Portfolio";
import Testimonials from "./testimonials/Testimonials";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";


export default function App() {
  return (
    <div>
        <Header/>
        <Navbar/>
        <About/>
        <Experience/>
        <Service/>
        <Portfolio/>
        <Testimonials/>
        <Contact/>
        <Footer/>
    </div>
  )
}

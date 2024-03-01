import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/packages";
import { About } from "./components/about";
import { Process } from "./components/process";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Contact } from "./components/contact";
import JsonData from "../src/data/content.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  document.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 15) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove(['scrolled']);
    }
  })

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={
          <>
            <Header data={landingPageData["Hero"]} />
            <Features data={landingPageData["Packages"]} />
            <Testimonials data={landingPageData.Testimonials} />
            <Gallery data={landingPageData.Gallery} />
            <Process data={landingPageData["Process"]} />
          </>
        } />
        <Route path="/about" element={
          <>
            <About data={landingPageData["About-Us"]} />
            {/* Blog */}
          </>
        } />
      </Routes>
      <Contact data={landingPageData.Contact} />
    </Router>
  );
};

export default App;

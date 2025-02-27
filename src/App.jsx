import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/Home/Hero";
import About from "./components/home/About";
import Rooms from "./components/home/Rooms";
import Services from "./components/Home/Services";
import BookRoom from "./components/home/BookRoom";
import Testimonial from "./components/home/Testimonial";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </>
  );
};

const Home = () => (
  <>
    <Hero />
    <BookRoom />
    <About />
    <Rooms />
    <Services />
    <Testimonial />
  </>
);

export default App;

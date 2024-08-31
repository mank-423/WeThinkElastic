import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import VideoSlider from './components/videoSlider/videoSlider'
import About from './components/About/About'
import Collage from './components/collage/Collage'
import Parallax from './components/Prallax/Parallax'
import LocomotiveScroll from 'locomotive-scroll';
import Brands from './components/Brands/Brands'

const locomotiveScroll = new LocomotiveScroll();


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <VideoSlider />
      <About />
      <Collage />
      <Parallax />
      <Brands />
    </div>
  )
}

export default App

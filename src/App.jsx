import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import About from './components/About/About';
import Collage from './components/collage/Collage';
import Parallax from './components/Prallax/Parallax';
import Brands from './components/Brands/Brands';
import Business from './components/Business/Business';
import Footer from './components/Footer/Footer';
import { useGSAP } from '@gsap/react';

const App = () => {
  const [lastY, setLastY] = useState(0);
  const [isFixed, setIsFixed] = useState(false);
  const cursorRef = useRef();

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentY = window.scrollY;

  //     if (currentY > lastY) {
  //       gsap.to('nav', {
  //         y: 0, 
  //         opacity: 1,
  //         duration: 1.2,
  //         ease: 'power1.out',
  //       });
  //       setIsFixed(false); 
  //     } else {
  //       setIsFixed(true); 
  //       gsap.to('nav', {
  //         y: 0, 
  //         opacity: 1,
  //         duration: 1.2,
  //         ease: 'power1.out',
  //       });
  //     }

  //     setLastY(currentY);
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [lastY]);

  useEffect(() => {
    // Handle cursor movement
    const handleMouseMove = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX - cursorRef.current.clientWidth / 2,
        y: e.clientY - cursorRef.current.clientHeight / 2,
        duration: 0.2,
        delay: 0.1,
        ease: 'back.out',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div
        id='cursor'
        ref={cursorRef}
        className='fixed w-5 h-5 bg-white rounded-full pointer-events-none z-10'
      >
      </div>
      <Navbar isFixed={isFixed} />
      <Hero isFixed={isFixed}/>
      <About />
      <Collage />
      <Parallax />
      <Brands />
      <Business />
      <Footer />
    </div>
  );
};

export default App;

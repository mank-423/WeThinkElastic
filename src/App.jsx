import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import About from './components/About/About';
import Collage from './components/collage/Collage';
import Parallax from './components/Prallax/Parallax';
import Brands from './components/Brands/Brands';
import Business from './components/Business/Business';
import Footer from './components/Footer/Footer';

const App = () => {
  const [lastY, setLastY] = useState(0);
  const [isFixed, setIsFixed] = useState(false);

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastY) {
        gsap.to('nav', {
          y: 0, 
          opacity: 1,
          duration: 1.2,
          ease: 'power1.out',
        });
        setIsFixed(false); 
      } else {
        setIsFixed(true); 
        gsap.to('nav', {
          y: 0, 
          opacity: 1,
          duration: 1.2,
          ease: 'power1.out',
        });
      }

      setLastY(currentY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastY]);

  return (
    <div>
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

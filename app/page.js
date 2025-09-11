'use client';
import Navbar from './components/navbar';
import Landing from './components/landing';
import About from './components/about';
import Donate from './components/donate';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
      mirror: true,
    });
  }, []);
  return (
    <div>
      <Navbar className="relative z-50" />
      <span className="square square-1"></span>
      <span className="square square-2"></span>
      <Landing />
      <About />
      <Donate />
    </div>
  );
}

'use client';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import AboutMe from '@/components/AboutMe';
import Top from '../components/Top';
import MySkills from '../components/MySkills';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import Tools from '@/components/Tools';
import ContactForm from '../components/ContactForm';
import Connect from '@/components/Connect';
import Foundation from '@/components/Foundation';
import Hosting from '@/components/Hosting';
import Cloud from '@/components/Cloud';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { ParticleBackground } from '@/components/ParticlesBackground';
import { CustomCursor } from '@/components/CustomCursor';

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      AOS.init({
        duration: 1500,
        once: false,
      });
    }
  }, []);

  return (
    <main 
    className="w-full text-gray-300 px-4 relative"
    >
      {/* Particle Background */}
      {/* <div className="absolute inset-0 -z-10"> */}
        <ParticleBackground />
      {/* </div> */}

      {/* Custom Cursor */}
      <CustomCursor />

      {/* Main Content */}
      <div className="max-w-screen-xl mx-auto lg:pt-10 relative z-10">
        <Top />
        <AboutMe />
        <Tools />
        <Hosting />
        <Cloud />
        <Foundation />
        <MySkills />
        <Projects />
        <ContactForm />
        <ToastContainer />
        <Connect />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}

// import AboutMe from '@/components/AboutMe';
// import Top from '../components/Top'
// import MySkills from '../components/MySkills'
// import Projects from '../components/Projects'
// import '../globals.css';
// import Tools from '@/components/Tools';
// import ContactForm from '../components/ContactForm'
// import Connect from '@/components/Connect';
// import { useEffect } from 'react';
// import 'aos/dist/aos.css';



// import AOS from 'aos';

// export default function Home({ Component, pageProps }) {

//     useEffect(() => {
//       AOS.init({
//         duration: 1000,
//       });
//     }, []);

  


//   return (
   

//     <main className="w-full bg-gray-950 text-gray-300 px-4">
//      <div className="max-w-screen-xl mx-auto lg:pt-10">

//     <Top />
//     <AboutMe/>
//     <Tools />
//     <MySkills/>
//     <Projects/>
//     <ContactForm/>
//     <Connect/>

//      </div>

//      <Component {...pageProps} />
//     </main>
//   );  
// }
'use client'
import {useEffect} from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import AboutMe from '@/components/AboutMe';
import Top from '../components/Top';
import MySkills from '../components/MySkills';
import Projects from '../components/Projects';
import Footer from '../components/Footer'
import Tools from '@/components/Tools';
import ContactForm from '../components/ContactForm';
import Connect from '@/components/Connect';
import Networking from '@/components/Networking'
import Hosting from '@/components/Hosting'
import Cloud from '@/components/Cloud';


export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      AOS.init({
        duration: 1500,
        once:false,
      });
    }
  }, []);

  return (
    <main className="w-full bg-black text-gray-300 px-4 "data-aos="fade-up" data-duration='[1s]'>
      <div className="max-w-screen-xl mx-auto lg:pt-10">
        <Top />
        <AboutMe />
        <Tools />
        <Hosting/>
        <Cloud/>
        <Networking/>
        <MySkills />
        <Projects />
        <ContactForm />
        <Connect />
      </div>
      <Footer/>
    </main>
  );
}


import AboutMe from '@/components/AboutMe';
import Top from '../components/Top'
import MySkills from '../components/MySkills'
import Projects from '../components/Projects'
import Tools from '@/components/Tools';
import ContactForm from '../components/ContactForm'
import Connect from '@/components/Connect';

export default function Home() {
  return (
    <main className="w-full bg-gray-900 text-gray-300 px-4">
     <div className="max-w-screen-xl mx-auto lg:pt-10">
    <Top />
    <AboutMe/>
    <Tools />
    <MySkills/>
    <Projects/>
    <ContactForm/>
    <Connect/>

     </div>
    </main>
  );  
}
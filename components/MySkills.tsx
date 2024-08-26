
// import SkillsContainer from './SkillsContainer'
import {SiJavascript} from 'react-icons/si'
import { GiSkills } from "react-icons/gi";
import Title from "./Title";
import SkillsContainer from './SkillsContainer';
// import SkillsInput from "./SkillsInput";


const MySkills = () => {
  // return (
  //   <div className='wrapper space-y-10'>
  //     <Title text={'Skills'} />
  //     <div className='grid grid-cols-3 gap-6 md:grid-cols-4 lg:grid-cols-6 gap-20 place-items-center ml-8 mr-8'>
  //       <div className='text-yellow-500 rounded cursor-pointer hover:text-opacity-70 duration-300 '>
  //       <SkillsContainer 
  //       link='https://developer.mozilla.org/en-US/docs/Web/JavaScript'
  //       skilled={'JavaScript'} 
  //       icon={<SiJavascript/>}/>
  //       </div>
  //     <div className='text-yellow-500 rounded cursor-pointer '>
  //       <SkillsContainer link=''
  //       skilled={'JavaScript'} 
  //       icon={<SiJavascript/>}/>
  //     </div>
  //     <div className='text-yellow-500 rounded cursor-pointer '>
  //       <SkillsContainer 
  //       link='' 
  //       skilled={'JavaScript'} 
  //       icon={<SiJavascript/>}/>
  //     </div>
  //     <div className='text-yellow-500 rounded cursor-pointer '>
  //       <SkillsContainer 
  //       link='' 
  //       skilled={'JavaScript'}
  //       icon={<SiJavascript/>}/>
  //     </div>
  //     <div className='text-yellow-500 rounded cursor-pointer'>
  //       <SkillsContainer 
  //       link='' 
  //       skilled={'JavaScript'} 
  //       icon={<SiJavascript/>}/>
  //     </div>
  //     <div className='text-yellow-500 rounded cursor-pointer '>
  //       <SkillsContainer 
  //       link='' 
  //       skilled={'JavaScript'} 
  //       icon={<SiJavascript/>}/>
  //     </div>
  //     </div>
  //   </div>
  // )
    
    return (
      <div className="wrapper" data-aos='fade-right'>
        <Title text="Skills" icon={<GiSkills />} />
        <div className="flex gap-4 flex-wrap">
          <SkillsContainer
            title="Javascript"
            link=""
          />
          <SkillsContainer title="Reactjs" link="" />
          <SkillsContainer title="Nextjs" link="" />
          <SkillsContainer title="Nodejs" link="" />
          <SkillsContainer
            title="Typescript"
            link=""
          />
          <SkillsContainer title="Expressjs" link="" />
          <SkillsContainer title="Redux Toolkit" link="" />
          <SkillsContainer title="MongoDB" link="" />
          <SkillsContainer
            title="Google Firebase"
            link=""
          />
          <SkillsContainer title="Tailwindcss" link="" />
          <SkillsContainer title="Sanity.io" link="" />
          <SkillsContainer
            title="HTML5"
            link=""
          />
          <SkillsContainer
            title="CSS3"
            link=""
          />
          <SkillsContainer title="Azure" link="" />
          <SkillsContainer
            title="AWS"
            link=""
          />
          <SkillsContainer title="Git" link="" />
          <SkillsContainer title="Github" link="" />
          <SkillsContainer title="" link="" />
          <SkillsContainer title="Python" link="" />
          <SkillsContainer title="UI Design" link="" />
          <SkillsContainer title="Figma" link="" />
          <SkillsContainer title="Canva" link="" />
          <SkillsContainer
            title="Adobe"
            link=""
          />
          <SkillsContainer title="Brand & LogoDesign" link="" />
          <SkillsContainer title="Website Design" link="" />
          <SkillsContainer title="Vercel" link="" />
          <SkillsContainer title="netlify" link="" />
          <SkillsContainer title="GSAP" link="" />
          <SkillsContainer title="Framer Motion" link="" />
          <SkillsContainer title="Three.js " link="" />
        </div>
      </div>
    );
  };
export default MySkills

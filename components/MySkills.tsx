
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
            link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          />
          <SkillsContainer title="Reactjs" link="https://react.dev/" />
          <SkillsContainer title="Nextjs" link="https://nextjs.org/" />
          <SkillsContainer title="Nodejs" link="https://nodejs.org/en" />
          <SkillsContainer
            title="Typescript"
            link="https://www.typescriptlang.org/"
          />
          <SkillsContainer title="Expressjs" link="https://expressjs.com/" />
          <SkillsContainer title="Redux Toolkit" link="" />
          <SkillsContainer title="MongoDB" link="https://www.mongodb.com/" />
          <SkillsContainer
            title="Google Firebase"
            link="https://firebase.google.com/"
          />
          <SkillsContainer title="Tailwindcss" link="https://tailwindcss.com/" />
          <SkillsContainer title="Sanity.io" link="https://www.sanity.io/" />
          <SkillsContainer
            title="HTML5"
            link="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
          />
          <SkillsContainer
            title="CSS3"
            link="https://developer.mozilla.org/en-US/docs/Web/CSS"
          />
          <SkillsContainer title="Azure" link="https://code.visualstudio.com/" />
          <SkillsContainer
            title="AWS"
            link="https://github.blog/2022-06-08-sunsetting-atom/"
          />
          <SkillsContainer title="Git" link="https://git-scm.com/" />
          <SkillsContainer title="Github" link="https://github.com/" />
          <SkillsContainer title="" link="https://trello.com/en" />
          <SkillsContainer title="Python" link="https://www.gitkraken.com/" />
          <SkillsContainer title="UI Design" link="https://www.figma.com/" />
          <SkillsContainer title="Figma" link="https://www.figma.com/" />
          <SkillsContainer title="Canva" link="https://www.canva.com/" />
          <SkillsContainer
            title="Adobe"
            link="https://www.adobe.com/products/illustrator/free-trial-download.html"
          />
          <SkillsContainer title="Brand & LogoDesign" link="https://dribbble.com/" />
          <SkillsContainer title="Website Design" link="https://themeforest.net/" />
          <SkillsContainer title="Vercel" link="https://vercel.com/" />
          <SkillsContainer title="netlify" link="https://www.netlify.com/" />
        </div>
      </div>
    );
  };
  
  







export default MySkills

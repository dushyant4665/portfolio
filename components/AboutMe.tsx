import Title from './Title'
import { SiInformatica } from "react-icons/si";





const AboutMe=()=>{
  return (
    <div className='wrapper' data-aos="fade-in" >
     <Title text='About Me' icon={<SiInformatica className='text-white'/>}/>
   
      <div className='text-lg tracking-wide flex flex-col gap-5' data-aos="fade-in">
        <p>
      I am a web developer who loves creating easy-to-use and mobile-friendly websites. I work with React.js and Next.js to build cool web apps. I also connect these apps to REST APIs and make sure they look good on all devices.

I use tools like Webpack, npm, and Git to make my work faster and better. Lately, I ve been learning about Machine Learning to try new things and solve harder problems.

I like working with teams, learning new stuff, and taking on fun challenges. My aim is to make websites that people enjoy using!
        </p>
      
      </div>
    </div>
  )
}

export default AboutMe

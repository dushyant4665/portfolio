import Title from './Title'
import { SiInformatica } from "react-icons/si";





const AboutMe = () => {
  return (
    <div className='wrapper' data-aos="fade-in" >
     <Title text='About Me' icon={<SiInformatica className='text-white'/>}/>
   
      <div className='text-lg tracking-wide flex flex-col gap-5' data-aos="fade-in">
        <p>
       Im a web developer with solid experience in React.js and Next.js, specializing in building and optimizing user-friendly, responsive web applications. My expertise spans front-end development and backend-as-a-service integration, with a strong track record in crafting and maintaining single-page applications, seamlessly integrating REST APIs, and ensuring responsive, mobile-first designs.

I am proficient in leveraging tools like Webpack, npm, and Git for efficient development and deployment processes. Beyond my core technical skills, I am also expanding my knowledge in Machine Learning, enhancing my ability to tackle complex challenges.

I thrive in collaborative environments, working effectively with cross-functional teams, and Im always ready to take on new challenges, adapt to emerging technologies, and deliver high-quality solutions.
        {/* <p data-aos="fade-right">
        I am always looking to improve my skills and stay up-to-date with the latest best practices in web development. I am excited to continue growing as a developer and making meaningful contributions to projects and teams.
        </p> */}
      </div>
    </div>
  )
}

export default AboutMe

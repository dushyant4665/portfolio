import Title from './Title'
import { SiInformatica } from "react-icons/si";





const AboutMe = () => {
  return (
    <div className='wrapper' data-aos="fade-in" >
     <Title text='About Me' icon={<SiInformatica className='text-white'/>}/>
   
      <div className='text-lg tracking-wide flex flex-col gap-5' data-aos="fade-in">
        <p>
        I am a web developer having a good experience in ReactJs and NextJs . I have a strong foundation in front-end & backend-as-a-service development and I am skilled in creating user-friendly and responsive web applications using React and its ecosystem. I have experience working on a variety of projects, including building and maintaining single page applications, integrating with REST APIs, and implementing responsive design principles. I am also proficient in using tools such as Webpack, npm, and Git for development and deployment. In addition to my technical skills, I am currently outscaling Machine Learning.I am able to work effectively with cross-functional teams and am comfortable taking on new challenges and learning new technologies as needed.
        </p>
        {/* <p data-aos="fade-right">
        I am always looking to improve my skills and stay up-to-date with the latest best practices in web development. I am excited to continue growing as a developer and making meaningful contributions to projects and teams.
        </p> */}
      </div>
    </div>
  )
}

export default AboutMe

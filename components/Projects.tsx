import React from 'react'
import Title from './Title'
import projectIMG1 from '../images/projectIMG1.png'
import ProjectsContainer from './ProjectsContainer'

const Project = () => {
  return (
    <div className='wrapper' data-aos="fade-in"
    data-duration='2000'>
       <Title text={'Projects'}/>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center'>
         <ProjectsContainer
              img={projectIMG1.src} 
              link={'https://crispshoppingdushyant.vercel.app/'}
              text='Full Stack MERN Ecommerce Web App with Firbase Google Authentication And Stripe Payment Gateway Feature'/>
            
         </div>  
    </div>
  )
} 
export default Project

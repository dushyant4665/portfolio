import React from 'react'
import Title from './Title'
import amazonClone from '../images/amazonClone.webp'
import ProjectsContainer from './ProjectsContainer'

const Project = () => {
  return (
    <div className='wrapper'>
       <Title text={'Projects'}/>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center'>
         <ProjectsContainer 
              img={amazonClone.src} 
              link={''}
              text='Full Stack Amazon Clone with signIn & signUp feature redux-toolkit for Add to cart feature'/>
             <ProjectsContainer
              img={amazonClone.src} 
              text='Full Stack Amazon Clone with signIn & signUp feature redux-toolkit for Add to cart feature'/>
               <ProjectsContainer 
              img={amazonClone.src} 
              text='Full Stack Amazon Clone with signIn & signUp feature redux-toolkit for Add to cart feature'/>
               <ProjectsContainer 
              img={amazonClone.src} 
              text='Full Stack Amazon Clone with signIn & signUp feature redux-toolkit for Add to cart feature'/>
               <ProjectsContainer 
              img={amazonClone.src} 
              text='Full Stack Amazon Clone with signIn & signUp feature redux-toolkit for Add to cart feature'/>
               <ProjectsContainer 
              img={amazonClone.src} 
              text='Full Stack Amazon Clone with signIn & signUp feature redux-toolkit for Add to cart feature'/> 
         </div>  
    </div>
  )
} 
export default Project

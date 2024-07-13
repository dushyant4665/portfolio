import React from 'react'
import ConnectContainer from './ConnectContainer'


const Connect = () => {
  return (
    <div className='wrapper '>
     <div className='max-w-5xl mx-auto flex flex-col gap-4 items-center justify-center'>
     <h2 className='text-2xl font-bold text-center '>Let us create awesome products!</h2>
      <p className='text-lg tracking-wide font-medium text-center'>
        I am always open to discussing your project, improving your online presence, or helping with Your website design and converting challenges  
      </p>
      <a 
      href="https://mail.google.com/mail/u/0/?fs=1&to=dushyantkhandelwal4665@gmail.com&tf=cm"target='_blank'> <button 
      className='w-52 h-14 bg-gradient-to-r from-indigo-700 via-blue-800 to-indigo-900 rounded-lg text-md font-bold text-white  bg-gradient-to-r hover:from-indigo-800 via-blue-900  to-indigo-950 duration-500'>
        Connect</button></a>
     </div>

    <div className='mt-10 flex justify-center flex-wrap gap-12'>
<ConnectContainer 
     link='https://github.com/dushyant4665'
     socialText='Github'/>

<ConnectContainer 
     link='https://x.com/dushyant4665'
     socialText='Twitter'/>

<ConnectContainer 
     link='https://www.linkedin.com/in/dushyant-khandelwal-516319221/'
     socialText='LinkedIn'/>
     
<ConnectContainer 
     link='https://YouTube.com/dushyant4665'
     socialText='YouTube'/>

<ConnectContainer 
     link='https://facebook.com/'
     socialText='Facebook'/>
     
    </div>

    <h4 className=''></h4>
    </div>
  )
}

export default Connect

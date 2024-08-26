import React from 'react'

const CloudContainer = ({title,icon}:props) => {
    return (
   
    <div>
    <div className='items-center gap-8'>
      <span className='w-12 h-12 rounded-full  flex items-center justify-center text-5xl'> {icon}</span>
      <a href="">
      <p className='text-lg font-semibold text-gray-400'>{title}</p>
      </a>
    </div>
</div> 
    )

  }

export default CloudContainer

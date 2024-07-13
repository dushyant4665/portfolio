import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";

const ConnectContainer = ({socialText,link}:props) => {
  return (
    <div>
      <a href={link} 
       className='flex items-center justify-center gap-1 text-xl text-gray-400 font-semibold group'>
        <p className='group-hover:text-white'>{socialText}</p>
        <FiArrowUpRight className='translate-x-0 translate-y-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-100'/>
     </a>
    </div>
  )
}

export default ConnectContainer

import React from 'react'

const NetworkingContainer = ({title,link}:props) => {
  return (
    <div>
      <a href={link} target="_blank" data-aos='fade-right'>
    <p className="border border-blue-800 px-6 py-2 text-lg tracking-wide bg-transparent text-gray-400 hover:text-white hover:border-blue-600 hover:bg-black rounded-lg duration-300">
      {title}
    </p>
  </a>
    </div>
  )
}

export default NetworkingContainer
import React from 'react';


interface Props {
  title: string;
  link: string;
}

const NetworkingContainer:React.FC<Props>=({title,link})=>{
  return(
    <a href={link} target="_blank" rel="noopener noreferrer" data-aos='fade-right'>
      <p className="border border-blue-800 px-6 py-2 text-lg tracking-wide bg-transparent text-gray-400 hover:text-white hover:border-blue-600 hover:bg-black rounded-lg transition duration-300">
        {title}
      </p>
    </a>
  );
}

export default NetworkingContainer;

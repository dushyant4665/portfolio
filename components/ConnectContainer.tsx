import React from 'react';
import { FiArrowUpRight } from "react-icons/fi";

// Define the props interface
interface ConnectContainerProps {
  socialText: string;
  link: string;
}

const ConnectContainer: React.FC<ConnectContainerProps> = ({ socialText, link }) => {
  return (
    <div>
      <a 
        href={link} 
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-1 text-xl text-gray-400 font-semibold group"
      >
        <p className="group-hover:text-white">{socialText}</p>
        <FiArrowUpRight className="translate-x-0 translate-y-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-100" />
      </a>
    </div>
  );
};

export default ConnectContainer;

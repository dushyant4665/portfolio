import React from 'react';

interface CloudContainerProps {
  title: string;
  icon: React.ReactNode; 
}

const CloudContainer: React.FC<CloudContainerProps> = ({ title, icon }) => {
  return (
    <div className="flex items-center gap-2"> 
      <span className="w-12 h-12 rounded-full flex items-center justify-center text-5xl">
        {icon}
      </span>
      <a href="#" className="text-lg font-semibold text-gray-400 hover:text-gray-600">
        {title}
      </a>
    </div>
  );
};

export default CloudContainer;

import React from 'react';

interface HostingContainerProps {
  title: string;
  icon: React.ReactNode; 
}

const HostingContainer: React.FC<HostingContainerProps> = ({ title, icon }) => {
  return (
    <div>
      <div className='items-center gap-2 flex'>
        <span className='w-12 h-12 rounded-full flex items-center justify-center text-5xl'>
          {icon}
        </span>
        <p className='text-lg font-semibold text-gray-400'>
          {title}
        </p>
      </div>
    </div>
  );
};

export default HostingContainer;

import React from 'react';

// Define the props interface
interface HostingContainerProps {
  title: string;
  icon: React.ReactNode; // Assuming `icon` is a React component or an element
}

const HostingContainer: React.FC<HostingContainerProps> = ({ title, icon }) => {
  return (
    <div>
      <div className='items-center gap-8 flex'>
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

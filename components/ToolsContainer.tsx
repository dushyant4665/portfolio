import React from 'react';

// Define the props interface
interface Props {
  title: string;
  icon: React.ReactNode;
}

const ToolsContainer: React.FC<Props> = ({ title, icon }) => {
  return (
    <div className="flex items-center gap-2">
      <span className="w-12 h-12 rounded-full flex items-center justify-center text-5xl">
        {icon}
      </span>
      <a href="#" className="text-lg font-semibold text-gray-400 hover:text-gray-200 transition-colors">
        {title}
      </a>
    </div>
  );
}

export default ToolsContainer;

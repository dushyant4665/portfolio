import React from 'react';
import ConnectContainer from './ConnectContainer';

const Connect = () => {
  return (
    <div className="wrapper" data-aos="fade-in">
      <div className="max-w-5xl mx-auto flex flex-col gap-4 items-center justify-center text-center">
        <h2 className="text-2xl font-bold">
          Let us create awesome products!
        </h2>
        <p className="text-lg tracking-wide font-medium">
          I am always open to discussing your project, improving your online presence, optimizing your web infrastructure, or simply connecting with like-minded professionals. I'm here to help!
        </p>
        <a 
  href="mailto:dushyantkhandelwal4665@gmail.com?subject=Let%27s%20Connect" 
  target="_blank" 
  rel="noopener noreferrer"
  className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-red-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
>
  Connect
</a>


      </div>

      <div className="mt-10 flex justify-center flex-wrap gap-12">
        <ConnectContainer 
          link="https://github.com/dushyant4665"
          socialText="GitHub"
        />
        <ConnectContainer 
          link="https://x.com/dushyant4665"
          socialText="Twitter"
        />
        <ConnectContainer 
          link="https://www.linkedin.com/in/dushyant-khandelwal-516319221/"
          socialText="LinkedIn"
        />
        <ConnectContainer 
          link="https://YouTube.com/dushyant4665"
          socialText="YouTube"
        />
        <ConnectContainer 
          link="https://facebook.com/"
          socialText="Facebook"
        />
      </div>
    </div>
  );
};

export default Connect;

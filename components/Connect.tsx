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
          I am always open to discussing your project, optimizing your web infrastructure, simply connect with like-minded professionals. I am here to help!
        </p>
      
   <a href="mailto:dushyantkhandelwal4665@gmail.com?subject=Let%27s%20Connect">
          <button className="w-52 h-14 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-950 text-xl font-bold text-white rounded-lg hover:from-indigo-950 hover:to-blue-600 duration-300">
            Connect
          </button>
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
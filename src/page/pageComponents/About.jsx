import React from 'react';

const About = () => {
  return (
        <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 p-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
          Coming Soon
        </h1>
        
        <div className="h-px w-24 bg-gray-400 dark:bg-gray-600 mx-auto my-8"></div>
        
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10">
          We're working on something exciting. Stay tuned for updates!
        </p>
        
        <p className="text-gray-500 dark:text-gray-400">
          Contact us at <span className="text-indigo-600 dark:text-indigo-400">hello@example.com</span>
        </p>
      </div>
    </div>
  );
};

export default About;
import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between py-8 px-6 sm:px-12 lg:px-28 bg-blue-100 lg:space-x-20">
      {/* Left Section */}
      <div className="w-full lg:w-2/3 mb-8 lg:mb-0">
        <h1 className="text-3xl lg:text-4xl font-bold text-blue-700 mb-6 text-center lg:text-left">About Me</h1>
        <p className="text-lg leading-relaxed text-gray-700 mb-6 text-center lg:text-left">
          
        </p>
        <div className="text-gray-700 text-center lg:text-left">
          <h2 className="text-xl font-semibold mb-2">Contact Me</h2>
          <p>Email: <a href="mailto:dani@example.com" className="text-blue-500 hover:underline">dani@example.com</a></p>
          <p>ID: DaniBlogs123</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/3 flex justify-center items-center mt-10 lg:mt-0">
        <Image
          src="/profile.png"
          alt="Dani Profile Picture"
          width={550}
          height={500}
          className="border-4 border-blue-500 shadow-lg w-full max-w-xs lg:max-w-none"
        />
      </div>
    </div>
  );
};

export default About;
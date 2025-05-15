import React from 'react';
import guyImage from "../../assets/undraw_feeling-proud_tdos.svg"; 

const SuccessStoru = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-[#4f46e5] text-white px-6 py-10">
      
      {/* Left Image */}
      <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
        <img
          src={guyImage}
          alt="Smiling Guy"
          className="max-w-[280px] md:max-w-[400px] lg:max-w-[450px]"
        />
      </div>

      {/* Right Text */}
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Get Matched The Most <br />
          Valuable Jobs, Just Email Your CV at <span className='bg-gradient-to-r from-purple-300 to-pink-500 bg-clip-text text-transparent'>www.jobtrac@gmail.com</span>
        </h1>
        <p className="text-sm md:text-base text-gray-200 max-w-md mx-auto md:mx-0">
          In the subject line of your email, write your name, the description
          of the position and its reference number. If you did not find the
          vacancy on the employer’s website,
        </p>
      </div>
    </div>
  );
};

export default SuccessStoru;

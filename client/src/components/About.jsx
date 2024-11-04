import React from 'react';
import babyPic from '../Photos/baby_pic.jpg';

const About = () => {
  return (
    <div id="about" className="w-full min-h-screen flex items-center justify-center bg-[#92AFD7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
        <div className="w-full lg:w-1/2 text-left mb-8 lg:mb-0">
          <h2 className="text-white text-4xl font-bold mb-6">
            About me
          </h2>
          <p className="text-white/80 text-lg">
            Greetings! I'm Zachary Chapman, a programmer and gaming enthusiast who recently embarked on the adventure of parenthood. When I'm not crafting code solutions, you'll find me exploring virtual worlds or navigating the exciting challenges of being a new dad.
          </p>
        </div>
        <div className="w-full lg:w-1/2 lg:pl-8">
          <img
            src={babyPic}
            alt="Baby picture"
            className="w-full h-80 lg:h-96 object-cover rounded-lg shadow-xl"
            style={{
              objectPosition: '70% 0%'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
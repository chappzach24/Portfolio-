import React from 'react';
import babyPic from '../Photos/baby_pic.jpg';

const About = () => {
  return (
    <div id="about" className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div className="pt-1" />

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h2 className="my-6 text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
                About me
              </h2>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto lg:mx-0">
                Greetings! I'm Zachary Chapman, a programmer and gaming enthusiast who recently embarked on the adventure of parenthood. When I'm not crafting code solutions, you'll find me exploring virtual worlds or navigating the exciting challenges of being a new dad.
              </p>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          src={babyPic}
          alt="Baby picture"
          className="h-80 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full fixed-image"
          style={{
            objectPosition: '70% 0%'
          }}
        />
      </div>
    </div>
  );
};

export default About;
import React from 'react';
import babyPic from '../Photos/baby_pic.jpg';

const ProjectCard = ({ title, description, image, languages, githubLink }) => {
  return (
    <div className="w-full transform-gpu transition-all duration-500 hover:-translate-y-2 hover:rotate-1">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg hover:shadow-white/30 transition-all duration-500">
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
        
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-3 text-white font-orbitron">
            {title}
          </h2>
          
          <p className="text-white/80 mb-4">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {languages.map((lang, index) => (
              <span
                key={index}
                className="flex items-center gap-1 px-3 py-1 rounded-full bg-white/20 text-white text-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-white/30"
              >
                <i className={`fab fa-${lang.icon}`}></i>
                {lang.name}
              </span>
            ))}
          </div>
          
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-full font-bold uppercase tracking-wider text-[#92AFD7] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-white/30"
          >
            <i className="fab fa-github mr-2"></i>
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS, featuring smooth animations and a clean design.",
      image: babyPic,
      languages: [
        { name: "React", icon: "react" },
        { name: "Reacts", icon: "react" },
        { name: "Tailwind", icon: "css3-alt" },
        { name: "JavaScript", icon: "js" }
      ],
      githubLink: "https://github.com/your-username/portfolio"
    },
    {
      title: "Personal Portfolio",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS, featuring smooth animations and a clean design.",
      image: babyPic,
      languages: [
        { name: "React", icon: "react" },
        { name: "Reacts", icon: "react" },
        { name: "Tailwind", icon: "css3-alt" },
        { name: "JavaScript", icon: "js" }
      ],
      githubLink: "https://github.com/your-username/portfolio"
    },
    {
      title: "Personal Portfolio",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS, featuring smooth animations and a clean design.",
      image: babyPic,
      languages: [
        { name: "React", icon: "react" },
        { name: "Tailwind", icon: "css3-alt" },
        { name: "JavaScript", icon: "js" }
      ],
      githubLink: "https://github.com/your-username/portfolio"
    },
   
  ];

  return (
    <div className="min-h-screen w-full bg-[#92AFD7] py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-12 text-center">
          My Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
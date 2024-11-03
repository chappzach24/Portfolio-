import React from 'react';
import babyPic from '../Photos/baby_pic.jpg';

const ProjectCard = ({ title, description, image, languages, githubLink }) => {
  return (
    <div className="w-full transform-gpu transition-all duration-500 hover:-translate-y-2 hover:rotate-1">
      <div className="bg-opacity-80 backdrop-blur-lg bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-500/50 transition-all duration-500">
        <div className="relative overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
        
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-3 text-cyan-400 font-orbitron">
            {title}
          </h2>
          
          <p className="text-gray-300 mb-4">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {languages.map((lang, index) => (
              <span 
                key={index}
                className="flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 text-white text-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/30"
              >
                <i className={`fab fa-${lang.icon}`}></i>
                {lang.name}
              </span>
            ))}
          </div>
          
          <a
            href={githubLink}
            className="inline-block px-6 py-3 rounded-full font-bold uppercase tracking-wider text-gray-900 bg-gradient-to-r from-cyan-400 to-fuchsia-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/30"
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
      title: "Project One",
      description: "Experience cutting-edge technology and stunning design in this revolutionary project. Prepare to be amazed!",
      image: babyPic,
      languages: [
        { name: "HTML", icon: "html5" },
        { name: "CSS", icon: "css3-alt" },
        { name: "JavaScript", icon: "js" }
      ],
      githubLink: "https://github.com/your-username/project-one"
    },
    {
      title: "Project Two",
      description: "Another amazing project showcasing the latest in web development technologies and design principles.",
      image: babyPic,
      languages: [
        { name: "React", icon: "react" },
        { name: "Node.js", icon: "node" },
        { name: "MongoDB", icon: "database" }
      ],
      githubLink: "https://github.com/your-username/project-two"
    },
    {
      title: "Project Three",
      description: "A sophisticated application demonstrating advanced programming concepts and beautiful UI design.",
      image: babyPic,
      languages: [
        { name: "Python", icon: "python" },
        { name: "Django", icon: "django" },
        { name: "PostgreSQL", icon: "database" }
      ],
      githubLink: "https://github.com/your-username/project-three"
    }
  ];

  return (
    <div className="h-screen w-full overflow-y-auto">
      <div className="container mx-auto px-4 py-16">
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
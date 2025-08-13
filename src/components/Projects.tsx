import React from 'react';
import { ExternalLink, Github, Zap } from 'lucide-react';

export const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Blogverse',
      description: 'A smart task management application that uses machine learning to predict task completion times and suggest optimal scheduling.',
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Javascript', 'MongoDB', 'NodeJs', 'FastAPI','Tailwind CSS'],
      githubUrl: 'https://github.com/Chayan-03/BlogVerse',
      liveUrl: 'https://blogverse-eight.vercel.app/',
      featured: true
    },
    {
      title: 'BrrGrr',
      description: 'Frontend of a custom Burger ordering website made using React , Tailwind, Framer Motion, and ShadCn.',
      image: 'https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'OpenAI API'],
      githubUrl: 'https://github.com/Chayan-03/BrrrGrrr',
      liveUrl: 'https://brrrgrrr-taupe.vercel.app/'
    },
    {
      title: 'E-commerce Analytics Dashboard',
      description: 'A comprehensive analytics dashboard for e-commerce businesses with predictive sales forecasting and customer insights.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'D3.js', 'Python', 'Django', 'Redis'],
      githubUrl: 'https://github.com/yourusername/ecommerce-dashboard',
      liveUrl: 'https://ecommerce-dashboard.herokuapp.com'
    },
    {
      title: 'Voice-Controlled Web App',
      description: 'An innovative web application that responds to voice commands using speech recognition and natural language processing.',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Web Speech API', 'Node.js', 'NLP'],
      githubUrl: 'https://github.com/yourusername/voice-web-app',
      liveUrl: 'https://voice-web-app.vercel.app'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative bg-gray-900/90 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {project.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="flex items-center px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-xs font-semibold">
                    <Zap size={12} className="mr-1" />
                    Featured
                  </span>
                </div>
              )}

              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-800/80 rounded-full text-sm text-cyan-300 border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-300"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 rounded-lg transition-all duration-300"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Chayan-03"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-gray-900/80 backdrop-blur-sm border border-gray-800 hover:border-cyan-500 rounded-lg transition-all duration-300 hover:shadow-lg"
          >
            <Github size={20} className="mr-2" />
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};
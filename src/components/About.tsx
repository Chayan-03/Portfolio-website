import React from 'react';
import { Code, Brain, Zap, Globe } from 'lucide-react';

export const About: React.FC = () => {
  const skills = [
    {
      icon: <Code size={32} />,
      title: 'Full Stack Development',
      description: 'Expert in React, Node.js, Python, and modern web technologies'
    },
    {
      icon: <Brain size={32} />,
      title: 'AI & Machine Learning',
      description: 'Building intelligent applications with TensorFlow, PyTorch, and OpenAI APIs'
    },
    {
      icon: <Zap size={32} />,
      title: 'Performance Optimization',
      description: 'Creating fast, scalable applications with best practices'
    },
    {
      icon: <Globe size={32} />,
      title: 'Cloud & DevOps',
      description: 'Deploying applications on AWS, Docker, and modern CI/CD pipelines'
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-gray-300 text-center leading-relaxed">
            I'm a passionate full stack developer with a deep interest in artificial intelligence and emerging technologies. 
            I love creating innovative solutions that bridge the gap between complex technical challenges and user-friendly experiences. 
            My journey in software development has led me to work with cutting-edge technologies and contribute to projects 
            that make a real impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl"
            >
              <div className="text-cyan-400 mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-white">{skill.title}</h3>
              <p className="text-gray-400">{skill.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap justify-center gap-3">
            {[
              'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'PostgreSQL',
              'MongoDB', 'AWS', 'Docker', 'TensorFlow', 'PyTorch', 'OpenAI API'
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-500/30 text-cyan-300 text-sm hover:border-cyan-400 transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
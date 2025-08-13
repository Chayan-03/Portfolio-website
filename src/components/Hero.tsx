import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, Twitter } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
      
      <div className="container mx-auto px-6 text-center z-10">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in">
            Full Stack Developer
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Passionate about building innovative solutions with cutting-edge technologies, 
            specializing in AI integration and modern web development.
          </p>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <SocialLink href="https://github.com" icon={<Github size={24} />} />
          <SocialLink href="https://linkedin.com" icon={<Linkedin size={24} />} />
          <SocialLink href="https://twitter.com" icon={<Twitter size={24} />} />
          <SocialLink href="mailto:your.email@example.com" icon={<Mail size={24} />} />
        </div>

        <button
          onClick={scrollToAbout}
          className="animate-bounce bg-gradient-to-r from-cyan-500 to-purple-500 p-3 rounded-full hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  );
};

const SocialLink: React.FC<{ href: string; icon: React.ReactNode }> = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 bg-gray-900/80 backdrop-blur-sm rounded-full hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 hover:scale-110 hover:shadow-lg"
  >
    {icon}
  </a>
);
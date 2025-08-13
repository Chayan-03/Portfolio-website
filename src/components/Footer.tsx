import React from 'react';
import { Heart, Github, Linkedin, Twitter, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-gray-800 bg-gray-950">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
              Portfolio
            </div>
            <p className="text-gray-400 text-sm">
              Full Stack Developer & AI Enthusiast
            </p>
          </div>

          <div className="flex items-center space-x-6 mb-6 md:mb-0">
            <a
              href="https://github.com/Chayan-03"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/chayan-khetan-1b9b71222/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://x.com/ChayanKhetan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              <Twitter size={20} />
            </a>
            <a
              href="mailto:chayankhetan36@gmail.com"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              <Mail size={20} />
            </a>
          </div>

          <div className="text-gray-400 text-sm flex items-center">
            <span>Made with</span>
            <Heart size={14} className="mx-1 text-red-500" />
            <span>using React & Tailwind</span>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Your Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
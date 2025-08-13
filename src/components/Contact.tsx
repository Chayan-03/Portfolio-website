import React, { useState } from 'react';
import { Mail, MessageSquare, Send, Github, Linkedin, Twitter } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gray-950">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              I'm always interested in discussing new opportunities, innovative projects, 
              and collaborations. Whether you have a question or just want to say hi, 
              I'll do my best to get back to you!
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Mail className="text-cyan-400 mr-4" size={20} />
                <a 
                  href="mailto:chayankhetan36@gmail.com"
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                >
                  chayankhetan36@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <MessageSquare className="text-cyan-400 mr-4" size={20} />
                <span className="text-gray-300">Available for freelance work</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <a
                href="https://www.github.com/Chayan-03"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-900 hover:bg-gray-800 rounded-lg transition-colors duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/chayan-khetan-1b9b71222/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-900 hover:bg-gray-800 rounded-lg transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://x.com/ChayanKhetan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-900 hover:bg-gray-800 rounded-lg transition-colors duration-300"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900/90 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/80 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-white transition-colors duration-300"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/80 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-white transition-colors duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800/80 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-white transition-colors duration-300 resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105"
              >
                <Send size={16} className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
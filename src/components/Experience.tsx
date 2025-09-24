import React from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';

export const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Robotics Engineer',
      company: 'AICTE IDEA Labs',
      location: 'New Delhi, India',
      period: 'June, 2024 - August, 2024',
      type: 'Internship',
      description: [
        'Developed C++ algorithm for path planning and flight controller optimization in drones, improving efficiency by 14%',
        'Implemented machine learning models for real-time data processing',
        'Collaborated with cross-functional teams to deliver scalable solutions',
        'Integrated sensors and tested navigation algorithms, enhancing drone stability and performance.'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Red Mist Technologies',
      location: 'Remote',
      period: 'September, 2024 - December, 2024',
      type: 'Internship',
      description: [
        'Developed and enhanced frontend UI with ReactJS, and assisted in building a dashboard for users and application monitoring.',
        'Integrated third-party APIs and payment systems',
        'Optimized database queries and improved application performance',
        'Participated in agile development processes and daily standups',
        'Developed REST APIs for user management and role-based access using Node.js,Express and Managed data with PostgreSQL'
      ]
    },
    {
      title: 'Cybersecurity Intern',
      company: 'Defence Research And Development Organisation',
      location: 'New Delhi, India',
      period: 'December, 2024 - Febrauary, 2025',
      type: 'Internship',
      description: [
        ' Analyzed cybersecurity vulnerabilities: SQL Injection, XSS, Broken Access Control, Insecure Deserialization, CSRF, SSRF',
        'Tested vulnerabilities using WebGoat and Kali Linux for robust security assessments.',
        'Implemented mitigation strategies to strengthen application security.'
      ]
    },
    {
      title: 'Software Developer',
      company: 'Institute Of System Design And Analysis',
      location: 'New Delhi, India',
      period: 'June, 2025 - August, 2025',
      type: 'Internship',
      description: [
        'Built mobile-responsive web interfaces using modern JavaScript frameworks',
        'Worked on backend API development using Python and Flask',
        'Collaborated with UX/UI designers to implement pixel-perfect designs',
        'Participated in code reviews and learned best practices'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-gray-950">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Experience
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 to-purple-500 hidden md:block"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 md:ml-16">
                {/* Timeline dot */}
                <div className="absolute -left-20 top-6 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full hidden md:block"></div>

                <div className="bg-gray-900/90 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                      <div className="flex items-center text-cyan-400 mb-2">
                        <Building size={16} className="mr-2" />
                        <span className="font-semibold">{exp.company}</span>
                        <span className="ml-3 px-2 py-1 bg-purple-500/20 rounded-full text-xs">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:text-right text-gray-400">
                      <div className="flex items-center mb-1">
                        <Calendar size={16} className="mr-2" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 text-gray-300">
                    {exp.description.map((desc, descIndex) => (
                      <li key={descIndex} className="flex items-start">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

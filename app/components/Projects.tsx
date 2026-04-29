'use client';

import { motion } from 'motion/react';
import { MdOpenInNew, MdCode } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Justcv.me',
    year: '2024',
    stack: ['React.js', 'Tailwind', 'Zustand'],
    desc: 'Leading platform for publishing resumes. Sliced designs and integrated APIs with smooth state management.',
  },
  {
    title: 'Wibuverse',
    year: '2022',
    stack: ['Next.js', 'Material UI', 'Redux'],
    desc: 'The ultimate space for wibus. High-energy interface for content discovery and community interaction.',
  },
  {
    title: 'GBSystem',
    year: '2021',
    stack: ['React Native', 'Axios', 'Material UI'],
    desc: 'Admin dashboard for Amora Photo. A robust system for data handling and internal management.',
  },
  {
    title: 'The Reptile',
    year: '2020',
    stack: ['Node.js', 'Express', 'MySQL', 'React.js'],
    desc: 'Full-stack application for reptile enthusiasts. API development and UI implementation from scratch.',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-12 md:py-20 px-4 md:px-6 bg-comic-paper" aria-label="Project Portfolio">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 md:mb-16">
          <motion.div
            initial={{ rotate: -2 }}
            whileInView={{ rotate: 1 }}
            className="inline-block bg-comic-black text-white px-4 md:px-8 py-2 md:py-3 mb-4"
          >
            <h2 className="font-comic text-3xl sm:text-5xl md:text-7xl uppercase tracking-tighter">PROJECT COLLECTIONS</h2>
          </motion.div>
          <p className="font-marker text-xl md:text-3xl text-comic-magenta -rotate-2 ml-2 md:ml-4">
             "My artifacts, my hard work!" 💎
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" role="list" aria-label="Completed Projects">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              role="listitem"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group comic-panel hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full"
            >
              <div className="aspect-video bg-comic-black mb-4 flex items-center justify-center relative overflow-hidden">
                <MdCode className="w-10 h-10 md:w-12 md:h-12 text-comic-paper opacity-50" />
                <div className="absolute top-2 left-2 bg-comic-magenta px-2 py-0.5 font-comic text-[10px] md:text-xs text-white">
                  {project.year}
                </div>
              </div>
              
              <h3 className="font-comic text-2xl md:text-3xl mb-3 group-hover:text-comic-cyan transition-colors uppercase">
                {project.title}
              </h3>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map(tech => (
                  <span key={tech} className="text-[9px] md:text-[10px] font-mono font-bold uppercase py-0.5 px-2 bg-comic-yellow/20 border border-comic-yellow text-comic-black">
                    {tech}
                  </span>
                ))}
              </div>
              
              <p className="font-mono text-xs md:text-sm leading-snug mb-6 md:mb-8 flex-grow opacity-70">
                {project.desc}
              </p>
              
              <div className="flex gap-4 mt-auto" role="group" aria-label={`Actions for ${project.title}`}>
                <button className="flex-1 bg-comic-black text-white py-2 font-mono text-[10px] md:text-xs font-bold uppercase flex items-center justify-center gap-2 hover:bg-comic-cyan transition-colors shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] active:translate-x-1 active:translate-y-1 active:shadow-none" aria-label={`View live demo of ${project.title}`}>
                  <MdOpenInNew className="w-4 h-4" aria-hidden="true" /> Live
                </button>
                <button className="bg-white border-4 border-comic-black px-3 py-2 hover:bg-comic-magenta hover:text-white transition-colors shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] active:translate-x-1 active:translate-y-1 active:shadow-none" aria-label={`View source code for ${project.title}`}>
                  <FaGithub className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

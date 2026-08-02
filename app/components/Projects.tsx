'use client';

import { motion } from 'motion/react';
import { MdOpenInNew, MdCode, MdChevronLeft, MdChevronRight, MdInfo } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import type { ApiProject } from '../lib/api';
import { useMemo, useRef } from 'react';
import Link from 'next/link';

const fallbackProjects = [
  {
    id: '1',
    title: 'Justcv.me',
    year: '2024',
    stack: ['React.js', 'Tailwind', 'Zustand'],
    desc: 'Leading platform for publishing resumes. Sliced designs and integrated APIs with smooth state management.',
    projectUrl: null,
    githubUrl: null,
    thumbnail: null,
  },
  {
    id: '2',
    title: 'Wibuverse',
    year: '2022',
    stack: ['Next.js', 'Material UI', 'Redux'],
    desc: 'The ultimate space for wibus. High-energy interface for content discovery and community interaction.',
    projectUrl: null,
    githubUrl: null,
    thumbnail: null,
  },
  {
    id: '3',
    title: 'GBSystem',
    year: '2021',
    stack: ['React Native', 'Axios', 'Material UI'],
    desc: 'Admin dashboard for Amora Photo. A robust system for data handling and internal management.',
    projectUrl: null,
    githubUrl: null,
    thumbnail: null,
  },
  {
    id: '4',
    title: 'The Reptile',
    year: '2020',
    stack: ['Node.js', 'Express', 'MySQL', 'React.js'],
    desc: 'Full-stack application for reptile enthusiasts. API development and UI implementation from scratch.',
    projectUrl: null,
    githubUrl: null,
    thumbnail: null,
  },
];

export default function Projects({ apiProjects }: { apiProjects?: ApiProject[] }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  const displayProjects = useMemo(() => {
    if (!apiProjects || apiProjects.length === 0) return fallbackProjects;

    return apiProjects.map((p) => ({
      id: p.id,
      title: p.title,
      year: new Date(p.createdAt).getFullYear().toString(),
      stack: p.techStacks || [],
      desc: p.description || '',
      projectUrl: p.projectUrl,
      githubUrl: p.githubUrl,
      thumbnail: p.thumbnail,
    }));
  }, [apiProjects]);

  return (
    <section id="projects" className="py-12 md:py-20 px-4 md:px-6 bg-comic-paper" aria-label="Project Portfolio">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-10 md:mb-16 gap-6">
          <div className="text-center md:text-left">
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

          {/* Navigation Buttons */}
          <div className="flex gap-4 z-10">
            <button 
              onClick={scrollLeft}
              className="bg-comic-yellow border-4 border-comic-black p-2 hover:bg-comic-cyan hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] transition-all active:translate-y-0 active:shadow-none"
              aria-label="Scroll left"
            >
              <MdChevronLeft className="w-8 h-8 text-comic-black" />
            </button>
            <button 
              onClick={scrollRight}
              className="bg-comic-yellow border-4 border-comic-black p-2 hover:bg-comic-cyan hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] transition-all active:translate-y-0 active:shadow-none"
              aria-label="Scroll right"
            >
              <MdChevronRight className="w-8 h-8 text-comic-black" />
            </button>
          </div>
        </div>
        
        {/* Carousel Container */}
        <div ref={scrollContainerRef} className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]" role="list" aria-label="Completed Projects">
          {displayProjects.map((project, idx) => (
            <motion.div
              key={project.title + idx}
              role="listitem"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group comic-panel hover:-translate-y-2 transition-transform duration-300 flex flex-col w-[300px] md:w-[350px] shrink-0 snap-center"
            >
              <div className="aspect-video bg-comic-black mb-4 flex items-center justify-center relative overflow-hidden border-2 border-transparent group-hover:border-comic-cyan transition-colors">
                {project.thumbnail ? (
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                ) : (
                  <MdCode className="w-10 h-10 md:w-12 md:h-12 text-comic-paper opacity-50 relative z-10" />
                )}
                <div className="absolute top-2 left-2 z-10 bg-comic-magenta px-2 py-0.5 font-comic text-[10px] md:text-xs text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  {project.year}
                </div>
              </div>

              <h3 className="font-comic text-2xl md:text-3xl mb-3 group-hover:text-comic-cyan transition-colors uppercase line-clamp-2">
                {project.title}
              </h3>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map(tech => (
                  <span key={tech} className="text-[9px] md:text-[10px] font-mono font-bold uppercase py-0.5 px-2 bg-comic-yellow/20 border border-comic-yellow text-comic-black">
                    {tech}
                  </span>
                ))}
              </div>

              <p className="font-mono text-xs md:text-sm leading-snug mb-6 md:mb-8 flex-grow opacity-70 whitespace-pre-wrap line-clamp-4">
                {project.desc}
              </p>

              <div className="flex gap-4 mt-auto" role="group" aria-label={`Actions for ${project.title}`}>
                {project.id ? (
                  <Link href={`/projects/${project.id}`} className="flex-1 bg-comic-black text-white py-2 font-mono text-[10px] md:text-xs font-bold uppercase flex items-center justify-center gap-2 hover:bg-comic-cyan transition-colors shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] active:translate-x-1 active:translate-y-1 active:shadow-none" aria-label={`View details of ${project.title}`}>
                    <MdInfo className="w-4 h-4" aria-hidden="true" /> Detail
                  </Link>
                ) : (
                  <div className="flex-1 bg-gray-400 text-white py-2 font-mono text-[10px] md:text-xs font-bold uppercase flex items-center justify-center gap-2 cursor-not-allowed">
                    <MdInfo className="w-4 h-4" aria-hidden="true" /> Detail
                  </div>
                )}
                {project.githubUrl ? (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="bg-white border-4 border-comic-black px-3 py-2 hover:bg-comic-magenta hover:text-white transition-colors shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] active:translate-x-1 active:translate-y-1 active:shadow-none" aria-label={`View source code for ${project.title}`}>
                    <FaGithub className="w-5 h-5" aria-hidden="true" />
                  </a>
                ) : (
                  <div className="bg-gray-200 border-4 border-gray-400 text-gray-500 px-3 py-2 cursor-not-allowed">
                    <FaGithub className="w-5 h-5" aria-hidden="true" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

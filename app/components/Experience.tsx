'use client';

import { motion } from 'motion/react';
import { MdWork, MdEventNote } from 'react-icons/md';
import { cn } from '../lib/utils';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    company: 'PT Metrodata Electronics Tbk',
    role: 'Associate Application Developer (Frontend)',
    period: 'Nov 2024 – Present',
    desc: 'Leading frontend efforts for PT JASA MARGA projects. Slicing UI/UX with Next.js and collaborating with backend wizards.',
    color: 'bg-comic-cyan',
  },
  {
    company: 'Sapphire Skyscraper (Pte Ltd)',
    role: 'Frontend Developer',
    period: 'Aug 2023 - Nov 2024',
    desc: 'Managed "Pinjam win win" loan app. Led a team of 3-6 members. Optimized performance for Southeast Asian markets.',
    color: 'bg-comic-magenta',
  },
  {
    company: 'PT Barito Integra Teknologi',
    role: 'Frontend Developer',
    period: 'Feb 2022- Aug 2023',
    desc: 'Worked on multiple projects including Barito Revamp and WYZ System for Bank DKI. Mastering GraphQL and Next.js.',
    color: 'bg-comic-yellow',
  },
  {
    company: 'Dattabot',
    role: 'Frontend Engineer',
    period: 'Feb 2021- Feb 2022',
    desc: 'Big data visualization for Indonesian analytics. Slicing complex dashboards and register portals.',
    color: 'bg-comic-paper text-comic-black',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end gap-2 md:gap-6 mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-comic text-5xl sm:text-7xl md:text-9xl uppercase leading-[0.8]"
          >
            QUEST <span className="text-comic-magenta">LOG</span>
          </motion.h2>
          <div className="h-2 md:h-3 w-20 md:w-auto md:flex-1 bg-comic-black mb-1 md:mb-2" />
        </div>
        
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-2 md:w-3 bg-comic-black -translate-x-1/2 z-0" />
          
          <div className="space-y-12 md:space-y-0 relative z-10">
            {experiences.map((exp, idx) => (
              <div key={exp.company} className={cn(
                "flex flex-col md:flex-row items-center w-full md:min-h-[300px]",
                idx % 2 === 0 ? "md:flex-row-reverse" : ""
              )}>
                {/* Content Panel */}
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="w-full md:w-[45%] ml-8 md:ml-0"
                >
                  <div className={cn("comic-panel p-0 group overflow-hidden")}>
                    <div className={cn("px-4 md:px-6 py-3 md:py-4 border-b-4 border-comic-black flex justify-between items-center text-comic-black", exp.color)}>
                       <span className="font-comic text-xl md:text-2xl tracking-tighter uppercase line-clamp-1">{exp.company}</span>
                       <Briefcase className="w-5 h-5 md:w-6 md:h-6 shrink-0 ml-2" />
                    </div>
                    <div className="p-4 md:p-6">
                      <div className="flex items-center gap-2 mb-3 md:mb-4 text-[10px] md:text-xs font-bold font-mono tracking-widest text-comic-black/60 uppercase">
                        <Calendar className="w-3.5 h-3.5 md:w-4 md:h-4" />
                        {exp.period}
                      </div>
                      <h3 className="font-comic text-2xl md:text-3xl mb-3 md:mb-4 group-hover:text-comic-magenta transition-colors line-clamp-2 md:line-clamp-none">
                        {exp.role}
                      </h3>
                      <p className="font-mono text-xs md:text-sm leading-relaxed mb-4 md:mb-6 opacity-80">
                        {exp.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Timeline Circle Marker */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 md:w-12 md:h-12 bg-white border-4 border-comic-black rounded-full flex items-center justify-center z-20 shadow-[4px_4px_0px_0px_#1A1A1A]">
                  <div className={cn("w-3 h-3 md:w-5 md:h-5 rounded-full", exp.color.split(' ')[0])} />
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block md:w-[45%]" />
              </div>
            ))}
          </div>
          
          {/* Final Flag Marker */}
          <div className="absolute left-4 md:left-1/2 bottom-0 -translate-x-1/2 translate-y-full mt-8 flex flex-col items-center">
             <motion.div 
               animate={{ rotate: [-2, 2, -2] }}
               transition={{ duration: 2, repeat: Infinity }}
               className="bg-comic-magenta text-white px-4 py-2 comic-border font-comic text-2xl uppercase whitespace-nowrap"
             >
               BOSS STAGE NEARBY?
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}


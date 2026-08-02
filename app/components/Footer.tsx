'use client';

import { motion } from 'motion/react';
import { MdMail, MdLocationOn, MdFavoriteBorder } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';
import type { Profile } from '../lib/api';

export default function Footer({ profile }: { profile?: Profile | null }) {
  return (
    <footer className="bg-comic-black text-white pt-12 md:pt-20 pb-8 md:pb-10 px-4 md:px-6 relative overflow-hidden" aria-label="Footer">
      {/* Decorative oversized text background */}
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 mb-12 md:mb-20">
          {/* CTA / Hire Me Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="comic-panel bg-white text-comic-black p-6 md:p-8 flex flex-col justify-between"
          >
            <div>
              <h3 className="font-comic text-2xl md:text-4xl mb-2 bg-comic-magenta text-white inline-block px-3 md:px-4 -rotate-1 shadow-[4px_4px_0_0_#1A1A1A]">
                LOOKING FOR A HERO?
              </h3>
              <p className="font-mono text-xs md:text-sm text-comic-black/60 mt-4 mb-6 leading-relaxed">
                Frontend engineer with 4+ years of exp crafting pixel-perfect, 
                high-performance web &amp; mobile apps. Let&apos;s build something epic together.
              </p>
            </div>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 bg-comic-cyan/10 border-2 border-comic-black px-4 py-2.5 shadow-[3px_3px_0_0_#1A1A1A]">
                <span className="text-lg">⚡</span>
                <span className="font-comic text-sm md:text-base uppercase">
                  {profile?.services?.[0] || 'React / Next.js / React Native'}
                </span>
              </div>
              <div className="flex items-center gap-3 bg-comic-yellow/10 border-2 border-comic-black px-4 py-2.5 shadow-[3px_3px_0_0_#1A1A1A]">
                <span className="text-lg">🎯</span>
                <span className="font-comic text-sm md:text-base uppercase">
                  {profile?.services?.[1] || 'Pixel-perfect UI Implementation'}
                </span>
              </div>
              <div className="flex items-center gap-3 bg-comic-magenta/10 border-2 border-comic-black px-4 py-2.5 shadow-[3px_3px_0_0_#1A1A1A]">
                <span className="text-lg">🚀</span>
                <span className="font-comic text-sm md:text-base uppercase">Performance & Scalability</span>
              </div>
            </div>

            <a
              href={`mailto:${profile?.contactEmail || 'azkaandyaaa@gmail.com'}?subject=Hey%20Azka!%20Let's%20work%20together`}
              className="block w-full text-center bg-comic-magenta text-white font-comic text-xl md:text-2xl uppercase py-3 md:py-4 border-4 border-comic-black shadow-[5px_5px_0_0_#1A1A1A] hover:shadow-[2px_2px_0_0_#1A1A1A] hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-150 active:shadow-none active:translate-x-[5px] active:translate-y-[5px]"
            >
              ✉️ HIRE ME NOW!
            </a>
          </motion.div>
          
          {/* Contact Section */}
          <div className="flex flex-col justify-center text-center lg:text-left">
            <h2 className="font-comic text-6xl md:text-8xl lg:text-9xl text-comic-magenta mb-6 md:mb-8 tracking-tighter leading-none">
              LET'S <br className="hidden lg:block"/> COLLAB!
            </h2>
            
            <div className="space-y-4 md:space-y-6" role="list" aria-label="Contact Information">
              <a href={`mailto:${profile?.contactEmail || 'azkaandyaaa@gmail.com'}`} className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 group" role="listitem">
                <div className="p-3 md:p-4 bg-comic-cyan comic-border group-hover:bg-white transition-colors" aria-hidden="true">
                  <MdMail className="w-5 h-5 md:w-6 md:h-6 text-comic-black" />
                </div>
                <span className="font-mono text-base md:text-xl font-bold border-b-2 border-transparent group-hover:border-comic-cyan pb-1 transition-all break-all sm:break-normal">
                  {profile?.contactEmail || 'azkaandyaaa@gmail.com'}
                </span>
              </a>
              
              <a href="https://linkedin.com/in/azkaxism" target="_blank" rel="noreferrer" className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 group" role="listitem" aria-label="LinkedIn Profile">
                <div className="p-3 md:p-4 bg-comic-yellow comic-border group-hover:bg-white transition-colors" aria-hidden="true">
                  <FaLinkedin className="w-5 h-5 md:w-6 md:h-6 text-comic-black" />
                </div>
                <span className="font-mono text-base md:text-xl font-bold border-b-2 border-transparent group-hover:border-comic-yellow pb-1 transition-all">
                  linkedin.com/azkaxism
                </span>
              </a>
              
              <div className="flex items-center justify-center lg:justify-start gap-4 pt-6 md:pt-10">
                <MdLocationOn className="w-4 h-4 md:w-5 md:h-5 text-comic-magenta" />
                <span className="font-mono text-[10px] md:text-sm opacity-60">{profile?.location || 'Isekai'}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 md:pt-10 border-t-2 border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-mono text-[10px] opacity-40 uppercase tracking-widest text-center md:text-left">
            © {new Date().getFullYear()} BEKASYUUUN PORTOFOLIO • ALL RIGHTS RESERVED
          </p>
          <p className="flex items-center gap-2 font-mono text-[10px] opacity-40 uppercase ">
            MADE WITH <MdFavoriteBorder className="w-3 h-3 text-comic-magenta" /> & INDOMIE
          </p>
        </div>
      </div>
    </footer>
  );
}

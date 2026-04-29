'use client';

import { motion } from 'motion/react';
import { MdMail, MdLocationOn, MdFavoriteBorder } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-comic-black text-white pt-12 md:pt-20 pb-8 md:pb-10 px-4 md:px-6 relative overflow-hidden" aria-label="Footer">
      {/* Decorative oversized text background */}
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 mb-12 md:mb-20">
          {/* Character Profile Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="comic-panel bg-white text-comic-black p-6 md:p-8"
          >
            <h3 className="font-comic text-2xl md:text-4xl mb-6 md:mb-8 bg-comic-yellow inline-block px-3 md:px-4 -rotate-1 shadow-[4px_4px_0_0_#1A1A1A]">
              CHARACTER PROFILE
            </h3>
            
            <div className="space-y-6 md:space-y-8">
        
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 text-left">
                <div>
                  <p className="font-mono text-[10px] md:text-xs font-bold text-comic-black/40 uppercase mb-2">Likes</p>
                  <ul className="font-comic text-lg md:text-xl space-y-1">
                    <li>✨ CLEAN CODE</li>
                    <li>🏋️ PUSH DAY</li>
                    <li>🔥 SPICY MEMES</li>
                    <li>🍕 CHEAT MEALS</li>
                  </ul>
                </div>
                <div>
                  <p className="font-mono text-[10px] md:text-xs font-bold text-comic-black/40 uppercase mb-2">Dislikes</p>
                  <ul className="font-comic text-lg md:text-xl space-y-1">
                    <li>🚫 SPAGHETTI CODE</li>
                    <li>🚫 SKIP LEG DAY</li>
                    <li>🚫 SLOW INTERNET</li>
                    <li>🚫 BEKASI TRAFFIC</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Section */}
          <div className="flex flex-col justify-center text-center lg:text-left">
            <h2 className="font-comic text-6xl md:text-8xl lg:text-9xl text-comic-magenta mb-6 md:mb-8 tracking-tighter leading-none">
              LET'S <br className="hidden lg:block"/> COLLAB!
            </h2>
            
            <div className="space-y-4 md:space-y-6" role="list" aria-label="Contact Information">
              <a href="mailto:azkaandyaaa@gmail.com" className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 group" role="listitem">
                <div className="p-3 md:p-4 bg-comic-cyan comic-border group-hover:bg-white transition-colors" aria-hidden="true">
                  <MdMail className="w-5 h-5 md:w-6 md:h-6 text-comic-black" />
                </div>
                <span className="font-mono text-base md:text-xl font-bold border-b-2 border-transparent group-hover:border-comic-cyan pb-1 transition-all break-all sm:break-normal">
                  azkaandyaaa@gmail.com
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
                <span className="font-mono text-[10px] md:text-sm opacity-60">Isekai</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 md:pt-10 border-t-2 border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-mono text-[10px] opacity-40 uppercase tracking-widest text-center md:text-left">
            © 2026 BEKASYUUUN PORTOFOLIO • ALL RIGHTS RESERVED
          </p>
          <p className="flex items-center gap-2 font-mono text-[10px] opacity-40 uppercase ">
            MADE WITH <MdFavoriteBorder className="w-3 h-3 text-comic-magenta" /> & INDOMIE
          </p>
        </div>
      </div>
    </footer>
  );
}

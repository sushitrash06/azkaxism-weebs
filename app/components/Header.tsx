'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MdMenu, MdClose } from 'react-icons/md';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Stats', href: '#skills' },
    { name: 'Quests', href: '#experience' },
    { name: 'Artifacts', href: '#projects' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-comic-paper/90 backdrop-blur-sm border-b-4 border-comic-black px-4 md:px-6 py-3 md:py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="font-comic text-2xl md:text-3xl tracking-tighter"
        >
          <a href="#">AZKAXISM!!!<span className="text-comic-magenta">!</span></a>
        </motion.div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-sm font-bold uppercase tracking-widest">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className="hover:text-comic-magenta transition-colors">
              {link.name}
            </a>
          ))}
        </nav>
        
        <div className="flex items-center gap-4">
          <motion.a 
            href="mailto:azkaa.p14@gmail.com?subject=Hey%20Azka!%20Let's%20work%20together"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:block bg-comic-yellow comic-border px-4 py-2 font-mono text-xs font-bold uppercase tracking-tighter shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]"
          >
            HIRE ME!
          </motion.a>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 bg-comic-white border-2 border-comic-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-comic-paper border-b-4 border-comic-black overflow-hidden"
          >
            <nav className="flex flex-col p-6 gap-4 font-mono text-lg font-bold uppercase tracking-widest text-center">
              {navLinks.map(link => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="py-2 active:text-comic-magenta transition-colors border-b border-comic-black/10 last:border-0"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="mailto:azkaa.p14@gmail.com?subject=Hey%20Azka!%20Let's%20work%20together" 
                className="bg-comic-yellow comic-border w-full py-4 mt-2 font-mono font-bold uppercase text-center"
              >
                HIRE ME!
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

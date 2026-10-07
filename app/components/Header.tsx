'use client';

import { motion } from 'motion/react';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-comic-paper/90 backdrop-blur-sm border-b-4 border-comic-black px-4 md:px-6 py-3 md:py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="font-comic text-2xl md:text-3xl tracking-tighter"
        >
          <a href="#">AZKAXISM!!!<span className="text-comic-magenta">!</span></a>
        </motion.div>
        
        <div className="flex items-center gap-4">
          <motion.a 
            href="mailto:azkaa.p14@gmail.com?subject=Hey%20Azka!%20Let's%20work%20together"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-comic-yellow comic-border px-4 py-2 font-mono text-xs font-bold uppercase tracking-tighter shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]"
          >
            HIRE ME!
          </motion.a>
        </div>
      </div>
    </header>
  );
}

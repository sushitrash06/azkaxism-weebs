'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MdPerson,
  MdBarChart,
  MdWorkHistory,
  MdFolderSpecial,
  MdMail,
} from 'react-icons/md';
import { cn } from '../lib/utils';

export type SectionId = 'about' | 'stats' | 'quests' | 'artifacts' | 'contact';

interface NavItem {
  id: SectionId;
  label: string;
  icon: React.ElementType;
  color: string;
  glowColor: string;
}

const navItems: NavItem[] = [
  {
    id: 'about',
    label: 'About',
    icon: MdPerson,
    color: 'text-comic-cyan',
    glowColor: 'rgba(58, 134, 255, 0.4)',
  },
  {
    id: 'stats',
    label: 'Stats',
    icon: MdBarChart,
    color: 'text-comic-yellow',
    glowColor: 'rgba(255, 210, 30, 0.4)',
  },
  {
    id: 'quests',
    label: 'Quests',
    icon: MdWorkHistory,
    color: 'text-comic-magenta',
    glowColor: 'rgba(255, 0, 110, 0.4)',
  },
  {
    id: 'artifacts',
    label: 'Artifacts',
    icon: MdFolderSpecial,
    color: 'text-comic-cyan',
    glowColor: 'rgba(58, 134, 255, 0.4)',
  },
  {
    id: 'contact',
    label: 'Contact',
    icon: MdMail,
    color: 'text-comic-yellow',
    glowColor: 'rgba(255, 210, 30, 0.4)',
  },
];

interface SidebarProps {
  activeSection: SectionId;
  onSectionChange: (id: SectionId) => void;
}

export default function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  const [hoveredItem, setHoveredItem] = useState<SectionId | null>(null);

  const handleClick = useCallback(
    (id: SectionId) => {
      onSectionChange(id);
    },
    [onSectionChange],
  );

  return (
    <>
      {/* ─── Desktop Sidebar (left) ─── */}
      <aside className="sidebar-desktop hidden md:flex fixed left-0 top-0 bottom-0 z-50 w-20 flex-col items-center justify-between py-6 bg-[#0a0a0a]/95 backdrop-blur-xl border-r-2 border-white/5">
        {/* Logo */}
        <div className="mb-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="w-12 h-12 bg-comic-magenta border-2 border-comic-black flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(26,26,26,1)] cursor-pointer select-none"
            title="AZKAXISM"
          >
            <span className="font-comic text-white text-lg leading-none">A!</span>
          </motion.div>
        </div>

        {/* Nav Items */}
        <nav className="flex flex-col items-center gap-2 flex-1 justify-center">
          {navItems.map((item, idx) => {
            const isActive = activeSection === item.id;
            const isHovered = hoveredItem === item.id;
            const Icon = item.icon;

            return (
              <motion.button
                key={item.id}
                initial={{ x: -40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: idx * 0.08, type: 'spring', stiffness: 250 }}
                onClick={() => handleClick(item.id)}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                className={cn(
                  'relative w-14 h-14 flex flex-col items-center justify-center rounded-xl transition-all duration-200 group cursor-pointer',
                  isActive
                    ? 'bg-white/10 border border-white/20'
                    : 'bg-transparent border border-transparent hover:bg-white/5 hover:border-white/10',
                )}
                title={item.label}
                aria-label={`Navigate to ${item.label}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {/* Active indicator bar */}
                {isActive && (
                  <motion.div
                    layoutId="sidebar-active-indicator"
                    className="absolute -left-[11px] top-1/2 -translate-y-1/2 w-[3px] h-7 rounded-r-full"
                    style={{ backgroundColor: item.glowColor.replace('0.4', '1') }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  />
                )}

                {/* Glow effect */}
                {isActive && (
                  <div
                    className="absolute inset-0 rounded-xl opacity-20 blur-md pointer-events-none"
                    style={{ backgroundColor: item.glowColor }}
                  />
                )}

                <Icon
                  className={cn(
                    'w-6 h-6 transition-all duration-200',
                    isActive ? item.color : 'text-white/40 group-hover:text-white/70',
                  )}
                />
                <span
                  className={cn(
                    'text-[9px] font-mono font-bold uppercase tracking-wider mt-1 transition-colors',
                    isActive ? 'text-white/90' : 'text-white/30 group-hover:text-white/60',
                  )}
                >
                  {item.label}
                </span>

                {/* Tooltip on hover */}
                <AnimatePresence>
                  {isHovered && !isActive && (
                    <motion.div
                      initial={{ opacity: 0, x: -8, scale: 0.9 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: -8, scale: 0.9 }}
                      className="absolute left-[calc(100%+12px)] bg-white text-comic-black px-3 py-1.5 font-comic text-sm uppercase tracking-wider whitespace-nowrap border-2 border-comic-black shadow-[3px_3px_0px_0px_rgba(26,26,26,1)] z-[60] pointer-events-none"
                    >
                      {item.label}
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-2 h-2 bg-white border-l-2 border-b-2 border-comic-black rotate-45" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </nav>

        {/* Hire Me CTA */}
        <motion.a
          href="mailto:azkaa.p14@gmail.com?subject=Hey%20Azka!%20Let's%20work%20together"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 bg-comic-yellow border-2 border-comic-black flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(26,26,26,1)] cursor-pointer group"
          title="Hire Me!"
        >
          <span className="font-comic text-comic-black text-xs group-hover:animate-bounce">💼</span>
        </motion.a>
      </aside>

      {/* ─── Mobile Bottom Bar ─── */}
      <nav className="sidebar-mobile md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-xl border-t-2 border-white/10 safe-area-bottom">
        <div className="flex items-center justify-around px-2 py-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={cn(
                  'relative flex flex-col items-center justify-center py-2 px-3 rounded-xl transition-all duration-200 min-w-0 flex-1',
                  isActive ? 'bg-white/10' : '',
                )}
                aria-label={`Navigate to ${item.label}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {/* Active indicator dot */}
                {isActive && (
                  <motion.div
                    layoutId="mobile-active-indicator"
                    className="absolute -top-[2px] left-1/2 -translate-x-1/2 w-6 h-[3px] rounded-b-full"
                    style={{ backgroundColor: item.glowColor.replace('0.4', '1') }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  />
                )}

                <Icon
                  className={cn(
                    'w-5 h-5 transition-all duration-200',
                    isActive ? item.color : 'text-white/40',
                  )}
                />
                <span
                  className={cn(
                    'text-[8px] font-mono font-bold uppercase tracking-wider mt-0.5 transition-colors',
                    isActive ? 'text-white/90' : 'text-white/30',
                  )}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}

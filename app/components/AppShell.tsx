'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Sidebar, { type SectionId } from './Sidebar';
import Hero from './Hero';
import Skills from './Skills';
import ExperienceSection from './ExperienceSection';
import Projects from './Projects';
import Footer from './Footer';
import Header from './Header';
import type { Profile, ApiExperience, ApiProject } from '../lib/api';

interface AppShellProps {
  profile: Profile | null;
  apiExperiences: ApiExperience[];
  apiProjects: ApiProject[];
}

const sectionVariants = {
  initial: { opacity: 0, y: 20, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -20, scale: 0.98 },
};

export default function AppShell({ profile, apiExperiences, apiProjects }: AppShellProps) {
  const [activeSection, setActiveSection] = useState<SectionId>('about');

  const handleSectionChange = useCallback((id: SectionId) => {
    setActiveSection(id);
  }, []);

  return (
    <div className="app-shell h-dvh w-full overflow-hidden flex">
      {/* Sidebar */}
      <Sidebar activeSection={activeSection} onSectionChange={handleSectionChange} />

      {/* Main Content Area */}
      <main className="main-content flex-1 h-full overflow-hidden md:ml-20 flex flex-col">
        <Header />
        <AnimatePresence mode="wait">
          {activeSection === 'about' && (
            <motion.div
              key="about"
              variants={sectionVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="section-container flex-1 overflow-y-auto overflow-x-hidden pb-20 md:pb-0"
            >
              <Hero profile={profile} />
            </motion.div>
          )}

          {activeSection === 'stats' && (
            <motion.div
              key="stats"
              variants={sectionVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="section-container flex-1 overflow-y-auto overflow-x-hidden pb-20 md:pb-0"
            >
              <Skills profile={profile} />
            </motion.div>
          )}

          {activeSection === 'quests' && (
            <motion.div
              key="quests"
              variants={sectionVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="section-container flex-1 overflow-y-auto overflow-x-hidden pb-20 md:pb-0"
            >
              <ExperienceSection apiExperiences={apiExperiences} />
            </motion.div>
          )}

          {activeSection === 'artifacts' && (
            <motion.div
              key="artifacts"
              variants={sectionVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="section-container flex-1 overflow-y-auto overflow-x-hidden pb-20 md:pb-0"
            >
              <Projects apiProjects={apiProjects} />
            </motion.div>
          )}

          {activeSection === 'contact' && (
            <motion.div
              key="contact"
              variants={sectionVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="section-container flex-1 overflow-y-auto overflow-x-hidden pb-20 md:pb-0"
            >
              <Footer profile={profile} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

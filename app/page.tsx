"use client";

import { useState } from "react";
import Projects from "./components/Projects";
import ExperienceCard from "./components/Experience";
import Skills from "./components/Skills";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { experience } from "./data/porto.json"

export default function Home() {
  const [checkedTasks, setCheckedTasks] = useState<{ [key: string]: boolean }>({});

  const handleToggleTask = (company: string, index: number, _costExp: number) => {
    const taskKey = `${company}-${index}`;
    setCheckedTasks((prev) => ({ ...prev, [taskKey]: !prev[taskKey] }));
  };

  const handleInteractTalk = (_msg: string, _expression: "happy" | "thinking" | "excited" | "coding") => {
    // TODO: hook up to your mascot/dialog system
  };

  return (
    <div className="min-h-screen selection:bg-comic-magenta selection:text-white">
      <Header />
      <main>
        <Hero />
        <Skills />
        <section id="experience" className="py-12 md:py-24 px-4 md:px-6 bg-white text-white relative overflow-hidden">
          {/* Halftone texture background */}
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          ></div>

          <div className="max-w-6xl mx-auto relative z-10">
            {/* Section Header */}
            <div className="mb-12 text-center md:text-left">
              <h2 className="font-comic text-5xl md:text-8xl text-comic-yellow leading-none mb-2">
                QUEST LOG
              </h2>
              <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start">
                <div className="bg-comic-magenta px-3 py-1 comic-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-1">
                  <span className="font-mono text-xs font-bold uppercase">
                    ⚔️ Guild Commissions
                  </span>
                </div>
                <div className="font-mono text-xs opacity-50 uppercase tracking-widest italic">
                  {experience.length} quests completed
                </div>
              </div>
            </div>

            {/* Experience Cards */}
            <div className="flex flex-col gap-8">
              {experience.map((exp, idx) => (
                <ExperienceCard
                  key={exp.company}
                  quest={exp}
                  isActiveQuest={idx === 0}
                  checkedTasks={checkedTasks}
                  onToggleTask={handleToggleTask}
                  onInteractTalk={handleInteractTalk}
                />
              ))}
            </div>
          </div>
        </section>
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

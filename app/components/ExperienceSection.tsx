"use client";

import { useState, useMemo } from "react";
import ExperienceCard from "./Experience";
import { experience as fallbackExperience } from "../data/porto.json";
import type { ApiExperience } from "../lib/api";

export default function ExperienceSection({ apiExperiences }: { apiExperiences?: ApiExperience[] }) {
  const [checkedTasks, setCheckedTasks] = useState<{ [key: string]: boolean }>({});

  const handleToggleTask = (company: string, index: number, _costExp: number) => {
    const taskKey = `${company}-${index}`;
    setCheckedTasks((prev) => ({ ...prev, [taskKey]: !prev[taskKey] }));
  };

  const handleInteractTalk = (_msg: string, _expression: "happy" | "thinking" | "excited" | "coding") => {
    // TODO: hook up to your mascot/dialog system
  };

  const experiences = useMemo(() => {
    if (!apiExperiences || apiExperiences.length === 0) return fallbackExperience;

    return apiExperiences.map((apiExp, idx) => {
      let responsibilities: string[] = [];
      let skills: string[] = [];

      if (apiExp.description) {
        const techSplit = apiExp.description.split("Technologies used:");
        const descWithoutTech = techSplit[0];
        if (techSplit.length > 1) {
          skills = techSplit[1].split(",").map((s) => s.trim()).filter(Boolean);
        }

        const rawParts = descWithoutTech.split("•");
        const intro = rawParts[0].trim();
        const bullets = rawParts.slice(1).map((s) => s.trim()).filter(Boolean);
        responsibilities = bullets.length > 0 ? bullets : (intro ? [intro] : []);
      }

      const period = apiExp.endDate
        ? `${new Date(apiExp.startDate).toLocaleDateString("en-US", { month: "short", year: "numeric" })} - ${new Date(apiExp.endDate).toLocaleDateString("en-US", { month: "short", year: "numeric" })}`
        : `${new Date(apiExp.startDate).toLocaleDateString("en-US", { month: "short", year: "numeric" })} - Present`;

      const questLevels = [80, 75, 60, 45, 30, 20];
      const colors = ["bg-cyan-400", "bg-rose-400", "bg-amber-400", "bg-emerald-400 text-slate-900"];
      const sounds = ["BAM!", "SHING!", "WHOOSH!", "KRAK!"];

      const mappedProjects = apiExp.projects ? apiExp.projects.map((p) => {
        let pDetails: string[] = [];
        if (p.description) {
          const pRawParts = p.description.split("•");
          const pIntro = pRawParts[0].trim();
          const pBullets = pRawParts.slice(1).map((s) => s.trim()).filter(Boolean);
          pDetails = pBullets.length > 0 ? pBullets : (pIntro ? [pIntro] : []);
        }
        return {
          name: p.title,
          details: pDetails,
        };
      }) : [];

      return {
        company: apiExp.company,
        role: apiExp.position,
        period,
        jobResponsibilities: responsibilities,
        skills: skills,
        projects: mappedProjects,
        color: colors[idx % colors.length],
        mangaSound: sounds[idx % sounds.length],
        questLevel: questLevels[idx % questLevels.length] || 10,
        expGranted: (questLevels[idx % questLevels.length] || 10) * 30,
      };
    });
  }, [apiExperiences]);

  return (
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
              {experiences.length} quests completed
            </div>
          </div>
        </div>

        {/* Experience Cards */}
        <div className="flex flex-col gap-8">
          {experiences.map((exp: any, idx: number) => (
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
  );
}

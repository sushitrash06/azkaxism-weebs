
import { Check, ShieldAlert, Award, Star } from "lucide-react";

export interface Project {
  name: string;
  details: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  jobResponsibilities: string[];
  skills: string[];
  projects: Project[];
  color: string; // Tailwinds colors or custom comic colors
  mangaSound?: string; // e.g. "BAM!", "WHOOSH!", "SHING!"
  questLevel: number;
  expGranted: number;
}

export interface QuestCardProps {
  quest: Experience;
  isActiveQuest: boolean;
  checkedTasks: { [key: string]: boolean };
  onToggleTask: (company: string, index: number, costExp: number) => void;
  onInteractTalk: (msg: string, expression: "happy" | "thinking" | "excited" | "coding") => void;
  key?: any;
}

export default function Experience({
  quest,
  isActiveQuest,
  onToggleTask,
  onInteractTalk
}: QuestCardProps) {


  const getMangaActionSound = (sound: string | undefined) => {
    return sound || "BAM!";
  };

  return (
    <div className="m-10 brutal-card p-6 bg-white border-4 border-slate-900 rounded-3xl relative overflow-hidden transition-all duration-200">

      {/* Absolute Header Comic Sound Badge */}
      <div className={`absolute top-4 right-4 ${quest.color} border-2 border-slate-900 px-3 py-1 text-xs font-comic font-black uppercase text-slate-900 shadow-[2px_2px_0px_rgba(18,18,20,1)] tracking-widest transform rotate-6 select-none animate-pulse`}>
        {getMangaActionSound(quest.mangaSound)}
      </div>

      {/* Quest Status Indicators */}
      <div className="flex gap-2.5 items-center mb-4">
        <span className={`text-[10px] font-game py-1 px-3 border-2 border-slate-900 rounded-full shadow-[2.5px_2.5px_0px_#121214] select-none ${isActiveQuest
          ? "bg-rose-500 text-white font-bold animate-pulse"
          : "bg-emerald-400 text-slate-950 font-bold"
          }`}>
          {isActiveQuest ? "⚔️ ACTIVE MAIN QUEST" : "🏆 QUEST SUCCESS"}
        </span>
        <span className="font-mono text-xs text-slate-500 font-bold">{quest.period}</span>
      </div>

      {/* Company Name & Role Info */}
      <div className="mb-5 border-b-2 border-dashed border-slate-200 pb-4">
        <h3 className="font-comic text-3xl text-slate-900 tracking-wide uppercase leading-tight mb-0.5">
          {quest.company}
        </h3>
        <p className="font-game text-[11px] text-indigo-600 font-extrabold flex items-center gap-1">
          <span>🛡️ CLASS ROLE:</span>
          <span className="text-slate-900">{quest.role}</span>
        </p>
      </div>

      {/* Rewards Row */}
      <div className="bg-amber-50 border-2 border-slate-900 rounded-2xl p-3 mb-5 flex flex-wrap justify-between items-center gap-2 shadow-[2px_2px_0px_#121214]">
        <div className="flex items-center gap-1.5">
          <span className="font-game text-[9px] text-slate-700">QUEST REWARDS:</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 font-mono text-xs font-bold text-emerald-600">
            <span>EXP +{quest.expGranted}</span>
          </div>
          <div className="flex items-center gap-1 font-mono text-xs font-bold text-amber-500">
            <span>GOLD +{quest.questLevel * 10}g</span>
          </div>
          <div className="flex items-center gap-1 font-mono text-xs font-bold text-rose-500">
            <span>REP +{quest.questLevel}</span>
          </div>
        </div>
      </div>

      {/* Quest Objectives (Job Responsibilities) */}
      <div className="mb-6">
        <h4 className="font-game text-[10px] text-slate-900 mb-3.5 flex items-center gap-1.5 font-bold uppercase select-none">
          <span>📜 QUEST ACHIEVEMENTS & CONTRIBUTIONS:</span>
        </h4>
        <ul className="space-y-3.5 pl-1">
          {quest.jobResponsibilities.map((responsibility, idx) => {
            return (
              <li
                key={idx}
                className="font-sans text-stone-800 text-xs sm:text-[13px] leading-relaxed relative pl-6 flex items-start gap-1"
              >
                {/* Cute anime star bullet marker */}
                <span className="absolute left-0 top-1 text-rose-500 font-game text-[10px] animate-pulse">★</span>
                <p className="font-semibold text-slate-700">
                  {responsibility}
                </p>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Satisfying Claim/Complete Quest Guild Button */}
      <div className="mt-5 mb-5 bg-slate-50 border-2 border-slate-900 rounded-2xl p-4 flex flex-col sm:flex-row justify-between items-center gap-3">
        <div className="text-center sm:text-left">
          <span className="text-[10px] font-game text-indigo-600 font-extrabold uppercase block select-none">GUILD COMMISSION RECORD:</span>
          <span className="text-xs font-sans text-slate-500 font-semibold italic">Successfully resolved and delivered system features</span>
        </div>
        <button
          onClick={() => {
            onToggleTask(quest.company, 0, quest.expGranted);
            onInteractTalk(
              `Sugoi! You claimed the rewards for PT ${quest.company}! Total +${quest.expGranted} EXP and corresponding Guild gold claimed successfully! 🎆`,
              "excited"
            );
          }}
          className="w-full sm:w-auto px-4 py-2 brutal-btn bg-emerald-400 text-slate-950 font-game text-[9px] font-black rounded-xl hover:bg-emerald-500 flex items-center justify-center gap-1"
        >
          <span>CLAIM QUEST DELIVERABLES ⚔️</span>
        </button>
      </div>

      {/* BOSS RAIDS (Projects associated with company) */}
      {quest.projects && quest.projects.length > 0 && (
        <div className="mt-6 border-t-2 border-dashed border-slate-200 pt-5">
          <h4 className="font-game text-[10px] text-slate-900 mb-3 flex items-center gap-1.5 font-bold uppercase select-none">
            <span>🔥 RAID BOSSES DEFEATED:</span>
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quest.projects.map((proj, projIdx) => (
              <div
                key={projIdx}
                className="bg-indigo-950 border-4 border-slate-900 rounded-2xl p-4 text-white relative flex flex-col justify-between overflow-hidden shadow-[2px_2px_0px_#121214]"
              >

                {/* Grid Overlay inside Boss Panel */}
                <div className="absolute inset-0 bg-repeat bg-opacity-15 manga-speed-lines z-0 opacity-15"></div>

                <div className="relative z-10 w-full">
                  <div className="flex items-center gap-2 mb-2 w-full justify-between">
                    <span className="font-game text-[8px] tracking-wide text-rose-400 font-extrabold uppercase animate-pulse">
                      👿 LEVEL {quest.questLevel * 2} BOSS ELITE
                    </span>
                    <span className="font-game text-[8px] text-amber-300">HP: 100% DEFEATED</span>
                  </div>

                  <h5 className="font-comic text-xl text-yellow-300 leading-tight mb-2 tracking-wide uppercase">
                    {proj.name}
                  </h5>

                  <div className="space-y-1.5 mb-3">
                    {proj.details.map((detail, detIdx) => (
                      <div key={detIdx} className="flex gap-2 items-start text-[11px] leading-relaxed text-slate-300">
                        <span className="text-amber-400 mt-0.5">✦</span>
                        <p>{detail}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 mt-2 bg-rose-500 text-rose-950 border-2 border-slate-900 py-1 px-2.5 rounded-lg text-[9px] font-game text-center font-bold">
                  ⚔️ SOLO RAID CLEAR BY {quest.role.toUpperCase()}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tag skills utilized in this Quest line */}
      <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
        {quest.skills.map((s, sIdx) => (
          <span
            key={sIdx}
            className="font-mono text-[10px] bg-slate-100 text-slate-800 py-1 px-2 border border-slate-300 rounded font-bold"
          >
            # {s}
          </span>
        ))}
      </div>
    </div>
  );
}

"use client";
import { motion } from "motion/react";
import {
  Zap,
  Shield,
  Sword,
  Heart,
  Trophy,
  Target,
  Flame,
  Dumbbell,
  Ghost,
  SmilePlus,
  Code,
  Database,
  Smartphone,
  Cloud,
} from "lucide-react";
import { cn } from "../lib/utils";
import { portfolioData } from "../lib/portfolio";
import ImageCharacter from "../assets/image-icon.png";
import Image from "next/image";

const iconMap: Record<string, any> = {
  Zap,
  Shield,
  Sword,
  Heart,
  Trophy,
  Target,
  Flame,
  Dumbbell,
  Ghost,
  SmilePlus,
  Code,
  Database,
  Smartphone,
  Cloud,
};

interface MeterBarProps {
  label: string;
  value: number; // 1 to 10
  max?: number;
  color: string;
  iconName: string;
  level: string;
}

const MeterBar = ({
  label,
  value,
  max = 10,
  color,
  iconName,
  level,
}: MeterBarProps) => {
  const Icon = iconMap[iconName] || Code;
  return (
    <div className="mb-6 group">
      <div className="flex justify-between items-end mb-2">
        <div className="flex items-center gap-2">
          <div
            className={cn(
              "p-1.5 comic-border shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
              color,
            )}
          >
            <Icon size={16} className="text-white" />
          </div>
          <span className="font-comic text-lg uppercase tracking-tight">
            {label}
          </span>
        </div>
        <span className="font-mono text-xs font-bold opacity-60">
          LVL {level}
        </span>
      </div>
      <div className="flex gap-1 h-4">
        {[...Array(max)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.1, scaleX: 0 }}
            whileInView={{ opacity: i < value ? 1 : 0.1, scaleX: 1 }}
            transition={{ delay: i * 0.05 }}
            className={cn(
              "flex-1 border border-black/20",
              i < value ? color : "bg-white/5",
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default function Skills() {
  const { combat, system, buffs } = portfolioData.stats;

  return (
    <section
      id="skills"
      className="py-12 md:py-24 px-4 md:px-6 bg-[#0E0E0E] text-white relative overflow-hidden"
    >
      {/* Halftone texture background */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header with Game-style Rank info */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
          <div>
            <motion.h2
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="font-comic text-5xl md:text-8xl text-comic-yellow leading-none mb-2"
            >
              BASE STATS
            </motion.h2>
            <div className="flex items-center gap-4">
              <div className="bg-comic-magenta px-3 py-1 comic-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-1">
                <span className="font-mono text-xs font-bold uppercase">
                  Rank: S-CLASS
                </span>
              </div>
              <div className="font-mono text-xs opacity-50 uppercase tracking-widest italic">
                XP: 420.069 / 1.000.000
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="bg-white/5 border border-white/10 p-4 comic-border flex items-center gap-4">
              <Trophy className="text-comic-yellow" size={32} />
              <div className="text-left">
                <p className="font-mono text-[10px] opacity-50 uppercase leading-none mb-1">
                  Global Reputation
                </p>
                <p className="font-comic text-2xl leading-none">9,999</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-3 order-2 lg:order-1">
            <h3 className="font-comic text-2xl text-comic-cyan mb-6 flex items-center gap-2">
              <Code className="size-5" /> MASTERIES
            </h3>
            {combat.map((stat) => (
              <MeterBar
                key={stat.label}
                label={stat.label}
                value={stat.value}
                color={stat.color}
                iconName={stat.icon}
                level={stat.level}
              />
            ))}
          </div>

          {/* Center Column - Character Slot */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative aspect-[4/5] md:aspect-square flex items-center justify-center"
            >
              {/* Outer comic frame background */}
              <div className="absolute inset-0 bg-white/5 rounded-full blur-3xl opacity-20"></div>

              {/* This is where the user will put their transparent character PNG */}
              <div className="relative w-full h-full flex items-center justify-center group">
                {/* Decorative background circle */}
                <div className="absolute w-[80%] h-[80%] border-4 border-dashed border-white/10 rounded-full animate-[spin_20s_linear_infinite]"></div>

                {/* Character Placeholder / Frame */}
                <div className="relative z-10 w-full h-full flex items-center justify-center bg-transparent border-0 shadow-none overflow-visible">
                  <Image
                    src={ImageCharacter}
                    alt="HP"
                    className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(255,210,30,0.3)]"
                  />
                  {/* Placeholder visual */}
                  <div className="flex flex-col bg-transparent items-center">
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="w-80 h-80 md:w-full md:h-full bg-transparent flex items-center backdrop-blur-sm relative"
                    >
                      <div className="absolute -bottom-4 bg-comic-black border-2 border-comic-yellow px-4 py-1">
                        <span className="font-mono text-xs font-bold uppercase">
                          HP: 100%
                        </span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Floating Status Badges */}
              <motion.div
                animate={{ x: [0, 5, 0], y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-10 left-0 bg-white text-comic-black p-2 comic-border rotate-[-10deg]"
              >
                <p className="font-mono text-[10px] font-bold">
                  BUFF: [COFFEE]
                </p>
              </motion.div>
              <motion.div
                animate={{ x: [0, -5, 0], y: [0, 5, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute bottom-10 right-0 bg-comic-magenta text-white p-2 comic-border rotate-[12deg]"
              >
                <p className="font-mono text-[10px] font-bold">
                  AURA: [TIRED_BUT_GAS]
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - Tech Proficiency */}
          <div className="lg:col-span-3 order-3">
            <h3 className="font-comic text-2xl text-comic-magenta mb-6 flex items-center gap-2">
              <Database className="size-5" /> SYSTEM STACK
            </h3>
            {system.map((stat) => (
              <MeterBar
                key={stat.label}
                label={stat.label}
                value={stat.value}
                color={stat.color}
                iconName={stat.icon}
                level={stat.level}
              />
            ))}
          </div>
        </div>
        <div className="mt-16 pt-12 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="mt-8 p-4 bg-white/5 border border-white/20">
            <p className="font-mono text-[25px] text-white/40 uppercase mb-3 text-center tracking-widest underline underline-offset-4 decoration-comic-magenta">
              Active Buffs
            </p>
            <div className="flex flex-col gap-2">
              {buffs.map((buff) => {
                const BuffIcon = buff.icon
                  ? iconMap[buff.icon] || SmilePlus
                  : null;
                return (
                  <div
                    key={buff.name}
                    className="bg-white/10 px-2 py-1 flex justify-between items-center"
                  >
                    <div className="flex items-center gap-2">
                      {BuffIcon && (
                        <BuffIcon size={12} className={buff.color} />
                      )}
                      <span className="font-mono text-[20px]">
                        {buff.name}
                      </span>
                    </div>
                    <span className={cn("font-mono text-[20px]", buff.color)}>
                      {buff.value}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="bg-white/5 p-6 comic-border">
            <div className="flex justify-between items-center mb-6">
              <h4 className="font-comic text-xl text-comic-magenta uppercase">
                Meme Consumption
              </h4>
              <p className="font-mono text-3xl font-bold text-comic-magenta">
                OVER 9000!
              </p>
            </div>
            <div className="flex gap-2 flex-wrap">
              {["Shitpost", "Doomscroll", "Reels", "X", "Discord"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-white/10 border border-white/20 font-mono text-[10px]"
                  >
                    #{tag}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

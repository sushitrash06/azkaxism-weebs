"use client";

import { motion } from "motion/react";
import { MdTerminal, MdLocalCafe } from "react-icons/md";
import CharacterHeader from "../assets/icon-hero.png";
import { cn } from "../lib/utils";
import Image from "next/image";
import { CatIcon } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="about"
      className="py-10 md:py-20 px-4 md:px-6 overflow-hidden"
      aria-label="About Section"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Column - Intro */}
        <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block bg-comic-magenta px-4 py-1 comic-border -rotate-2 mb-6 self-start"
          >
            <span className="font-comic text-white text-lg md:text-xl tracking-widest uppercase">
              Lv. 99 Frontend Dev
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="font-comic text-5xl sm:text-7xl md:text-9xl leading-[0.8] mb-8"
          >
            AZKA <span className="text-comic-cyan">ANDYA</span>{" "}
            <span className="block text-comic-black">SAFIRA</span>
          </motion.h1>

          <div className="relative mb-8 md:mb-12">
            <p
              className="font-mono text-lg md:text-xl max-w-xl leading-relaxed border-l-4 border-comic-black pl-6"
              role="doc-subtitle"
            >
              A{" "}
              <span className="font-bold underline decoration-comic-yellow decoration-4">
                Frontend Engineer
              </span>
              , problem solver, geeks, and realistic planner from{" "}
              <span className="font-bold italic">Bekasi</span>. Bringing 4+
              years of sleek interfaces and "Deploy & Pray" energy to the table.
            </p>
          </div>

          <div
            className="flex flex-wrap gap-3 md:gap-4"
            role="list"
            aria-label="Professional Specialties"
          >
            {[
              { icon: MdTerminal, color: "text-comic-cyan", label: "Js Nerd" },
              { icon: CatIcon, color: "text-comic-magenta", label: "Weebs" },
              {
                icon: MdLocalCafe,
                color: "text-comic-yellow",
                label: "Caffeine Powered",
              },
            ].map((item, i) => (
              <div
                key={i}
                role="listitem"
                className="bg-white p-2 md:p-3 comic-border flex items-center gap-2 md:gap-3 flex-1 min-w-[140px] justify-center sm:justify-start"
                title={item.label}
              >
                <item.icon
                  className={cn("w-5 h-5", item.color)}
                  aria-hidden="true"
                />
                <span className="font-mono text-[10px] md:text-xs font-bold uppercase tracking-tight">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Character Style Panel */}
        <div className="lg:col-span-5 relative order-1 lg:order-2">
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full md:w-full md:h-full bg-transparent flex items-center justify-center shadow-[10px_10px_0px_0px_rgba(0,0,0,0)]"
          >
            <Image
              src={CharacterHeader}
              alt="Azka Andya Safira - Frontend Developer Character Avatar"
              className="w-full h-full object-contain"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

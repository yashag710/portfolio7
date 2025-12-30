'use client';

import React from 'react';
import Image from 'next/image';
import { DraggableCardContainer, DraggableCardBody } from './ui/Draggable-Cards';

export function Skills() {
  const skills = [
    {
      title: "Blockchain Development",
      image: "/images/skills/blockchain.png",
      className: "absolute top-[8%] left-[8%] md:top-[10%] md:left-[10%] rotate-[-3deg]",
    },
    {
      title: "C++ Language",
      image: "/images/skills/cpp.png",
      className: "absolute top-[20%] left-[18%] md:top-[22%] md:left-[18%] rotate-[2deg]",
    },
    {
      title: "Solidity",
      image: "/images/skills/sol.png",
      className: "absolute top-[70%] left-[8%] md:top-[72%] md:left-[10%] rotate-[-2deg]",
    },
    {
      title: "Javascript",
      image: "/images/skills/js.webp",
      className: "absolute top-[10%] right-[10%] md:top-[12%] md:right-[12%] rotate-[4deg]",
    },
    {
      title: "Docker",
      image: "/images/skills/docker.png",
      className: "absolute top-[25%] right-[18%] md:top-[28%] md:right-[18%] rotate-[-5deg]",
    },
    {
      title: "MongoDB",
      image: "/images/skills/mongo.webp",
      className: "absolute top-[40%] right-[8%] md:top-[42%] md:right-[10%] rotate-[3deg]",
    },
    {
      title: "Next.js",
      image: "/images/skills/nextjs.png",
      className: "absolute top-[60%] right-[15%] md:top-[62%] md:right-[12%] rotate-[-4deg]",
    },
    {
      title: "TypeScript",
      image: "/images/skills/typescript.webp",
      className: "absolute top-[75%] right-[8%] md:top-[78%] md:right-[10%] rotate-[6deg]",
    },
    {
      title: "Tailwind CSS",
      image: "/images/skills/tailwind.webp",
      className: "absolute top-[30%] left-[40%] md:top-[32%] md:left-[45%] rotate-[-5deg]",
    },
    {
      title: "Node.js",
      image: "/images/skills/nodejs.webp",
      className: "absolute top-[50%] left-[50%] md:top-[52%] md:left-[55%] rotate-[4deg]",
    },
  ];

  return (
    <section id="skills" className="relative bg-gradient-to-b from-black to-neutral-900 font-cabin overflow-hidden">
      {/* Top Separator */}
      <div className="relative z-50">
        <div className="mx-auto w-screen border-t border-white/70 opacity-40" />
        <div className="h-4 sm:h-6" />
      </div>

      <div className="py-16 sm:py-20 md:py-24 lg:py-28">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
          <div className="mb-12 sm:mb-16 md:mb-20 relative z-10">
            <h2 className="text-[2.5rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] font-bold uppercase tracking-tight text-white leading-none">
              Skills & Tech<span className="text-gray-500">/</span>
            </h2>
            <p className="mt-4 ml-1 sm:ml-2 max-w-xl text-neutral-400 text-sm sm:text-base md:text-lg">
              Technologies and tools I work with.
            </p>
          </div>

          <DraggableCardContainer className="relative flex min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px] w-full items-center justify-center">
            <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-white/20">
              Drag to explore my skills
            </p>
            {skills.map((skill, index) => (
              <DraggableCardBody
                key={skill.title + index}
                className={skill.className}
              >
                <div className="relative group">
                  <div className="pointer-events-none relative z-10 h-32 w-32 sm:h-40 sm:w-40 md:h-52 md:w-52 lg:h-60 lg:w-60 rounded-2xl bg-neutral-900/80 p-4 sm:p-5 md:p-6 lg:p-7 backdrop-blur-sm border border-white/10 shadow-xl transition-all duration-300 group-hover:border-white/20 group-hover:bg-neutral-900/90">
                    <Image
                      src={skill.image}
                      alt={skill.title}
                      fill
                      sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, (max-width: 1024px) 208px, 240px"
                      className="p-3 sm:p-4 md:p-5 lg:p-6 object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-0 blur-2xl transition duration-300 group-hover:opacity-10" />
                  <h3 className="mt-4 sm:mt-5 text-center text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-neutral-300 opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    {skill.title}
                  </h3>
                </div>
              </DraggableCardBody>
            ))}
          </DraggableCardContainer>
        </div>
      </div>

      {/* Bottom Separator */}
      <div className="relative z-50">
        <div className="h-4 sm:h-6" />
        <div className="mx-auto w-screen border-t border-white/70 opacity-40" />
      </div>
    </section>
  );
}

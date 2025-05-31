'use client';

import React from 'react';
import Image from 'next/image';
import { DraggableCardContainer, DraggableCardBody } from './ui/Draggable-Cards';

export function Skills() {
  const skills = [
    {
      title: "Blockchain Development",
      image: "/images/skills/blockchain.webp",
      className: "absolute top-[10%] left-[10%] md:top-[15%] md:left-[20%] rotate-[-3deg]",
    },
    {
      title: "MongoDB",
      image: "/images/skills/mongodb.webp",
      className: "absolute top-[20%] right-[15%] md:top-[25%] md:right-[25%] rotate-[5deg]",
    },
    {
      title: "React & Next.js",
      image: "/images/skills/nextjs.webp",
      className: "absolute top-[40%] left-[20%] md:top-[45%] md:left-[15%] rotate-[-4deg]",
    },
    {
      title: "TypeScript",
      image: "/images/skills/typescript.webp",
      className: "absolute top-[30%] left-[40%] md:top-[20%] md:left-[45%] rotate-[6deg]",
    },
    {
      title: "Tailwind CSS",
      image: "/images/skills/tailwindcss.webp",
      className: "absolute top-[50%] right-[20%] md:top-[55%] md:right-[25%] rotate-[-5deg]",
    },
    {
      title: "Node.js",
      image: "/images/skills/nodejs.webp",
      className: "absolute top-[65%] left-[25%] md:top-[70%] md:left-[30%] rotate-[4deg]",
    },
    {
      title: "Apache Kafka",
      image: "/images/skills/kafka.webp",
      className: "absolute top-[75%] right-[30%] md:top-[80%] md:right-[20%] rotate-[-6deg]",
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
          <div className="mb-12 sm:mb-16 md:mb-20 text-center relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
              Skills & Technologies
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-neutral-400">
              Technologies and tools I work with
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
                  <div className="pointer-events-none relative z-10 h-28 w-28 sm:h-36 sm:w-36 md:h-44 md:w-44 lg:h-52 lg:w-52 rounded-2xl bg-neutral-900/80 p-3 sm:p-4 md:p-5 lg:p-6 backdrop-blur-sm border border-white/10 shadow-xl transition-all duration-300 group-hover:border-white/20 group-hover:bg-neutral-900/90">
                    <Image
                      src={skill.image}
                      alt={skill.title}
                      fill
                      sizes="(max-width: 640px) 112px, (max-width: 768px) 144px, (max-width: 1024px) 176px, 208px"
                      className="p-2 sm:p-3 md:p-4 lg:p-5 object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-0 blur-2xl transition duration-300 group-hover:opacity-10" />
                  <h3 className="mt-4 sm:mt-5 text-center text-sm sm:text-base md:text-lg lg:text-xl font-medium text-neutral-300 opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
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

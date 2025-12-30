"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const education = [
  {
    year: "2023",
    degree: "Intermediate",
    institution: "City Montessori School",
    points: ["Science & Mathematics", "Passed with distinction"],
  },
  {
    year: "2023 – 2027",
    degree: "B.Tech in Computer Science",
    institution: "IIIT Kota",
    points: ["Core CS foundations", "DSA, Web Development"],
  },
];

export default function Education() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 80%",
            scrub: true,
          },
        }
      );

      gsap.from(".edu-block", {
        opacity: 0,
        y: 28,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.25,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".edu-underline", {
        scaleX: 0,
        transformOrigin: "left",
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.25,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
  <>
    <section
    ref={sectionRef}
    id="education"
    className="bg-black text-white px-6 md:px-16 py-32 overflow-x-hidden"
    >
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-28">
        <h2 className="text-[3rem] md:text-[5rem] font-bold uppercase tracking-tight">
          Education <span className="text-gray-500">/</span>
        </h2>
        <p className="text-gray-400 mt-2 max-w-xl">
          A timeline of academic growth and learning.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-6xl mx-auto flex">
        {/* Vertical Line — narrower */}
        <div className="relative w-8 flex justify-center">
          <div
            ref={lineRef}
            className="w-[2px] bg-white/20 h-full origin-top"
          />
        </div>

        {/* Entries — wider + less left padding */}
        <div className="flex flex-col gap-28 pl-8 w-full">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="edu-block relative group max-w-3xl"
            >
              {/* Dot */}
              <span className="absolute -left-[2.1rem] top-2 w-3.5 h-3.5 rounded-full bg-white transition-transform duration-300 group-hover:scale-125" />

              {/* Content */}
              <span className="text-sm tracking-widest text-gray-500 uppercase">
                {edu.year}
              </span>

              <h3 className="text-2xl md:text-3xl font-semibold mt-2">
                {edu.degree}
              </h3>

              <div className="edu-underline h-[2px] w-20 bg-white/40 mt-2" />

              <p className="text-gray-400 mt-3 text-lg">
                {edu.institution}
              </p>

              <ul className="mt-4 list-disc list-inside text-gray-300 space-y-1">
                {edu.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  
    {/* Bottom Separator Line */}
    <div className="relative z-50">
      <div className="h-6" />
      <div className="mx-auto w-full border-t border-white/70 opacity-40" />
    </div>
  </>
  );
}

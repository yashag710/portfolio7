"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ProjectHoverCard from "./ui/ProjectHoverCard";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  title: string;
  img: string;
}

const projects: Project[] = [
  { title: "Vbloc", img: "/images/projects/proj1.png" },
  { title: "Fraud Detection System", img: "/images/projects/proj2.png" },
  { title: "BagVati Store", img: "/images/projects/proj3.png" },
];

export default function ProjectShowcase() {
  const [id, setId] = useState<string | null>(null);

  const rightDigitRef = useRef<HTMLSpanElement>(null);
  const leftDigitRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = gsap.utils.toArray<HTMLElement>(".project-section");
    let active = 0;

    const flipRightDigit = (newIndex: number) => {
      const nextDigit = (newIndex + 1).toString().padStart(2, "0")[1];

      gsap.to(rightDigitRef.current, {
        rotateX: 90,
        opacity: 0,
        duration: 0.25,
        ease: "power2.in",
        onComplete: () => {
          if (rightDigitRef.current) rightDigitRef.current.textContent = nextDigit;
        },
      });

      gsap.to(rightDigitRef.current, {
        rotateX: 0,
        opacity: 1,
        delay: 0.25,
        duration: 0.25,
        ease: "power2.out",
      });
    };

    sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          if (active !== index) {
            active = index;
            flipRightDigit(index);
          }
        },
        onEnterBack: () => {
          if (active !== index) {
            active = index;
            flipRightDigit(index);
          }
        },
      });
    });

    return () => ScrollTrigger.getAll().forEach((st) => st.kill());
  }, []);

  return (
    <div className="bg-black text-white w-full">
      {/* === MAIN HEADING SECTION === */}
      <div className="px-10 md:px-24 pt-32 pb-20">
        <h2 className="text-[3rem] md:text-[5rem] font-bold uppercase tracking-tight leading-none">
          Selected Projects <span className="text-gray-500">/</span>
        </h2>
        <p className="text-gray-400 text-base md:text-lg mt-4">
          Some of the works that showcase my skills.
        </p>
      </div>

      {/* === PROJECT SECTION === */}
      <section
        id="works"
        ref={containerRef}
        className="w-full flex flex-col md:flex-row items-start justify-between px-10 md:px-16 pb-32 min-h-screen"
      >
        {/* LEFT SIDE COUNTER */}
        <div className="sticky top-0 md:w-[40%] h-screen flex flex-col justify-start pt-20">
          <div className="flex text-[8rem] md:text-[14rem] font-extrabold text-gray-600 leading-none">
            <span ref={leftDigitRef}>0</span>
            <span ref={rightDigitRef} className="origin-bottom inline-block">
              1
            </span>
          </div>
          <p className="uppercase text-gray-500 tracking-[0.3em] mt-2 text-sm ml-3">
            Projects
          </p>
        </div>

        {/* RIGHT SIDE PROJECT LIST */}
        <div className="md:w-[60%] flex flex-col gap-[60vh] pl-8 md:pl-16">
          {projects.map((proj) => (
            <div key={proj.title} className="project-section flex flex-col justify-center items-center min-h-screen relative">
              <div
                onMouseEnter={() => setId(proj.title)}
                onMouseLeave={() => setId(null)}
                className="
                  relative
                  w-[88%] sm:w-[82%] lg:w-[75%]
                  h-[46vh] sm:h-[48vh] md:h-[50vh] lg:h-[52vh]
                  rounded-2xl shadow-2xl
                  flex justify-center items-center overflow-hidden
                "
              >
                <Image
                  src={proj.img}
                  alt={proj.title}
                  fill
                  className="object-contain transition-all duration-300 group-hover:scale-[1.03]"
                />

                {/* Hover Card */}
                {id === proj.title && (
                  <ProjectHoverCard id={proj.title} />
                )}
              </div>

              <h3 className="text-5xl font-semibold mt-10 text-center tracking-wide">{proj.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

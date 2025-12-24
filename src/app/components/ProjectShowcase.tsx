"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  title: string;
  img: string;
}

const projects: Project[] = [
  { title: "Metro Bytes", img: "/images/proj1/img1.png" },
  { title: "Bagvati Store", img: "/images/proj1/img1.png" },
  { title: "Hack the Chain 3.0", img: "/images/proj1/img1.png" },
];

export default function ProjectShowcase() {
  const [current, setCurrent] = useState(0);
  const rightDigitRef = useRef<HTMLSpanElement>(null);
  const leftDigitRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = gsap.utils.toArray<HTMLElement>(".project-section");
    let active = 0;

    const flipRightDigit = (newIndex: number) => {
      const nextDigit = (newIndex + 1).toString().padStart(2, "0")[1]; // Get rightmost digit

      gsap.to(rightDigitRef.current, {
        rotateX: 90,
        opacity: 0,
        duration: 0.25,
        ease: "power2.in",
        onComplete: () => {
          if (rightDigitRef.current) {
            rightDigitRef.current.textContent = nextDigit;
          }
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
            setCurrent(index);
            flipRightDigit(index);
          }
        },
        onEnterBack: () => {
          if (active !== index) {
            active = index;
            setCurrent(index);
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
        <div className="flex flex-col items-start">
          <h2 className="text-[3rem] md:text-[5rem] font-bold uppercase tracking-tight text-white leading-none">
            Selected Projects <span className="text-gray-500">/</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg mt-4 ml-[2rem]">
            Some of the works that showcase my skills.
          </p>
        </div>
      </div>

      {/* === PROJECT SHOWCASE SECTION === */}
      <section
        ref={containerRef}
        className="w-full flex flex-col md:flex-row items-start justify-between px-10 md:px-16 pb-32 relative min-h-screen"
      >
        {/* ==== LEFT SIDE (NUMBER) ==== */}
        <div className="sticky top-0 md:w-[40%] h-screen flex flex-col justify-start items-start pt-20">
          <div className="flex text-[8rem] md:text-[14rem] font-extrabold text-gray-600 leading-none origin-bottom">
            <span ref={leftDigitRef}>0</span>
            <span
              ref={rightDigitRef}
              className="inline-block origin-bottom"
              style={{ transformOrigin: "bottom center" }}
            >
              1
            </span>
          </div>
          <p className="uppercase text-gray-500 tracking-[0.3em] mt-2 text-sm ml-3">
            Projects
          </p>
        </div>

        {/* ==== RIGHT PROJECT SECTIONS ==== */}
        <div className="md:w-[60%] flex flex-col gap-[60vh] pl-8 md:pl-16">
          {projects.map((proj) => (
            <div
              key={proj.title}
              className="project-section flex flex-col justify-center items-center min-h-screen relative"
            >
              <div className="w-[85%] h-[70vh] overflow-hidden rounded-2xl shadow-2xl flex justify-center items-center">
                <Image
                  src={proj.img}
                  alt={proj.title}
                  width={1200}
                  height={800}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-5xl font-semibold mt-10 text-center tracking-wide">
                {proj.title}
              </h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

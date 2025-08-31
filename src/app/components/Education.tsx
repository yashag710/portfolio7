"use client";
import React from "react";

export default function Education() {
  const education = [
    {
      degree: "Intermediate",
      institution: "City Montessori School",
      year: "2023",
      details: [
        "Learning in Science and Mathematics",
        "Passed with Distinction",
      ],
    },
    {
      degree: "Bachelor's Degree in Computer Science",
      institution: "Indian Institute of Information Technology Kota",
      year: "2027 (Ongoing)",
      details: [
        "Major in Computer Science",
        "Relevant coursework: Algorithms, Data Structures, Web Development",
      ],
    },
  ];

  return (
    <section
      id="education"
      className="relative py-16 bg-gradient-to-b from-neutral-900 to-black"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center mb-4">
            <hr className="w-10 border-white/60" />
            <span className="mx-4 text-white/70 text-sm uppercase tracking-wider">
              Education
            </span>
            <hr className="w-10 border-white/60" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            My{" "}
            <span className="font-light italic opacity-80 text-white/70">
              Education
            </span>
          </h2>
        </div>
        <div className="space-y-8">
          {education.map((item, idx) => (
            <div
              key={idx}
              className="relative bg-neutral-900 border border-white/10 rounded-2xl shadow-lg p-8 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white">
                    {item.degree}
                  </h3>
                  <p className="text-white/80 mt-1">{item.institution}</p>
                </div>
                <span className="mt-2 md:mt-0 text-white/60 font-medium text-lg">
                  {item.year}
                </span>
              </div>
              <ul className="mt-4 list-disc list-inside text-white/70 space-y-1">
                {item.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-white/10 to-white/0 opacity-0 blur-2xl transition duration-300 group-hover:opacity-10 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
      {/* Bottom Divider */}
      <div className="mt-16">
        <hr className="border-t border-white/40 opacity-40 w-full" />
      </div>
    </section>
  );
}
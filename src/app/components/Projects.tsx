"use client";

import React from 'react';
import { ThreeDMarquee } from './ui/ThreeDMarquee';

const proj1 = [
  "/images/proj1/img1.png",
  "/images/proj1/img2.png",
  "/images/proj1/img3.png",
  "/images/proj1/img4.png",
  "/images/proj1/img5.png",
  "/images/proj1/img6.png",
  "/images/proj1/img7.png",
  "/images/proj1/img6.png",
  "/images/proj1/img7.png",
  "/images/proj1/img3.png",
  "/images/proj1/img4.png",
  "/images/proj1/img5.png",
  "/images/proj1/img6.png",
  "/images/proj1/img7.png",
  "/images/proj1/img3.png",
  "/images/proj1/img4.png",
  "/images/proj1/img5.png",
  "/images/proj1/img6.png",
  "/images/proj1/img7.png",
];

const proj2 = [
  "/images/proj2/img1.png",
  "/images/proj2/img2.png",
  "/images/proj2/img3.png",
  "/images/proj2/img4.png",
  "/images/proj2/img5.png",
  "/images/proj2/img6.png",
  "/images/proj2/img7.png",
  "/images/proj2/img8.png",
  "/images/proj2/img4.png",
  "/images/proj2/img5.png",
  "/images/proj2/img6.png",
  "/images/proj2/img7.png",
  "/images/proj2/img8.png",
];

const proj3 = [
  "/images/proj3/img1.png",
  "/images/proj3/img2.png",
  "/images/proj3/img3.png",
  "/images/proj3/img4.png",
  "/images/proj3/img2.png",
  "/images/proj3/img3.png",
  "/images/proj3/img4.png",
  "/images/proj3/img2.png",
  "/images/proj3/img3.png",
  "/images/proj3/img4.png",
];

export default function ProjectsPage() {
  return (
    <section className="bg-transparent py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <hr className="w-10 border-gray-600" />
            <span className="mx-4 text-gray-400 text-sm uppercase tracking-wider">
              Projects
            </span>
            <hr className="w-10 border-gray-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-medium text-white">
            My Latest <span className="font-light italic opacity-80">Projects</span>
          </h1>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative bg-gray-900 rounded-xl overflow-hidden aspect-[1/1.2] shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-2">
            <ThreeDMarquee images={proj1} link="https://www.hackthechain.in/" />
          </div>
          <div className="space-y-8">
            <div className="relative bg-gray-900 rounded-xl overflow-hidden aspect-video shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-2">
              <ThreeDMarquee images={proj2} link="#" />
            </div>
            <div className="relative bg-gray-900 rounded-xl overflow-hidden aspect-video shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-2">
              <ThreeDMarquee images={proj3} link="https://tap-ins.vercel.app/" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Montserrat, Nunito } from 'next/font/google';
import { BackgroundBeamWithCollision } from './ui/BackgroundBeamWithCollision';

const montserrat = Montserrat({ subsets: ['latin'] });
const nunito = Nunito({ subsets: ['latin'] });

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const paragraphVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: custom * 0.2, ease: "easeOut" }
  })
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export default function About() {
  return (
    <section className="relative bg-transparent text-white overflow-hidden">
      {/* Top Separator Line */}
      <div className="relative z-50">
        <div className="mx-auto w-screen border-t border-white/70 opacity-40" />
        <div className="h-6" />
      </div>

      <div className="absolute inset-0 -z-10">
        <BackgroundBeamWithCollision className="w-full h-full !bg-[#0a0b0f]" />
      </div>

      {/* Main Content */}
      <div className="relative z-30 flex flex-col min-h-screen px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 md:pt-16 lg:pt-20">
        <div className="max-w-6xl w-full mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          {/* LEFT CONTENT */}
          <div className="w-full lg:w-[55%] order-2 lg:order-1 space-y-6">
            <motion.h1
              variants={headerVariants}
              initial="hidden"
              animate="visible"
              className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight ${montserrat.className}`}
            >
              About-<span className="italic font-normal text-gray-300">Me</span>
            </motion.h1>

            <motion.p
              variants={paragraphVariants}
              custom={1}
              initial="hidden"
              animate="visible"
              className={`text-gray-400 text-sm sm:text-base md:text-lg xl:text-xl leading-relaxed ${nunito.className} max-w-prose`}
            >
              I&apos;m a full stack developer who loves creating solutions that work smoothly on both the front-end and back-end. With a good understanding of business needs, I focus on making systems and applications more efficient and reliable. I enjoy using technology to solve everyday problems and help teams bring ideas to life. Working closely with others, I aim to build easy-to-use and lasting solutions that make a real difference.
            </motion.p>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            className="relative w-full sm:w-[85%] md:w-2/3 lg:w-[45%] aspect-[3/4] max-w-md max-h-[75vh] order-1 lg:order-2 mx-auto lg:mx-0"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
          >
            <div className="absolute inset-0">
              <div className="relative h-full w-full">
                <Image
                  src="/images/photos/yash_front7.webp"
                  alt="Personal portrait"
                  fill
                  className="object-cover object-[center_top] brightness-90 rounded-xl sm:rounded-2xl"
                  priority
                  sizes="(max-width: 768px) 100vw, 45vw"
                  quality={100}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Separator Line */}
      <div className="relative z-50">
        <div className="h-6" />
        <div className="mx-auto w-screen border-t border-white/70 opacity-40" />
      </div>
    </section>
  );
}
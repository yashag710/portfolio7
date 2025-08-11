'use client';

import React from "react";
import { motion } from "framer-motion";
import SmokeVideo from "./ui/SmokeVideo";
import Image from "next/image";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export default function Hero() {
  return (
    <main className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Top Background Section */}
      <div className="h-[50vh] w-full bg-cover bg-center relative">
        <SmokeVideo />
      </div>

      {/* Profile Image - Centered between sections */}
      <div className="absolute left-0 right-0 h-0 top-[50vh] z-30">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.2,
            type: "spring",
            stiffness: 100
          }}
          className="relative -top-[90px] sm:-top-[100px] md:-top-[110px] mx-auto w-fit"
        >
          <motion.div 
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 0 40px 10px rgba(255,255,255,0.1)",
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            className="relative w-[120px] sm:w-[160px] md:w-[200px] aspect-square rounded-full flex items-center justify-center bg-black/80 backdrop-blur-sm shadow-[0_0_30px_8px_rgba(255,255,255,0.08)]"
          >
            {/* Image Container */}
            <div className="relative w-full h-full rounded-full overflow-hidden z-10 group">
              <Image
                src="/images/photos/yash_front6.png"
                alt="Yash"
                fill
                className="object-cover rounded-full scale-[1.08] translate-y-2 transition-transform duration-500 ease-out group-hover:scale-[1.12]"
                sizes="(max-width: 640px) 120px, (max-width: 768px) 160px, 200px"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <div className="flex-1 bg-black relative overflow-hidden z-20 flex flex-col items-center justify-start px-4 sm:px-6 lg:px-8 text-white pt-20 sm:pt-24 md:pt-28 pb-16 sm:pb-20">
        {/* Vertical Line - Modified to stay within Hero */}
        <div className="absolute left-4 sm:left-6 lg:left-8 bottom-0 h-[50vh] hidden lg:block z-40 pointer-events-none">
          <div className="sticky bottom-0 flex flex-col items-center">
            <div className="w-px h-32 sm:h-40 md:h-54 bg-gradient-to-b from-white/30 to-transparent" />
            <div className="rotate-180 text-neutral-500 [writing-mode:vertical-lr] text-xs sm:text-sm tracking-widest mt-6 mb-6">
              2025
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center w-full max-w-[85vw] sm:max-w-[80vw] md:max-w-2xl lg:max-w-3xl mx-auto">
          {/* Status Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02, boxShadow: "0 0 20px 2px rgba(255,255,255,0.1)" }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="border border-white rounded-full px-2 sm:px-2.5 py-0.5 sm:py-1 inline-flex items-center gap-1 sm:gap-1.5 cursor-pointer"
          >
            <div className="relative flex items-center justify-center h-2 w-2">
              <div className="absolute w-3.5 h-3.5 rounded-full bg-green-500/30 animate-ping"></div>
              <div className="absolute w-2.5 h-2.5 rounded-full bg-green-500/60"></div>
              <div className="relative w-2 h-2 rounded-full bg-green-500 shadow-[0_0_5px_2px_rgba(74,222,128,0.5)]"></div>
            </div>
            <span className="text-sm md:text-base text-green-500 font-medium">Available for work</span>
          </motion.div>

          {/* Name */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 sm:mt-4 md:mt-6 select-none text-center"
          >
            Yash <span className="italic font-light">Agarwal</span>
          </motion.h1>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-400 text-center mt-2 sm:mt-3"
          >
            Full Stack Developer
          </motion.p>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.9,
              scale: {
                type: "spring",
                stiffness: 300
              }
            }}
            className="mt-4 sm:mt-6 flex items-center gap-4 sm:gap-6 text-lg sm:text-xl md:text-2xl"
          >
            {/* Social Icons */}
            <a href="https://github.com/yashag710" target="_blank" rel="noopener noreferrer" 
               className="text-white/70 hover:text-white transition-colors duration-200">
              <FaGithub />
            </a>
            <span className="text-gray-600">|</span>
            <a href="https://x.com/yashag710" target="_blank" rel="noopener noreferrer"
               className="text-white/70 hover:text-white transition-colors duration-200">
              <FaXTwitter />
            </a>
            <span className="text-gray-600">|</span>
            <a href="https://www.linkedin.com/in/yash-agarwalcr710" target="_blank" rel="noopener noreferrer"
               className="text-white/70 hover:text-white transition-colors duration-200">
              <FaLinkedinIn />
            </a>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
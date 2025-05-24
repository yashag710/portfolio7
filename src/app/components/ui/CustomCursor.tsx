'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Check if hovering over clickable element
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a'
      );
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Large circle */}
      <motion.div
        className="fixed hidden lg:block w-8 h-8 pointer-events-none z-[100]"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1
        }}
      >
        <div className={`w-full h-full rounded-full border ${isPointer ? 'border-white/40' : 'border-white/20'}`} />
      </motion.div>

      {/* Small dot */}
      <motion.div
        className="fixed hidden lg:block w-1 h-1 bg-white rounded-full pointer-events-none z-[100]"
        animate={{
          x: mousePosition.x - 2,
          y: mousePosition.y - 2,
          scale: isPointer ? 0 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 15,
          mass: 0.1
        }}
      />
    </>
  );
}
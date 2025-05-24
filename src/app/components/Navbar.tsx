'use client';
import React, { useEffect, useState } from 'react';
import Logo from './ui/Logo';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      x: '0%',
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-white/10 transition-all duration-300 ${
        isScrolled ? 'bg-black/40 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="flex justify-between items-center px-4 md:px-8 py-2 h-[80px] md:h-[90px] max-w-7xl mx-auto w-full">
        <div className="flex-shrink-0">
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 ml-auto mr-8">
          <a
            href="#"
            className="text-gray-200/90 hover:text-white transition-colors text-lg font-cabin"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-200/90 hover:text-white transition-colors text-lg font-cabin"
          >
            Works
          </a>
          <a
            href="#"
            className="text-gray-200/90 hover:text-white transition-colors text-lg font-cabin"
          >
            Resume
          </a>
          <a
            href="#"
            className="text-gray-200/90 hover:text-white transition-colors text-lg font-cabin"
          >
            About
          </a>
        </nav>

        {/* Desktop Contact Button */}
        <button className="hidden md:block bg-white/90 hover:bg-white text-black px-6 py-2.5 rounded-full text-base font-medium font-cabin shadow-lg transition-colors">
          Contact
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white p-2"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed top-[64px] right-0 w-full h-screen bg-black/95 backdrop-blur-lg md:hidden"
            >
              <nav className="flex flex-col items-center gap-8 pt-12">
                <a
                  href="#"
                  className="text-gray-200/90 hover:text-white transition-colors text-xl font-cabin"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-gray-200/90 hover:text-white transition-colors text-xl font-cabin"
                >
                  Works
                </a>
                <a
                  href="#"
                  className="text-gray-200/90 hover:text-white transition-colors text-xl font-cabin"
                >
                  Resume
                </a>
                <a
                  href="#"
                  className="text-gray-200/90 hover:text-white transition-colors text-xl font-cabin"
                >
                  About
                </a>
                <button className="bg-white/90 hover:bg-white text-black px-6 py-2.5 rounded-full text-lg font-medium font-cabin shadow-lg transition-colors">
                  Contact
                </button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;

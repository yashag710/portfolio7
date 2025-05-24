'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Logo() {
  return (
    <Link href="/" className="relative group flex items-center">
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        className="relative w-[180px] h-[55px] sm:w-[220px] sm:h-[65px] md:w-[260px] md:h-[75px]"
      >
        <Image
          src="/images/logos/logo.png"
          alt="Yash.dev Logo"
          fill
          priority
          className="object-contain object-left"
          sizes="(max-width: 640px) 180px, (max-width: 768px) 220px, 260px"
          quality={100}
        />
      </motion.div>
    </Link>
  );
}
'use client';

import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const DraggableCardBody = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <motion.div
      drag
      dragConstraints={{
        top: -100,
        right: 100,
        bottom: 100,
        left: -100,
      }}
      dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
      dragElastic={0.2}
      whileDrag={{ scale: 1.05, zIndex: 20 }}
      className={cn("absolute cursor-grab active:cursor-grabbing", className)}
    >
      {children}
    </motion.div>
  );
};

export const DraggableCardContainer = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className={cn("relative", className)}>
      {children}
    </div>
  );
};
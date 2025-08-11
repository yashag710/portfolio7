'use client';
import React, { useRef, createContext, useContext } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

// Context to provide drag constraints ref
const DragConstraintContext = createContext<React.RefObject<Element | null> | null>(null);

export const DraggableCardContainer = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  const containerRef = useRef(null);
  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <DragConstraintContext.Provider value={containerRef}>
        {children}
      </DragConstraintContext.Provider>
    </div>
  );
};

export const DraggableCardBody = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  const dragRef = useContext(DragConstraintContext);
  return (
    <motion.div
      drag
      dragConstraints={dragRef ?? false}
      dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
      dragElastic={0.2}
      whileDrag={{ scale: 1.05, zIndex: 20 }}
      className={cn("absolute cursor-grab active:cursor-grabbing", className)}
    >
      {children}
    </motion.div>
  );
};
'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
}

export default function Button({ children, onClick, className = '', type = 'button' }: ButtonProps) {
  return (
    <motion.button
      whileHover="hover"
      initial="initial"
      type={type}
      onClick={onClick}
      className={`relative px-8 py-4 bg-foreground text-background font-sans text-xs tracking-[0.3em] uppercase overflow-hidden transition-colors border border-foreground ${className}`}
    >
      <motion.div
        variants={{
          initial: { x: '-101%' },
          hover: { x: 0 }
        }}
        transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
        className="absolute inset-0 bg-accent"
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}

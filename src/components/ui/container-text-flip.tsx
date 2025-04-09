"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ContainerTextFlipProps {
  words?: string[];
  interval?: number;
  className?: string;
  textClassName?: string;
  animationDuration?: number;
}

export function ContainerTextFlip({
  words = ["better", "modern", "beautiful", "awesome"],
  interval = 3000,
  className,
  textClassName,
  animationDuration = 700,
}: ContainerTextFlipProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [width, setWidth] = useState(100);
  const textRef = React.useRef<HTMLDivElement>(null);

  const updateWidthForWord = () => {
    if (textRef.current) {
      const textWidth = textRef.current.scrollWidth + 30;
      setWidth(textWidth);
    }
  };

  useEffect(() => {
    updateWidthForWord();
  }, [currentWordIndex]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [words, interval]);

  return (
    <motion.div
      layout
      animate={{ width }}
      transition={{ duration: animationDuration / 2000 }}
      className={cn(
  "relative inline-block rounded-lg pt-2 pb-3 text-center text-4xl font-bold  md:text-7xl text-white",
  "[background:linear-gradient(to_bottom,#374151,#1f2937)]",
  "shadow-[inset_0_-1px_#10171e,inset_0_0_0_1px_hsla(205,89%,46%,.24),_0_4px_8px_#00000052]",
  className
)}

      key={words[currentWordIndex]}
    >
      <motion.div
        transition={{
          duration: animationDuration / 1000,
          ease: "easeInOut",
        }}
        className={cn("inline-block", textClassName)}
        ref={textRef}
      >
        {words[currentWordIndex]}
      </motion.div>
    </motion.div>
  );
  
}

"use client";

import React from "react";
import styles from "../styles/hero.module.css";
import { ContainerTextFlip } from "./ui/container-text-flip";
import { motion, LayoutGroup } from "framer-motion";
import { cn } from "@/lib/utils";
import PalmeraOrbit from "@/components/Orbit";

const Hero: React.FC = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroContentWrapper}>
        <LayoutGroup>
          <motion.div
            layout
            className={cn(
              styles.heroText,
              "text-4xl font-bold text-black md:text-7xl leading-tight"
            )}
          >
            <div>Joel Vargas,</div>
            <ContainerTextFlip
              words={[
                "IOS Developer",
                "Youtuber",
                "Mexican",
                "Awesome",
                "Student",
                "Photographer",
                "Weird",
              ]}
            />
          </motion.div>
        </LayoutGroup>

        <div className={styles.heroImageContainer}>
          <PalmeraOrbit />
        </div>
      </div>
    </div>
  );
};

export default Hero;

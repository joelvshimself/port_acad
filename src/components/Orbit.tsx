"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../styles/palmera-orbit.module.css";

const Orbit = () => {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <div className={styles.centralImageWrapper}>
        <Image
          src="/fak.JPG"
          alt="Yo Mero"
          width={400}
          height={600}
          objectFit="cover"
          className={styles.centralImage}
          priority
        />
      </div>

      {/* Orbiting Images */}
      <div className={styles.orbit}>
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className={`${styles.orbitImageWrapper} ${styles[`pos${i}`]}`}
          >
            <Image
              src={`/orbit${i + 1}.png`}
              alt={`orbita ${i + 1}`}
              width={50}
              height={50}
              className={styles.orbitImage}
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Orbit;

'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import styles from '../styles/mycovervisual.module.css';

const Mycovervisual: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'], // 0 a 1 dentro del contenedor de 200vh
    });

    // Scale de 1 a 0.4 durante el scroll total
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.4]);
      
      // Ahora usa `smoothProgress` en lugar de `scrollYProgress`
      const translateY = useTransform(
        scrollYProgress,
        [0, 0.25, 0.5, 0.75, 1],
        ['0%', '25%', '100%', '135%', '200%']
      );

    return (
        <div ref={ref} className={styles.container}>
            <motion.div
            className={styles.imageWrapper}
            style={{ translateY, scale }}
            transition={{
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1] // curva Bezier tipo 'ease'
            }}
            >
                <Image
                    src="/globe.svg"
                    alt="Hero Image"
                    fill
                    priority
                    className={styles.heroImage}
                    style={{ objectFit: 'cover' }}
                />
            </motion.div>
        </div>
    );
};

export default Mycovervisual;

'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from '../styles/mycovervisual.module.css';

const Mycovervisual: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end end'],
    });

    const scale = useTransform(scrollYProgress, [0, 1.3], [1, 0.4]);
    const translateY = useTransform(
        scrollYProgress,
        [0, 0.25, 0.5,0.65, 0.75, 1],
        ['0%', '13%', '80%', '90%','135%', '200%']
    );

    // Texto inicial
    const initialTextOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
    const initialTextY = useTransform(scrollYProgress, [0, 0.3], ['0%', '-20%']);

    // Texto final
    const finalTextOpacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);
    const finalTextY = useTransform(scrollYProgress, [0.8, 1], ['20%', '0%']);

    return (
        <div ref={ref} className={styles.container}>
            <motion.div
                className={styles.imageWrapper}
                style={{ translateY, scale }}
                transition={{
                    duration: 0.5,
                    ease: [0.25, 0.1, 0.25, 0.5]
                }}
            >
                <Image
                    src="/pc.png"
                    alt="Hero Image"
                    fill
                    priority
                    className={styles.heroImage}
                />
            </motion.div>

            {/* Texto inicial */}
            <motion.div
                className={styles.initialText}
                style={{ opacity: initialTextOpacity, translateY: initialTextY }}
            >
                <h1>
                    Alpinist who  <br /> loves to code
                    
                </h1>
            </motion.div>


            {/* Texto final */}
            <motion.div
                className={styles.finalText}
                style={{ opacity: finalTextOpacity, translateY: finalTextY }}
            >
                <h1>Wanna see more?</h1>
            </motion.div>
        </div>
    );
};

export default Mycovervisual;

import React from 'react';
import styles from '../styles/navbar.module.css';

const Navbar: React.FC = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.projectName}>Joel Vargas</div>
            <div className={styles.buttonsContainer}>
                <a href="#inicio" className={styles.button}>Home</a>
                <a href="#contacto" className={styles.button}>Proyects</a>
            </div>
        </nav>
    );
};

export default Navbar;

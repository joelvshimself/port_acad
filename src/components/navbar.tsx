import React from 'react';
import styles from '../styles/navbar.module.css';

const Navbar: React.FC = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.projectName}>Mi Proyecto</div>
            <div className={styles.buttonsContainer}>
                <button className={styles.button}>Inicio</button>
                <button className={styles.button}>Servicios</button>
                <button className={styles.button}>Contacto</button>
            </div>
        </nav>
    );
};

export default Navbar;

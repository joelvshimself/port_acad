import Styles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <div className={Styles["footer-container"]}>
        <div className={Styles["footer-grid"]}>
          <div>
            <h4 className={Styles["footer-title"]}>Portfolio</h4>
            <ul className={Styles["footer-list"]}>
              <li><a href="#contacto" className={Styles["footer-link"]}>Projects</a></li>
            </ul>
          </div>
          <div>
            <h4 className={Styles["footer-title"]}>Social</h4>
            <ul className={Styles["footer-list"]}>
              <li><a href="https://github.com/joelvshimself" target="_blank" className={Styles["footer-link"]}>GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/joel-vargas-reynoso/" target="_blank" className={Styles["footer-link"]}>LinkedIn</a></li>
              <li><a href="https://www.youtube.com/@SwiftCrew4u" target="_blank" className={Styles["footer-link"]}>Youtube</a></li>
            </ul>
          </div>
          <div className={Styles["footer-about"]}>
            <h4 className={Styles["footer-title"]}>About This Site</h4>
            <p className={Styles["footer-description"]}>
              Designed and developed by Joel using React, Next.js and love for clean interfaces.
            </p>
          </div>
        </div>

        <div className={Styles["footer-bottom"]}>
          <span>© {new Date().getFullYear()} Joel Vargas. All rights reserved.</span>
          <div className={Styles["footer-links"]}>
            <a href="/privacy" className={Styles["footer-link"]}>Privacy</a>
            <a href="/terms" className={Styles["footer-link"]}>Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

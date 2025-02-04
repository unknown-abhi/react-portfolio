// src/components/Footer/Footer.tsx
import React from "react";
import styles from "./Footer.module.css";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaFileDownload,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3 className={styles.sectionTitle}>JAHNAVI</h3>
          <p className={styles.sectionText}>
            Legal professional dedicated to delivering strategic solutions and
            exceptional client service.
          </p>
        </div>

        <div className={styles.footerSection}>
          <h3 className={styles.sectionTitle}>Quick Links</h3>
          <ul className={styles.linkList}>
            <li>
              <a href="#projects" className={styles.footerLink}>
                Projects
              </a>
            </li>
            <li>
              <a href="#about" className={styles.footerLink}>
                About
              </a>
            </li>
            <li>
              <a href="#contact" className={styles.footerLink}>
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3 className={styles.sectionTitle}>Connect</h3>
          <div className={styles.socialLinks}>
            <a href="mailto:your@email.com" className={styles.socialLink}>
              <FaEnvelope className={styles.socialIcon} />
            </a>
            <a href="#" className={styles.socialLink}>
              <FaLinkedin className={styles.socialIcon} />
            </a>
            <a href="#" className={styles.socialLink}>
              <FaFileDownload className={styles.socialIcon} />
            </a>
            <a href="#" className={styles.socialLink}>
              <FaGithub className={styles.socialIcon} />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p className={styles.copyright}>
          &copy; 2025 Jahnavi. All rights reserved.
        </p>
        <p className={styles.legalLinks}>
          <a href="#privacy" className={styles.legalLink}>
            Privacy Policy
          </a>
          <span className={styles.divider}>|</span>
          <a href="#terms" className={styles.legalLink}>
            Terms of Service
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

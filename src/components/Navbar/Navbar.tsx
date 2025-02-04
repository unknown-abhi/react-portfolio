// src/components/Navbar/Navbar.tsx
import React from "react";
import Button from "../ui/Button";
import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <h1 className={styles.logo}>
          {/* <span className={styles.logoHighlight}>JAH</span>NAVI */}
        </h1>
        <div className={styles.navLinks}>
          <Button
            variant="ghost"
            className={styles.navButton}
            hoverEffect="scale"
          >
            Projects
          </Button>
          <Button
            variant="ghost"
            className={styles.navButton}
            hoverEffect="scale"
          >
            About
          </Button>
          <Button
            variant="ghost"
            className={styles.navButton}
            hoverEffect="scale"
          >
            Contact
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

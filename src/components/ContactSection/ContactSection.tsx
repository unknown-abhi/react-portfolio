// src/components/ContactSection/ContactSection.tsx
import React from "react";
import styles from "./ContactSection.module.css";

const ContactSection: React.FC = () => {
  return (
    <section className={styles.contact}>
      <div>
        <h2>Contact Me</h2>
        <p>Have some questions?</p>
      </div>
      <div className={styles.contactButton}>
        <a href="mailto:julia@example.com">Email Me</a>
      </div>
    </section>
  );
};

export default ContactSection;

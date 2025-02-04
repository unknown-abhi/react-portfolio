import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Card from "../components/ui/Card";
import Footer from "../components/Footer/Footer";
import Profile from "../assets/images/profile.jpeg";
import LegalSkillsList from "../components/LegalSkillsList/LegalSkillsList";
import styles from "./HomePage.module.css";
import {
  FaFacebook,
  FaQuestionCircle,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.grid}>
        {/* Profile Section */}
        <Card className={`${styles.card} ${styles.profileCard}`}>
          <div className={styles.profileContainer}>
            <div className={styles.imageWrapper}>
              <img
                src={Profile}
                alt="Jahnavi Professional Portrait"
                className={styles.profileImage}
                loading="lazy"
              />
            </div>
            <div className={styles.profileContent}>
              <header className={styles.profileHeader}>
                <h1 className={styles.name}>Jahnavi</h1>
                <p className={styles.professionalTagline}>
                  Legal Professional | Case Strategy Specialist | Legal Research
                  Expert
                </p>
              </header>

              <div className={styles.profileBody}>
                <p className={styles.introText}>
                  Accomplished legal specialist with 2+ years of demonstrated
                  success in delivering strategic legal solutions. Core
                  competencies include:
                </p>

                <ul className={styles.expertiseGrid}>
                  {[
                    "Comprehensive Legal Research & Analysis",
                    "Precision Document Drafting & Review",
                    "End-to-End Case Management",
                    "Litigation Support & Dispute Resolution",
                  ].map((item, index) => (
                    <li key={index} className={styles.expertiseItem}>
                      <span className={styles.expertiseIcon}>▹</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <blockquote className={styles.coreStatement}>
                  "My professional journey has been defined by transforming
                  complex legal challenges into actionable strategies,
                  consistently driving favorable outcomes through meticulous
                  preparation and analytical rigor."
                </blockquote>

                <section className={styles.valueSection}>
                  <h2 className={styles.sectionTitle}>
                    Strategic Value Proposition
                  </h2>
                  <div className={styles.valueContent}>
                    <p>
                      I combine deep regulatory knowledge with operational
                      excellence to:
                    </p>
                    <ul className={styles.valueList}>
                      {[
                        "Enhance case preparation efficiency",
                        "Mitigate organizational legal risk",
                        "Streamline document management processes",
                        "Support informed decision-making through rigorous analysis",
                      ].map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </Card>

        {/* Skills Section */}
        <Card className={`${styles.card} ${styles.skillsCard}`}>
          <div className={styles.cardContent}>
            <LegalSkillsList />
          </div>
        </Card>

        {/* About Section */}
        <Card className={`${styles.card} ${styles.aboutCard}`}>
          <p className={styles.aboutText}>
            I am a highly motivated and dedicated law professional with over a
            year of experience in the legal field, seeking to further develop my
            career by contributing to a dynamic legal team. With a strong
            foundation in legal principles, research, and analysis, I have
            gained hands-on experience in drafting legal documents, assisting in
            case preparation, and supporting various legal proceedings.
          </p>
        </Card>

        {/* Contact Section */}
        <Card className={`${styles.card} ${styles.contactCard}`}>
          <div className={styles.contactContainer}>
            <div className={styles.contactHeader}>
              <FaQuestionCircle className={styles.contactIcon} />
              <h2 className={styles.contactTitle}>Have Questions?</h2>
              <p className={styles.contactSubtitle}>
                Let's Start a Conversation
              </p>
            </div>

            <div className={styles.contactMethods}>
              <div className={styles.methodCard}>
                <FaEnvelope className={styles.methodIcon} />
                <div className={styles.methodDetails}>
                  <h3>Email Me</h3>
                  <a
                    href="mailto:your@email.com"
                    className={styles.contactLink}
                  >
                    your@email.com
                  </a>
                </div>
              </div>

              <div className={styles.methodCard}>
                <FaPhone className={styles.methodIcon} />
                <div className={styles.methodDetails}>
                  <h3>Call Me</h3>
                  <a href="tel:+1234567890" className={styles.contactLink}>
                    +123 456 7890
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.socialSection}>
              <p className={styles.socialText}>Connect via social media:</p>
              <div className={styles.socialLinks}>
                {[
                  { icon: <FaLinkedin />, name: "LinkedIn" },
                  { icon: <FaTwitter />, name: "Twitter" },
                  { icon: <FaInstagram />, name: "Instagram" },
                  { icon: <FaFacebook />, name: "Facebook" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={`#${social.name.toLowerCase()}`}
                    className={styles.socialLink}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;

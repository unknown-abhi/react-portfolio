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
  const processSteps = [
    {
      title: "Initial Consultation",
      content:
        "Schedule an initial consultation to discuss your legal needs. Whether it's a one-time project or ongoing support, we'll review your requirements.",
    },
    {
      title: "Agreement & Scope of Work",
      content:
        "Once we've discussed your needs, I'll send you a service agreement outlining the details of the project, timelines, and pricing.",
    },
    {
      title: "Work Commencement",
      content:
        "Once the agreement is finalized, I'll start working on your project, keeping you updated on the progress along the way.",
    },
    {
      title: "Ongoing Support",
      content:
        "Even after the completion of the project, I'm available for follow-up questions, revisions, or additional services.",
    },
  ];

  return (
    <div className={styles.container}>
      <Navbar />

      {/* Row 1: Profile & Skills */}
      <div className={styles.rowOne}>
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
      </div>

      {/* Row 2: Services, Process, and Contact */}
      <div className={styles.rowTwo}>
        {/* Services Section */}
        <Card className={`${styles.card} ${styles.chooseCard}`}>
          <div className={styles.cardContent}>
            <h2 className={styles.sectionTitle}>
              Why Choose Our Legal Services?
            </h2>
            <div className={styles.serviceReasons}>
              {[
                {
                  title: "Professional Expertise",
                  content:
                    "As a law graduate with a passion for legal writing and research, I bring deep legal knowledge and practical skills to all projects.",
                },
                {
                  title: "Tailored Services",
                  content:
                    "I customize my services to meet the specific needs of each client, ensuring the highest level of satisfaction.",
                },
                {
                  title: "Affordable Pricing",
                  content:
                    "I offer competitive rates, making legal services accessible for individuals, startups, and small businesses.",
                },
                {
                  title: "High-Quality Work",
                  content:
                    "Whether it's research, contract drafting, or blog writing, I deliver professional, clear, and well-organized work that meets the highest standards.",
                },
                {
                  title: "Confidentiality & Integrity",
                  content:
                    "Client confidentiality is a priority, and I work with integrity, ensuring ethical and reliable legal services.",
                },
              ].map((item, index) => (
                <div key={index} className={styles.serviceItem}>
                  <h3 className={styles.serviceTitle}>{item.title}</h3>
                  <p className={styles.serviceContent}>{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Process Section */}
        <Card className={`${styles.card} ${styles.processCard}`}>
          <div className={styles.cardContent}>
            <h2 className={styles.sectionTitle}>How to Get Started?</h2>
            <ol className={styles.processSteps}>
              {processSteps.map((step, index) => (
                <li
                  key={index}
                  className={`${styles.processStep} ${styles.initialConsultation}`}
                >
                  <div className={styles.stepNumber}>{index + 1}</div>
                  <div className={styles.stepContent}>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepDescription}>{step.content}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
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

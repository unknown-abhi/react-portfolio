import React, { useState } from "react";
import styles from "./LegalSkillsList.module.css";
import {
  FiChevronDown,
  FiChevronUp,
  FiDollarSign,
  FiClock,
  FiFileText,
} from "react-icons/fi";

const LegalSkillsList: React.FC = () => {
  const services = [
    {
      title: "Legal Content Development",
      subPoints: [
        "Comprehensive legal blog creation for firms and corporate clients",
        "Analysis of recent judicial precedents and legislative updates",
        "Simplification of complex jurisprudence for public consumption",
      ],
      pricing: ["INR ₹1499/- per blog"],
    },
    {
      title: "Jurisprudential Research Services",
      subPoints: [
        "Multi-jurisdictional legal analysis for complex cases",
        "Comparative law studies across international frameworks",
        "Precedent mapping and judicial trend analysis",
      ],
      pricing: ["INR ₹999/- per research project"],
    },
    {
      title: "Academic Legal Scholarship",
      subPoints: [
        "Peer-reviewed article composition for law journals",
        "Thesis development and doctrinal research support",
        "Legal methodology and citation framework guidance",
      ],
      pricing: [
        "INR ₹20/- per page (Articles)",
        "INR ₹30/- per page (Dissertations)",
        "INR ₹199/- (Research Proofreading)",
      ],
    },
    {
      title: "Contractual Documentation Services",
      subPoints: [
        "Drafting of commercial agreements and complex covenants",
        "M&A documentation and due diligence support",
        "Regulatory-compliant policy framework development",
      ],
      pricing: ["INR ₹2499/- per agreement"],
    },
    {
      title: "Alternative Dispute Resolution Services",
      subPoints: [
        "Mediation protocol development and implementation",
        "Arbitration framework design for commercial entities",
        "Conflict resolution workshop facilitation",
      ],
      pricing: ["INR ₹999/- per hour"],
    },
    {
      title: "Corporate Legal Advisory",
      subPoints: [
        "Regulatory compliance program development",
        "Intellectual property portfolio management strategy",
        "Corporate governance framework optimization",
      ],
      pricing: ["INR ₹799/- per hour"],
    },
  ];

  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleReadMore = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className={styles.legalServices}>
      <header className={styles.header}>
        <h1 className={styles.title}>Professional Legal Services</h1>
        <p className={styles.subtitle}>
          Transparent Pricing | Expert Delivery | Client-Centric Solutions
        </p>
      </header>

      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <article key={index} className={styles.serviceCard}>
            <div className={styles.cardHeader}>
              <div className={styles.serviceNumber}>0{index + 1}</div>
              <h2 className={styles.serviceTitle}>{service.title}</h2>

              <div className={styles.pricingSection}>
                {service.pricing.map((price, idx) => (
                  <div key={idx} className={styles.priceItem}>
                    {price.includes("hour") ? (
                      <FiClock className={styles.priceIcon} />
                    ) : price.includes("page") ? (
                      <FiFileText className={styles.priceIcon} />
                    ) : (
                      <FiDollarSign className={styles.priceIcon} />
                    )}
                    <div>
                      <span className={styles.currency}>INR </span>
                      <span className={styles.amount}>
                        {price.split("/-")[0].split("₹")[1]}/-
                      </span>
                      <span className={styles.rate}>
                        {price.split("/- ")[1]}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`${styles.collapsibleContent} ${
                expanded === index ? styles.expanded : ""
              }`}
            >
              <ul className={styles.serviceList}>
                {service.subPoints.map((point, idx) => (
                  <li key={idx} className={styles.listItem}>
                    <span className={styles.bullet}></span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <button
              className={styles.readMoreBtn}
              onClick={() => toggleReadMore(index)}
              aria-expanded={expanded === index}
            >
              {expanded === index ? (
                <>
                  <span>Collapse Details</span>
                  <FiChevronUp className={styles.icon} />
                </>
              ) : (
                <>
                  <span>View Details</span>
                  <FiChevronDown className={styles.icon} />
                </>
              )}
            </button>
          </article>
        ))}
      </div>
    </div>
  );
};

export default LegalSkillsList;

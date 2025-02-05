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
      title: "Legal Blog Writing & Content Creation",
      subPoints: [
        "Crafting well-researched and informative blogs, articles, and other written content for legal firms, businesses, and individual clients.",
        "Topics may include:",
        "Legal updates, news, and analyses",
        "Explaining complex legal concepts in layman's terms",
        "Case studies, legal tips, and guides on specific areas of law",
        "Content for websites, newsletters, and marketing materials",
      ],
      pricing: ["INR ₹1499/- per blog"],
    },
    {
      title: "Legal Research & Analysis",
      subPoints: [
        "Conducting in-depth legal research for lawyers, academic institutions, or businesses.",
        "Providing well-organized and structured research reports, including:",
        "Case law summaries",
        "Legal precedents",
        "Statutory law analysis",
        "Comparative legal research (comparisons between different jurisdictions)",
        "Supporting law firms and professionals with their ongoing projects or case preparation.",
      ],
      pricing: ["INR ₹999/- per research project"],
    },
    {
      title: "Academic Legal Writing & Research",
      subPoints: [
        "Writing legal papers, articles, and research reports for academic purposes.",
        "Assistance with:",
        "Legal dissertations, thesis, and essays",
        "Writing and proofreading academic papers",
        "Research papers on contemporary legal issues",
        "Publishing academic work in law journals",
      ],
      pricing: [
        "INR ₹20/- per page (Articles)",
        "INR ₹30/- per page (Dissertations)",
        "INR ₹199/- (Research Proofreading)",
      ],
    },
    {
      title: "Contract Drafting & Review",
      subPoints: [
        "Drafting, reviewing, and editing various types of legal contracts, including:",
        "Service Agreements",
        "Partnership Agreements",
        "Non-Disclosure Agreements (NDAs)",
        "Lease and Rent Agreements",
        "Employment Contracts",
        "Vendor and Supplier Contracts",
        "Terms of Service and Privacy Policies",
        "Providing detailed explanations of contract clauses for clients to ensure complete understanding and legal safety.",
      ],
      pricing: ["INR ₹2499/- per agreement"],
    },
    {
      title: "Mediation and Alternative Dispute Resolution (ADR)",
      subPoints: [
        "Assisting individuals or organizations in resolving conflicts outside the courtroom.",
        "Providing:",
        "Mediation services to facilitate discussions between parties in dispute",
        "Conflict resolution strategies and techniques",
        "Guidance on creating fair settlements",
        "Supporting businesses and individuals in avoiding litigation through constructive dialogue and problem-solving.",
      ],
      pricing: ["INR ₹999/- per hour"],
    },
    {
      title: "Client Counselling & Legal Advisory",
      subPoints: [
        "Providing personalized legal guidance and advice on a range of topics, such as:",
        "Business formation and compliance",
        "Intellectual property protection",
        "Legal rights and obligations",
        "Family law and personal legal matters",
        "Offering ongoing consultation to help clients navigate their legal concerns in a non-litigation setting.",
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

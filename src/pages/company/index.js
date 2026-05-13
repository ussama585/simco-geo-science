"use client";

import { useState } from "react";

import styles from "@/styles/company/Company.module.scss";
import AboutSection from "../about-us";
import HseSection from "../hse";
import ManagementSection from "../management";
import WhySimcoeSection from "../why-simcoe";
import PrivacySection from "../privacy-policy";

const tabs = [
  { key: "about", label: "About Us" },
  { key: "hse", label: "Health, Safety & Environment" },
  { key: "management", label: "Management" },
  { key: "why", label: "Why Simcoe" },
  { key: "privacy", label: "Privacy Policy" },
];

export default function CompanyPage() {
  const [activeTab, setActiveTab] = useState("about");

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return <AboutSection />;

      case "hse":
        return <HseSection />;

      case "management":
        return <ManagementSection />;

      case "why":
        return <WhySimcoeSection />;

      case "privacy":
        return <PrivacySection />;

      default:
        return <AboutSection />;
    }
  };

  return (
    <section className={styles.companyPage}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={styles.topTabs}>
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveTab(tab.key)}
                  className={`${styles.topTabBtn} ${activeTab === tab.key ? styles.activeTab : ""
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="col-12">
            <div className={styles.contentArea}>
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { useState } from "react";

import styles from "@/styles/company/Company.module.scss";
import AboutSection from "../components/page/company/AboutSection";
import HseSection from "../components/page/company/HseSection";
import ManagementSection from "../components/page/company/ManagementSection";
import WhySimcoeSection from "../components/page/company/WhySimcoeSection";
import PrivacySection from "../components/page/company/PrivacySection";

const tabs = [
  { key: "about", label: "About Us" },
  { key: "why", label: "Why Simcoe" },
  { key: "management", label: "Management" },
  { key: "hse", label: "Health, Safety & Environment" },
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
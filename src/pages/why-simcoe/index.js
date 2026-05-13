import {
  Users,
  Compass,
  Cpu,
  Handshake,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

import styles from "@/styles/why-simcoe/WhySimcoe.module.scss";

import bg from "@/assets/images/why-simcoe/sm-bg.svg";
import people from "@/assets/images/why-simcoe/people.svg";
import compass from "@/assets/images/why-simcoe/compass.svg";
import proven from "@/assets/images/why-simcoe/proven.svg";
import loyal from "@/assets/images/why-simcoe/loyal.svg";
import safety from "@/assets/images/why-simcoe/safety.svg";

const features = [
  {
    icon: people,
    title: "Geoscientists",
    description:
      "A dynamic team of experienced geoscientists leveraging advanced technologies and scientific precision to solve the world’s most complex exploration challenges.",
    large: true,
  },
  {
    icon: compass,
    title: "Tailor-Made Solutions",
    description:
      "Custom exploration strategies and investment optimization through a customer-focused approach that treats every project as a unique geological puzzle.",
    large: true,
  },
  {
    icon: proven  ,
    title: "Proven Technologies",
    description:
      "High-performance computing and 3D subsurface mapping.",
  },
  {
    icon: loyal,
    title: "Loyal Clientele",
    description:
      "Objective consulting and collaborative global partnerships.",
  },
  {
    icon: safety,
    title: "Safety & Security",
    description:
      "HSE policy integration for sustainable, safe workflows.",
  },
];

const WhySimcoeSection = () => {
  return (
    <section className={styles.whySection}>
      <div className="container">
        <div className="row align-items-center gy-5">
          <div className="col-lg-6">
            <span className={styles.subHeading}>
              Excellence In Earth Science
            </span>

            <h2 className={styles.mainHeading}>
              Why <span>Simcoe</span>
              <br />
              Geoscience
            </h2>

            <p className={styles.description}>
              In today’s highly competitive market, Simcoe Geoscience delivers
              innovative, affordable, and streamlined solutions to mining,
              environmental, engineering, and energy industries worldwide. We
              bridge the gap between complex geological data and actionable
              business intelligence.
            </p>

            <button className={styles.ctaButton}>
              Explore Solutions
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="col-lg-6">
            <div className={styles.imageWrapper}>
              <img
                src={bg.src}
                alt="Mining Site"
              />
            </div>
          </div>
        </div>

        <div className={styles.featureGrid}>
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className={`${styles.featureCard} ${feature.large ? styles.largeCard : ""
                  }`}
              >
                <div className={styles.iconBox}>
                  <img src={Icon.src} alt={`${feature.title} icon`} />
                </div>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhySimcoeSection;
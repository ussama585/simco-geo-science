import { Eye, Rocket, Target, Globe, BarChart3 } from "lucide-react";
import styles from "@/styles/about-us/About.module.scss";

import eye from "@/assets/images/about-us/eye.svg";
import rocket from "@/assets/images/about-us/rocket.svg";
import goal from "@/assets/images/about-us/goal.svg";
import bg from "@/assets/images/about-us/bg.svg";
import feed from "@/assets/images/about-us/feed.svg";
import global from "@/assets/images/about-us/global.svg";
import bar from "@/assets/images/about-us/bar.svg";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const AboutSection = () => {
  const cards = [
    {
      icon: eye,
      title: "Our Vision",
      text: "To define the next frontier of subsurface intelligence through relentless innovation and scientific integrity.",
    },
    {
      icon: rocket,
      title: "Our Mission",
      text: "Providing decision-critical geophysical data that minimizes risk and maximizes exploration ROI for global stakeholders.",
    },
    {
      icon: goal,
      title: "Our Objectives",
      text: "Standardizing precision across seismic, electromagnetic, and gravity surveys to deliver a unified earth model.",
    },
  ];

  const liveCardRef = useRef(null);
  const seismicCardRef = useRef(null);
  const globalCardRef = useRef(null);

  useEffect(() => {
    gsap.to(liveCardRef.current, {
      y: -14,
      duration: 1.3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(seismicCardRef.current, {
      y: 14,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(globalCardRef.current, {
      y: -12,
      duration: 1.4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <section className={styles.aboutSection}>
      <div className="container">
        <div className="row g-5 align-items-start">
          <div className="col-md-6">
            <h2 className={styles.aboutTitle}>About Simcoe Geoscience</h2>

            <p className={styles.aboutDescription}>
              <strong>Simcoe Geoscience Limited</strong> is a Canadian company with
              its global presence that provides geophysical surveys and consulting
              services to the exploration, environmental and engineering industries.
              Management has a combined "50 plus" years of industry related
              experience and our dynamic team of geoscientists and consultants are
              able to offer solutions for all of your geoscientific challenges.
              Simcoe has a strong business interest in designing and executing
              accurate, affordable and streamlined geoscience solutions. We have
              world class computing power and unparalleled modeling experience which
              allows us to provide high quality products in an efficient manner.
            </p>

            <div className="d-flex flex-column gap-4">
              {cards.map(({ icon: Icon, title, text }) => (
                <div className={`${styles.aboutInfoCard} d-flex gap-3`} key={title}>
                  <div className={styles.aboutIconBox}>
                    <img src={Icon.src} alt={`${title} icon`} />
                  </div>

                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-md-6">
            <div className={styles.aboutImageWrapper}>
              <div className={styles.aboutImageBox}>
                <img src={bg.src} alt="Geoscience site" />
              </div>

              <div ref={liveCardRef} className={`${styles.floatingCard} ${styles.liveCard}`}>
                <img src={feed.src} alt="Live Data icon" />
              </div>

              <div ref={seismicCardRef} className={`${styles.floatingCard} ${styles.seismicCard}`}>
                <div className={`${styles.smallLabel} mb-2`}>
                  Seismic Velocity
                </div>
                <img src={bar.src} alt="Seismic Velocity icon" />
              </div>

              <div
                ref={globalCardRef}
                className={`${styles.floatingCard} ${styles.globalCard} d-flex flex-column align-items-center gap-1`}
              >
                <img src={global.src} alt="Global Presence icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
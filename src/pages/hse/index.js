import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "@/styles/hse/Hse.module.scss";

import bg1 from "@/assets/images/hse/bg-1.svg";
import bg2 from "@/assets/images/hse/bg-2.svg";
import leadership from "@/assets/images/hse/leadership.svg";
import safety from "@/assets/images/hse/safety.svg";
import stop from "@/assets/images/hse/stop.svg";
import environment from "@/assets/images/hse/environment.svg";
import hse from "@/assets/images/hse/hse.svg";
import compliance from "@/assets/images/hse/compliance.svg";
import client from "@/assets/images/hse/client.svg";
import secure from "@/assets/images/hse/secure.svg";

const HseSection = () => {

  const pillars = [
    {
      icon: leadership.src,
      color: "dark",
      title: "Leadership & Accountability",
      body: "Management commitment to fostering a proactive culture of safety ownership.",
    },
    {
      icon: safety.src,
      color: "orange",
      title: "Employee Safety",
      body: "Individual responsibility for personal safety and the protection of colleagues.",
    },
    {
      icon: stop.src,
      color: "red",
      title: "Stop Work Policy",
      body: "Unconditional authority granted to all personnel to suspend unsafe tasks.",
    },
    {
      icon: environment.src,
      color: "primary",
      title: "Environmental Protection",
      body: "Minimizing our footprint through sustainable practices and remediation protocols.",
    },
    {
      icon: hse.src,
      color: "dark",
      title: "HSE Excellence",
      body: "Striving for beyond-compliance performance in all operational spheres.",
    },
    {
      icon: compliance.src,
      color: "dark",
      title: "Compliance & Regulations",
      body: "Strict adherence to local, national, and international safety frameworks.",
    },
    {
      icon: client.src,
      color: "primary",
      title: "Client Collaboration",
      body: "Aligning our HSE goals with client safety visions for unified operations.",
    },
    {
      icon: secure.src,
      color: "orange",
      title: "Secure Work Environment",
      body: "Securing physical and digital assets to ensure operational continuity.",
    },
  ];

  const commitmentRef = useRef(null);
  const expectationRef = useRef(null);

  useEffect(() => {
    gsap.to(commitmentRef.current, {
      y: -15,
      duration: 1.8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(expectationRef.current, {
      y: 15,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <>
      <section className={styles.hseSection}>
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className={styles.content}>
                <h2>
                  <span>Health, Safety &amp;</span>
                  <br />
                  <strong>Environment</strong>
                </h2>

                <p>
                  <b>Simcoe Geoscience Limited</b> is committed to protecting the
                  health and safety of everybody who plays a part in our
                  operations. Simcoe Geoscience is committed to delivering
                  products and services while preserving the environment by
                  applying our HSE policy.
                </p>

                <div className="d-flex flex-wrap gap-3">
                  <button type="button" className={styles.primaryBtn}>
                    Our HSE Standards
                  </button>

                  <button type="button" className={styles.outlineBtn}>
                    Compliance Reports
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className={styles.visualWrap}>
                <div className={styles.topImage}>
                  <img src={bg1.src} alt="HSE field operations" />
                </div>

                <div ref={commitmentRef} className={styles.commitmentCard}>
                  <h3>Our Commitment</h3>
                  <p>
                    Zero-harm culture through continuous monitoring and real-time
                    risk mitigation.
                  </p>
                </div>

                <div className={styles.bottomImage}>
                  <img src={bg2.src} alt="HSE monitoring dashboard" />
                </div>

                <div ref={expectationRef} className={styles.expectationCard}>
                  <div className={styles.cardTitle}>
                    <i className="bi bi-exclamation-triangle"></i>
                    <h3>Our Expectations</h3>
                  </div>

                  <p>
                    Every team member is empowered to halt operations if safety
                    conditions are compromised.
                  </p>
                </div>

                <div className={styles.badgeIcon}>
                  <i className="bi bi-shield-check"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.hseMissionSection}>
        <div className="container">
          <div className={styles.missionWrapper}>
            <div className="text-center mx-auto mb-5">
              <h2>Our HSE Mission</h2>
              <p>
                Defining the standards for safety and environmental stewardship in
                complex geoscience environments worldwide.
              </p>
            </div>

            <div className="row g-4">
              {pillars.map((pillar) => (
                <div className="col-sm-6 col-lg-3" key={pillar.title}>
                  <div className={styles.pillarCard}>
                    <img src={pillar.icon} alt={`${pillar.title} icon`} className={styles.pillarIcon} />

                    <h3>{pillar.title}</h3>
                    <p>{pillar.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HseSection;
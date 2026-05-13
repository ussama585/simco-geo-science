import styles from "@/styles/privacy-policy/PrivacyPolicy.module.scss";

import bg from "@/assets/images/privacy/bg.svg";
import security from "@/assets/images/privacy/security.svg";
import shield from "@/assets/images/privacy/shield.svg";
import thumbprint from "@/assets/images/privacy/thumbprint.svg";
import key from "@/assets/images/privacy/key.svg";
import shieldUutlined from "@/assets/images/privacy/shield-outlined.svg";
import lock from "@/assets/images/privacy/lock.svg";
import encrypt from "@/assets/images/privacy/encrypt.svg";
import gdpr from "@/assets/images/privacy/gdpr.svg";

const PrivacySection = () => {
  return (
    <section className={styles.privacySection}>
      <div className="container">
        <div className={styles.privacyHeader}>
          <p>Confidential & Secure Information Handling</p>
          <h2>Privacy Policy</h2>
        </div>

        <div className="row g-4 align-items-center">
          <div className="col-lg-6">
            <div className={styles.privacyCard}>
              <i className={`bi bi-shield ${styles.bgIcon}`}></i>

              <p className={styles.mainText}>
                User information provided and any files transmitted with it are
                confidential and intended solely for the use of Simcoe
                Geoscience in assisting the user learn about or acquire
                geophysical survey services.
              </p>

              <div className={styles.featureList}>
                <div className={styles.featureItem}>
                  <div className={styles.iconBox}>
                    <img src={shield.src} alt="Shield icon" />
                  </div>
                  <div>
                    <h3>Absolute Confidentiality</h3>
                    <p>
                      We treat all information provided as confidential; it will
                      be protected and not distributed to any third party.
                    </p>
                  </div>
                </div>

                <div className={styles.featureItem}>
                  <div className={styles.iconBox}>
                    <img src={security.src} alt="Security icon" />
                  </div>
                  <div>
                    <h3>Strict Non-Disclosure</h3>
                    <p>
                      Our policy is strictly against disclosing, copying, or
                      distributing any information provided through any source,
                      including LinkedIn, email, phone, and teleconferencing.
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.quoteBox}>
                <p>
                  "Technical Excellence with Integrity. Your data is the
                  foundation of our partnership."
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className={styles.privacyVisual}>
              <div className={styles.imageBox}>
                <img src={bg.src} alt="Privacy and security visualization" />
              </div>

              <div className={styles.nodeCard}>
                <span></span>
                <p>Real-time Node: Alpha-7 Active</p>
              </div>

              <div className={styles.statusCard}>
                <div className={styles.statusHeader}>
                  <img src={lock.src} alt="Lock icon" />
                  <span>Status</span>
                </div>

                <div className={styles.progressTrack}>
                  <div></div>
                </div>

                <p>Security integrity at 98.4% for current session.</p>
              </div>

              <div className={styles.floatingIcons}>
                <div>
                  <img src={thumbprint.src} alt="Thumbprint icon" />
                </div>
                <div>
                  <img src={key.src} alt="Key icon" />
                </div>
                <div>
                  <img src={shieldUutlined.src} alt="Shield icon" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.trustSignals}>
          <div>
            <img src={encrypt.src} alt="Encrypt icon" />
            <span>End-to-End Encryption</span>
          </div>

          <div>
            <img src={gdpr.src} alt="GDPR icon" />
            <span>GDPR Compliant</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacySection;
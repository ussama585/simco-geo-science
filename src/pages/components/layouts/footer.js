import styles from "@/styles/Footer.module.scss";

export default function Footer() {
  return (
    <section className={styles.contactInfoSection}>
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-6">
            <div className={styles.infoBlock}>
              <h2>Head Office</h2>

              <ul>
                <li>
                  <i className="bi bi-geo-alt-fill"></i>
                  <span>
                    <strong>Address:</strong> 13-11 Cardico Drive, Stouffville,
                    Ontario, Canada L4A 2G5
                  </span>
                </li>
                <li>
                  <i className="bi bi-telephone-fill"></i>
                  <span>
                    <strong>Toll Free:</strong> +1 (844) 794 7822
                  </span>
                </li>
                <li>
                  <i className="bi bi-telephone-fill"></i>
                  <span>
                    <strong>Phone:</strong> +1 (905) 235 7822
                  </span>
                </li>
                <li>
                  <i className="bi bi-telephone-fill"></i>
                  <span>
                    <strong>Fax:</strong> +1 (905) 235 7821
                  </span>
                </li>
                <li>
                  <i className="bi bi-envelope-fill"></i>
                  <span>
                    <strong>Email:</strong> info@SimcoeGeoscience.com
                  </span>
                </li>
              </ul>
            </div>

            <div className={styles.divider}></div>
          </div>

          <div className="col-lg-6">
            <div className={styles.infoBlock}>
              <h2>Western Canada</h2>

              <ul>
                <li>
                  <i className="bi bi-geo-alt-fill"></i>
                  <span>
                    <strong>Address:</strong> 615 Windbrook Heights, SW, Airdrie,
                    AB, T4B3V9, Canada
                  </span>
                </li>
                <li>
                  <i className="bi bi-telephone-fill"></i>
                  <span>
                    <strong>Toll Free:</strong> +1 (844) 794 7822
                  </span>
                </li>
                <li>
                  <i className="bi bi-telephone-fill"></i>
                  <span>
                    <strong>Phone:</strong> +1 (403) 993 6073
                  </span>
                </li>
                <li>
                  <i className="bi bi-telephone-fill"></i>
                  <span>
                    <strong>Fax:</strong> +1 (905) 235 7821
                  </span>
                </li>
                <li>
                  <i className="bi bi-envelope-fill"></i>
                  <span>
                    <strong>Email:</strong> info@SimcoeGeoscience.com
                  </span>
                </li>
              </ul>
            </div>

            <div className={`${styles.divider} ${styles.blueDivider}`}></div>
          </div>

          <div className="col-lg-6">
            <div className={styles.infoBlock}>
              <h2>Middle East &amp; Saudi Arabia</h2>
              <h4>Simcoe Geoscience Arabia Limited</h4>

              <ul>
                <li>
                  <i className="bi bi-geo-alt-fill"></i>
                  <span>
                    <strong>Address:</strong> 3141 Anas Ibn Malik, 8292 Al Malqa
                    District, Riyadh, Kingdom of Saudi Arabia
                    <br />
                    Postal Code: 13521
                  </span>
                </li>
                <li>
                  <i className="bi bi-telephone-fill"></i>
                  <span>
                    <strong>Toll Free:</strong> +1 (844) 794 7822
                  </span>
                </li>
                <li>
                  <i className="bi bi-telephone-fill"></i>
                  <span>
                    <strong>Phone:</strong> +966 (56) 724 4117
                  </span>
                </li>
                <li>
                  <i className="bi bi-envelope-fill"></i>
                  <span>
                    <strong>Email:</strong> info@SimcoeGeoscience.com
                  </span>
                </li>
              </ul>

              <div className={styles.followBlock}>
                <h2>Follow Us</h2>

                <div className={styles.socialIcons}>
                  <a href="#" aria-label="LinkedIn">
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="#" aria-label="Facebook">
                    <i className="bi bi-facebook"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className={styles.infoBlock}>
              <h2>Technologies</h2>

              <div className={styles.techList}>
                <p>Wireless Alpha IP ™</p>
                <p>Alpha BHIP ™</p>
                <p>Omega MT ™</p>
                <p>Wireless Seismic</p>
              </div>

              <div className={styles.sapBlock}>
                <img src="/images/sap-ariba.png" alt="SAP Ariba" />
              </div>

              <div className={styles.memberBlock}>
                <h2>Member Of</h2>

                <div className={styles.memberLogos}>
                  <img src="/images/apgo-logo.png" alt="APGO" />
                  <img src="/images/isn-logo.png" alt="ISN" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
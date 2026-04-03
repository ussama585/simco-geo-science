import styles from "@/styles/Footer.module.scss";

import apgo from "@/assets/images/footer/apgo.webp";
import ariba from "@/assets/images/footer/ariba.webp";
import fb from "@/assets/images/footer/fb.webp";
import li from "@/assets/images/footer/li.webp";
import member from "@/assets/images/footer/member.webp";

export default function Footer() {
  return (
    <>
      <section className={styles.contactInfoSection}>
        <div className="container-fluid">
          <div className="row g-4">
            <div className="col-12 col-lg-6">
              <div className={styles.footerColumn}>
                <div className={styles.infoBlock}>
                  <h2>Head Office</h2>

                  <ul>
                    <li>
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#31a7bb" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                        </svg><strong className="ms-2">Address:</strong> 13-11 Cardico Drive, Stouffville,
                        Ontario, Canada L4A 2G5
                      </span>
                    </li>
                    <li>
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#31a7bb" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1。03-.037-2。137.703-2。877z" />
                        </svg><strong className="ms-2">Toll Free:</strong> +1 (844) 794 7822
                      </span>
                    </li>
                    <li>
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#31a7bb" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1。03-.037-2。137.703-2。877z" />
                        </svg><strong className="ms-2">Phone:</strong> +1 (905) 235 7822
                      </span>
                    </li>
                    <li>
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#31a7bb" class="bi bi-printer-fill" viewBox="0 0 16 16">
                          <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1" />
                          <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" />
                        </svg><strong className="ms-2">Fax:</strong> +1 (905) 235 7821
                      </span>
                    </li>
                    <li>
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#31a7bb" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                          <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                        </svg><strong className="ms-2">Email:</strong> info@SimcoeGeoscience.com
                      </span>
                    </li>
                  </ul>
                </div>

                <div className={styles.divider}></div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className={styles.footerColumn}>
                <div className={styles.infoBlock}>
                  <h2>Western Canada</h2>

                  <ul>
                    <li>
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#1c164c" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                        </svg> <strong className="ms-2">Address:</strong> 615 Windbrook Heights, SW, Airdrie,
                        AB, T4B3V9, Canada
                      </span>
                    </li>
                    <li>
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#1c164c" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                        </svg><strong className="ms-2">Toll Free:</strong> +1 (844) 794 7822
                      </span>
                    </li>
                    <li>
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#1c164c" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                        </svg><strong className="ms-2">Phone:</strong> +1 (403) 993 6073
                      </span>
                    </li>
                    <li>
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#1c164c" class="bi bi-printer-fill" viewBox="0 0 16 16">
                          <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1" />
                          <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" />
                        </svg><strong className="ms-2">Fax:</strong> +1 (905) 235 7821
                      </span>
                    </li>
                    <li>
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#1c164c" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                          <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                        </svg><strong className="ms-2">Email:</strong> info@SimcoeGeoscience.com
                      </span>
                    </li>
                  </ul>
                </div>

                <div className={styles.divider}></div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className={styles.footerColumn}>
                <div className={styles.infoBlock}>
                  <h2 className="mb-1">Middle East &amp; Saudi Arabia</h2>
                  <h4>Simcoe Geoscience Arabia Limited</h4>

                  <ul>
                    <li>
                      <span className="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#31a7bb" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                        </svg> <strong className="ms-2">Address:</strong> 3141 Anas Ibn Malik, 8292 Al Malqa
                        District, Riyadh, Kingdom of Saudi Arabia
                      </span>
                    </li>
                    <li>
                      <span className="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#31a7bb" class="bi bi-mailbox2-flag" viewBox="0 0 16 16">
                          <path d="M10.5 8.5V3.707l.854-.853A.5.5 0 0 0 11.5 2.5v-2A.5.5 0 0 0 11 0H9.5a.5.5 0 0 0-.5.5v8z" />
                          <path d="M4 3h4v1H6.646A4 4 0 0 1 8 7v6h7V7a3 3 0 0 0-3-3V3a4 4 0 0 1 4 4v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4m.585 4.157C4.836 7.264 5 7.334 5 7a1 1 0 0 0-2 0c0 .334.164.264.415.157C3.58 7.087 3.782 7 4 7s.42.086.585.157" />
                        </svg> <strong className="ms-2">Postal Code:</strong> 13521
                      </span>
                    </li>
                    <li>
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#31a7bb" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1。03-.037-2。137.703-2。877z" />
                        </svg><strong className="ms-2">Toll Free:</strong> +1 (844) 794 7822
                      </span>
                    </li>
                    <li>
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#31a7bb" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1。03-.037-2。137.703-2。877z" />
                        </svg><strong className="ms-2">Phone:</strong> +966 (56) 724 4117
                      </span>
                    </li>
                    <li>
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#31a7bb" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                          <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                        </svg><strong className="ms-2">Email:</strong> info@SimcoeGeoscience.com
                      </span>
                    </li>
                  </ul>
                </div>

                <div className={styles.followBlock}>
                  <h2>Follow Us</h2>

                  <div className={styles.socialIcons}>
                    <a href="#" aria-label="LinkedIn">
                      <img src={li.src} alt="LinkedIn" />
                    </a>
                    <a href="#" aria-label="Facebook">
                      <img src={fb.src} alt="Facebook" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className={styles.footerColumn}>
                <div className={styles.infoBlock}>
                  <h2>Technologies</h2>

                  <div className={styles.techList}>
                    <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#1c164b" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                      <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                    </svg> Wireless Alpha IP ™</p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#1c164b" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                      <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                    </svg> Alpha BHIP ™</p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#1c164b" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                      <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                    </svg> Omega MT ™</p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#1c164b" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                      <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                    </svg> Wireless Seismic</p>
                  </div>

                  <div className={styles.sapBlock}>
                    <img src={ariba.src} alt="SAP Ariba" />
                  </div>

                  <div className={styles.memberBlock}>
                    <h2>Member Of</h2>

                    <div className={styles.memberLogos}>
                      <img src={apgo.src} alt="APGO" />
                      <img src={member.src} alt="ISN" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.footerBar}>
        <div className="container">
          <div className="row align-items-center gy-2">
            <div className="col-12 col-md-4 text-center text-md-start">
              <p className={styles.footerText}>© Copyright 2026. All Rights Reserved.</p>
            </div>

            <div className="col-12 col-md-4 text-center">
              <p className={styles.footerText}>
                Developed By: <span>Simcoe IT</span>
              </p>
            </div>

            <div className="col-12 col-md-4 text-center text-md-end">
              <a href="/quote" className={styles.footerLink}>
                Get A Quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
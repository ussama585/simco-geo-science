import Image from "next/image";
import styles from "@/styles/homepage/Hero.module.scss";
import bgImage from "@/assets/images/homepage/who-we-are.webp";

export default function WhoWeAreSection() {
  return (
    <section className={styles.whoweare}>
      <div className="row">
        <div className="col-12 col-lg-5 pe-2 pe-lg-0">
          <div className={styles.topLabel}>
            <h2>Who We Are</h2>
          </div>
          <div className={styles.contentArea}>
            <div className={styles.leftPanel}>
              <div className={styles.inner}>
                <h3>
                  Advanced Geophysics.
                </h3>
                <h3>
                  Real-World Impact.
                </h3>

                <p>
                  Simcoe Geoscience delivers next-generation geophysical solutions
                  across mining, energy, and engineering sectors. With operations
                  spanning Saudi Arabia, Canada, and beyond, we combine field
                  expertise with cutting-edge technology to provide deeper, more
                  accurate subsurface insights.
                </p>

                <button className={styles.cta}>
                  <span className={styles.icon}>
                    <span></span>
                  </span>
                  Meet Our Management
                </button>
              </div>
            </div>
          </div>
          <div className={styles.bottomLabel}>
            <h2>Our Services</h2>
          </div>
        </div>
        <div className="col-12 col-lg-7 ps-2 ps-lg-0 d-none d-lg-block position-relative">
          <div className={styles.rightPanel}>
            <Image
              src={bgImage}
              alt="Mountain landscape"
              fill
              className={styles.cardImage}
              priority
            />
          </div>
        </div>
      </div>




    </section>
  );
}
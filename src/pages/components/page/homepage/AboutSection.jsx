import Image from "next/image";
import styles from "@/styles/homepage/Hero.module.scss";

import directorImage from "@/assets/images/homepage/user.jpg";

const stats = [
  {
    id: 1,
    title: "Projects Delivered",
    value: "5,000+",
  },
  {
    id: 2,
    title: "Experience Years",
    value: "50+",
  },
  {
    id: 3,
    title: "Sq. Kilometers Surveyed",
    value: "2.3 Million+",
  },
  {
    id: 4,
    title: "Prediction Accuracy",
    value: "99%",
  },
];

export default function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.top}>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className={styles.intro}>
              <h2 className={styles.eyebrow}>We are</h2>

              <h2 className={styles.title}>Simcoe Geoscience</h2>

              <p className={styles.description}>
                With extensive field experience, advanced geophysical technologies,
                and a highly skilled team, we deliver accurate, high-resolution
                subsurface insights that drive confident exploration decisions.
              </p>
            </div>
          </div>
          <div className={`col-12 col-md-6 ${styles.rightCol}`}>
            <div className={styles.stats}>
              {stats.map((item) => (
                item.id < 3 &&
                <div key={item.id} className={styles.statCard} style={item.id == 2 ? { marginTop: "15px" } : { marginTop: "0" }}>
                  <h3>{item.title}</h3>
                  <p>{item.value}</p>
                </div>
              ))}
            </div>
            <div className={styles.stats}>
              {stats.map((item) => (
                item.id > 2 &&
                <div key={item.id} className={styles.statCard} style={item.id == 4 ? { marginTop: "15px" } : { marginTop: "0" }}>
                  <h3>{item.title}</h3>
                  <p>{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>


      </div>

      <div className={styles.messageSection}>
        <div className={styles.messageHeading}>
          <h2>
            Director’s <strong>Message</strong>
          </h2>
        </div>

        <div className="row g-0">
          <div className={`col-12 col-md-5 ${styles.leftCol}`}>
            <div className={styles.imageWrap}>
              <Image
                src={directorImage}
                alt="Riaz Mirza"
                className={styles.image}
                priority
              />
            </div>
          </div>
          <div className={`col-12 col-md-7 ${styles.rightCol}`}>
            <div className={styles.messageLayout}>


              <div className={styles.messageCard}>
                {/* <div className={styles.quoteMark}>”</div> */}

                <p>
                  At Simcoe Geoscience, our focus has always been clear - deliver
                  reliable geophysical data that enables confident decision-making.
                </p>

                <p>
                  In an industry where uncertainty carries significant cost, our role
                  goes beyond data collection. We combine advanced technologies with
                  field expertise to uncover accurate subsurface insights, helping our
                  clients reduce risk and move forward with clarity.
                </p>

                <p>
                  From challenging terrains to large-scale exploration projects, our
                  team is committed to precision, efficiency, and the highest
                  standards of safety. As we continue to grow globally, we remain
                  focused on one goal — delivering results that create real value for
                  our clients.
                </p>

                <div className={styles.author}>
                  <strong>Riaz Mirza</strong>
                  <span>Director Simcoe Geoscience</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
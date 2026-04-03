import Image from "next/image";
import styles from "@/styles/homepage/Hero.module.scss";

import card1 from "@/assets/images/homepage/card-1.webp";
import card2 from "@/assets/images/homepage/card-2.webp";
import card3 from "@/assets/images/homepage/card-3.webp";

const services = [
  {
    id: 1,
    title1: "Environmental & ",
    title2: "Geotechnical Investigations",
    image: card1,
  },
  {
    id: 2,
    title1: "Exploration and Geological ",
    title2: "Studies",
    image: card2,
  },
  {
    id: 3,
    title1: "Consulting ",
    title2: "(Ground & Airborne)",
    image: card3,
  },
];

export default function ServicesHighlightSection() {
  return (
    <section className={styles.servicesSection}>
      <div className="row gx-0">
        {services.map((service) => (
          <div key={service.id} className="col-12 col-md-4">
            <div className={styles.serviceCard}>
              <Image
                src={service.image}
                alt={`${service.title1} ${service.title2}`}
                fill
                className={styles.image}
              />

              <div className={styles.overlay}></div>

              <div className={styles.content}>
                <div>
                  <h3>{service.title1}</h3>
                  <h3>{service.title2}</h3>
                </div>

                <button className={styles.cta}>
                  <span className={styles.icon}>
                    <span></span>
                  </span>
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
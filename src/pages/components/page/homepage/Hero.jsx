import { useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/homepage/Hero.module.scss";

import slide1 from "@/assets/images/homepage/slide-1.webp";
import slide2 from "@/assets/images/homepage/slide-2.webp";
import slide3 from "@/assets/images/homepage/slide-3.webp";

const slides = [slide1, slide2, slide3];

export default function Hero() {
  useEffect(() => {
    const initCarousel = async () => {
      const bootstrap = await import("bootstrap/dist/js/bootstrap.bundle.min.js");
      const element = document.getElementById("heroSlider");

      if (element) {
        new bootstrap.Carousel(element, {
          interval: 5000,
          ride: "carousel",
          pause: false,
          wrap: true,
          touch: true,
        });
      }
    };

    initCarousel();
  }, []);

  return (
    <section className={styles.hero}>
      <div
        id="heroSlider"
        className={`carousel slide carousel-fade ${styles.heroSlider}`}
      >
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""} ${styles.slideItem}`}
            >
              <Image
                src={slide}
                alt={`Hero Slide ${index + 1}`}
                fill
                priority={index === 0}
                className={styles.slideImage}
              />
            </div>
          ))}
        </div>

        <div className={styles.overlay}></div>

        <div className={styles.content}>
          <h1>
            See What Others Can’t.
            <br />
            <strong>Discover What Matters.</strong>
          </h1>

          <p>
            Advanced geophysical surveys delivering deeper insights, faster
            decisions, and reduced exploration risk across mining, energy, and
            engineering projects.
          </p>
        </div>
      </div>
    </section>
  );
}
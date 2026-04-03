import styles from "@/styles/homepage/Hero.module.scss";
import eventImage1 from "@/assets/images/homepage/careers-1.jpg";

const events = [
  {
    id: 1,
    image: eventImage1,
    title: "Simcoe Geoscience is Exhibiting at PDAC from March 5–8",
    location: "Regina",
    date: "03/02/2023",
  },
  {
    id: 2,
    image: eventImage1,
    title: "Simcoe Geoscience is attending AME 2019 ROUNDUP - January 28-31",
    location: "Regina",
    date: "03/02/2023",
  },
  {
    id: 3,
    image: eventImage1,
    title: "Simcoe Geoscience Is Exhibiting at PDAC from March 5–8",
    location: "Regina",
    date: "03/02/2023",
  },
];

export default function EventsGallery() {
  return (
    <section className={styles.eventsSection}>
      <div className={styles.eventsContainer}>
        <h2 className={styles.sectionTitle}>
          <span>Events</span> (Gallery)
        </h2>

        <div className="row">
          {events.map((event) => (
            <div className="col-12 col-md-4 mb-4 mb-md-0" key={event.id}>
              <div className={styles.eventCard}>
                <div className={styles.imageWrapper}>
                  <img src={event.image.src} alt={event.title} className={styles.cardImage} />
                </div>

                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{event.title}</h3>

                  <div className={styles.cardMeta}>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                      </svg>
                      <span className="ms-2">{event.location}</span>
                    </span>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-week" viewBox="0 0 16 16">
                        <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" />
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                      </svg>
                      <span className="ms-2">{event.date}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
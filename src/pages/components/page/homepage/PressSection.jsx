import styles from "@/styles/homepage/Hero.module.scss";

const pressReleases = [
  {
    id: 1,
    date: "May 2, 2027",
    title:
      "Prospect Ridge Resources: Excalibur IP Survey Results Confirm High Priority Copper Gold Drill Targets",
    description:
      'VANCOUVER, BC / ACCESS Newswire / January 23, 2026 / Prospect Ridge Resources Corp. (the "Company" or "Prospect Ridge") (CSE:PRR) (OTCQB:PRRSF) (FRA:OED) is pleased to announce the receipt.',
  },
  {
    id: 2,
    date: "May 2, 2027",
    title:
      "Prospect Ridge Resources: Excalibur IP Survey Results Confirm High Priority Copper Gold Drill Targets",
    description:
      'VANCOUVER, BC / ACCESS Newswire / January 23, 2026 / Prospect Ridge Resources Corp. (the "Company" or "Prospect Ridge") (CSE:PRR) (OTCQB:PRRSF) (FRA:OED) is pleased to announce the receipt.',
  },
  {
    id: 3,
    date: "May 2, 2027",
    title:
      "Prospect Ridge Resources: Excalibur IP Survey Results Confirm High Priority Copper Gold Drill Targets",
    description:
      'VANCOUVER, BC / ACCESS Newswire / January 23, 2026 / Prospect Ridge Resources Corp. (the "Company" or "Prospect Ridge") (CSE:PRR) (OTCQB:PRRSF) (FRA:OED) is pleased to announce the receipt.',
  },
];

export default function PressReleaseSection() {
  return (
    <section className={styles.pressReleaseSection}>
      <div className="container">
        <div className={styles.pressReleaseHeader}>
          <h2>
            Press <span>Release</span>
          </h2>
        </div>

        <div className={styles.pressReleaseList}>
          {pressReleases.map((item) => (
            <article className={styles.pressReleaseCard} key={item.id}>
              <p className={styles.pressReleaseDate}>{item.date}</p>
              <h3 className={styles.pressReleaseTitle}>{item.title}</h3>
              <span className={styles.pressReleaseAccent}></span>
              <p className={styles.pressReleaseDescription}>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
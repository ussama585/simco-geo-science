import styles from "@/styles/management/Management.module.scss";

import riaz from "@/assets/images/management/riaz.png";
import greg from "@/assets/images/management/greg.jpg";
import milan from "@/assets/images/management/milan.jpg";
import tony from "@/assets/images/management/tony-french.jpg";
import asif from "@/assets/images/management/asif.jpg";
import shahbaz from "@/assets/images/management/shahbaz.jpeg";
import lhoucin from "@/assets/images/management/lhoucin-img.png";

const members = [
  { name: "Riaz Mirza", role: "Director & Geoscientists", image: riaz },
  { name: "Greg Hollyer", role: "VP Sales & Marketing", image: greg },
  {
    name: "Milan Situm",
    role: "VP President & Senior Geophysicists",
    division: "Engineering Division",
    image: milan,
  },
  { name: "Tony French", role: "Vice President Operations", image: tony },
  { name: "Asif Mirza", role: "Managing Director", image: asif },
  {
    name: "Mirza Shahbaz",
    role: "Operations Manager",
    division: "Western Canada",
    image: shahbaz,
  },
  {
    name: "Lhoucin Taghya",
    role: "Manager of Operations & Senior Geophysicists",
    division: "Engineering Division",
    image: lhoucin,
  },
];

const ManagementSection = () => {
  return (
    <section className={styles.managementSection}>
      <div className="container">
        <div className="row align-items-end justify-content-between mb-5">
          <div className="col-lg-7">
            <div className={styles.sectionLabel}>
              <span></span>
              <p>Leadership</p>
            </div>

            <h2 className={styles.sectionTitle}>Management</h2>
          </div>

        </div>

        <div className="row g-4">
          {members.map((member, index) => (
            <div className="col-sm-6 col-lg-4 col-xl-3" key={member.name}>
              <article className={styles.memberCard}>
                <div className={styles.imageBox}>
                  <img src={member.image.src} alt={member.name} />

                  {/* <div className={styles.socials}>
                    <button type="button" aria-label={`Email ${member.name}`}>
                      <i className="bi bi-envelope"></i>
                    </button>

                    <button
                      type="button"
                      aria-label={`${member.name} on LinkedIn`}
                    >
                      <i className="bi bi-linkedin"></i>
                    </button>
                  </div> */}
                </div>

                <div className={styles.cardContent}>
                  <h3>{member.name}</h3>
                  <span className={styles.line}></span>

                  <p>
                    {member.role}
                    {member.division && <small>{member.division}</small>}
                  </p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManagementSection;
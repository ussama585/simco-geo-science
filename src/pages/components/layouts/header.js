import Link from "next/link";
import styles from "@/styles/Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.logo}>SIMCOE GEOSCIENCE</div>

        <nav className={styles.nav}>
          <Link href="/">Company</Link>
          <Link href="/">Services</Link>
          <Link href="/">Technologies</Link>
          <Link href="/">Press Releases</Link>
          <Link href="/">Resources</Link>
          <Link href="/">Case Studies</Link>
          <Link href="/">Get a Quote</Link>
        </nav>

        <div className={styles.logoRight}>SIMCOE GEOSCIENCE ARABIA</div>
      </div>
    </header>
  );
}
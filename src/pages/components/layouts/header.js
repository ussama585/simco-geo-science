import { useState } from "react";
import Link from "next/link";
import styles from "@/styles/Header.module.scss";
import logo1 from "@/assets/images/header/logo1.svg";
import logo2 from "@/assets/images/header/logo2.svg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log(logo1,"logo1logo1")
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <img src={logo1.src} alt="Simcoe Geoscience Logo Part 1" width={120} className={styles.logoPart1} />
        </div>

        <nav className={styles.nav}>
          <Link href="/">Company</Link>
          <Link href="/">Services</Link>
          <Link href="/">Technologies</Link>
          <Link href="/">Press Releases</Link>
          <Link href="/">Resources</Link>
          <Link href="/">Case Studies</Link>
          <Link href="/">Get a Quote</Link>
        </nav>

        <button
          type="button"
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={styles.logoRight}>
          <img src={logo2.src} alt="Simcoe Geoscience Logo Part 2" width={140} className={styles.logoPart2} />
        </div>
      </div>

      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ""}`}>
        <Link href="/" onClick={() => setIsMenuOpen(false)}>Company</Link>
        <Link href="/" onClick={() => setIsMenuOpen(false)}>Services</Link>
        <Link href="/" onClick={() => setIsMenuOpen(false)}>Technologies</Link>
        <Link href="/" onClick={() => setIsMenuOpen(false)}>Press Releases</Link>
        <Link href="/" onClick={() => setIsMenuOpen(false)}>Resources</Link>
        <Link href="/" onClick={() => setIsMenuOpen(false)}>Case Studies</Link>
        <Link href="/" onClick={() => setIsMenuOpen(false)}>Get a Quote</Link>
      </div>
    </header>
  );
}
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">Fuldev Games</Link>
      </div>
      <nav className={styles.nav}>
        <Link href="/" className={pathname === "/" ? styles.active : ""}>
          Início
        </Link>
        <Link
          href="/servers"
          className={pathname === "/servers" ? styles.active : ""}
        >
          Servidores
        </Link>
        <Link
          href="/about"
          className={pathname === "/about" ? styles.active : ""}
        >
          Sobre
        </Link>
        <Link
          href="/idea"
          className={pathname === "/idea" ? styles.active : ""}
        >
          Ideia
        </Link>
      </nav>
    </header>
  );
};

export default Header;

import { useEffect, useState } from "react";
import logo from "../../src/assets/images/logo.svg";
import searchIcon from "../../src/assets/images/search-icon.svg";
import dropdown from "../../src/assets/images/dropdown-icon.svg";
import styles from "../../components/NavBar/NavBar.module.css";
import openIcon from "../../src/assets/images/open-icon.png";
import closeIcon from "../../src/assets/images/close-icon.png";
import { navBarMarkup } from "./navbar";
import { vh } from "motion";

export default function Navbar() {
  const [open, setOpen] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="container">
      <nav id="section-1" className={scrolled ? styles.navactive : styles.nav}>
        <img
          className={styles.logo}
          src={logo}
          alt="Edufy Logo"
          fetchPriority="high"
        />

        <ul className={!open ? styles.navlinks : styles.navopacity}>
          {navBarMarkup.map((item, index) => (
            <li className={item.className} key={index}>
              <a href={item.link}>{item.title}</a>
              {item.title === "Demos" ||
              item.title === "CMS Pages" ||
              item.title === "Essential Pages" ? (
                <img
                  src={dropdown}
                  alt="Dropdown Icon"
                  className={styles.dropdownicon}
                />
              ) : null}
            </li>
          ))}
        </ul>

        <span className={styles.signin}>
          <img
            src={searchIcon}
            alt="Search Icon"
            className={styles.searchicon}
          />
          <button className={styles.menubtn} onClick={() => setOpen(!open)}>
            <img
              className={styles.openicon}
              srcSet={open ? openIcon : closeIcon}
              alt={open ? "Open Menu" : "Close Menu"}
            />
          </button>
          <button className={styles.loginbtn}>Join Our Course</button>
        </span>
      </nav>
    </header>
  );
}

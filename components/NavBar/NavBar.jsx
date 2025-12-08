import { useState } from "react";
import logo from "../../src/assets/images/logo.svg";
import searchIcon from "../../src/assets/images/search-icon.svg";
import dropdown from "../../src/assets/images/dropdown-icon.svg";
import styles from "../../components/NavBar/NavBar.module.css";
import { navBarMarkup } from "./navbar";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="container">
      <nav id="section-1">
        <img
          className={styles.logo}
          src={logo}
          alt="Edufy Logo"
          fetchPriority="high"
        />

        <ul className={`  ${styles.navlinks}`}>
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
          <button className={styles.menubtn} onClick={() => setOpen(!open)}>
            ☰
          </button>

          <img
            src={searchIcon}
            alt="Search Icon"
            className={styles.searchicon}
          />
          <button className={styles.loginbtn}>Join Our Course</button>
        </span>
      </nav>
    </header>
  );
}

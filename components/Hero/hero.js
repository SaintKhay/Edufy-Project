import heroIcon from "../../src/assets/images/hero-icon1.svg";
import heroIcon2 from "../../src/assets/images/hero-icon2.svg";
import heroIcon3 from "../../src/assets/images/hero-icon3.svg";
import styles from "../../components/Hero/Hero.module.css";

export const designContainer = [
  {
    src: heroIcon,
    alt: "hero-icons",
    className: `${styles.shape1} ${styles.shapes}`,
  },
  {
    src: heroIcon2,
    alt: "hero-icons",
    className: `${styles.shape2} ${styles.shapes}`,
  },
  {
    src: heroIcon3,
    alt: "hero-icons",
    className: `${styles.shape3} ${styles.shapes}`,
  },
];

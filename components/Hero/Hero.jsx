import heroImg from "../../src/assets/images/hero-img.svg";
import star2 from "../../src/assets/images/star-1.svg";
import star1 from "../../src/assets/images/star-2.svg";
import styles from "../../components/Hero/Hero.module.css";
import { gsap } from "gsap/gsap-core";
import TextType from "../../src/animations/TextType.jsx";
import { designContainer } from "./hero.js";
import Button from "../Button.jsx";

export default function Hero() {
  return (
    <section className={`${styles.hero}  container`}>
      <div>
        <TextType
          text={"Study from home with our experts."}
          className={styles.headerprimary}
          typingSpeed={80}
          pauseDuration={500}
          showCursor={false}
          cursorCharacter="_"
        />

        <p className={`page-text  ${styles.headersubtitle}`}>
          Studying from home has never been more effective or convenient, thanks
          to our team of experts. Our specialized online courses are designed to
          bring the classroom experience to you, no matter where you are.
        </p>
        <Button text="Get Started Now" />

        <div className={styles.designcontainer}>
          {designContainer.map((item, index) => (
            <img
              key={index}
              className={item.className}
              src={item.src}
              alt={item.alt}
            />
          ))}

          <img className={styles.star1} src={star1} alt="hero-icons" />
          <img className={styles.star2} src={star2} alt="hero-icons" />
        </div>
      </div>
      <img src={heroImg} alt="hero-img" className={styles.heroimage} />
    </section>
  );
}

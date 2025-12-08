import icon1 from "../src/assets/images/icon1.svg";
import icon2 from "../src/assets/images/icon2.svg";
import icon3 from "../src/assets/images/icon3.svg";
import icon4 from "../src/assets/images/icon4.svg";
import icon5 from "../src/assets/images/icon5.svg";
import icon6 from "../src/assets/images/icon6.svg";
import icon7 from "../src/assets/images/icon7.svg";

export default function SubHero() {
  const subHeroMarkup = [
    { src: icon1, alt: "icon1" },
    { src: icon2, alt: "icon2" },
    { src: icon3, alt: "icon3" },
    { src: icon4, alt: "icon4" },
    { src: icon5, alt: "icon5" },
    { src: icon6, alt: "icon6" },
    { src: icon7, alt: "icon7" },
  ];
  return (
    <section className="sub-hero container">
      {subHeroMarkup.map((item, index) => (
        <img
          key={index}
          src={item.src}
          alt={item.alt}
          className="sub-hero-image"
        />
      ))}
    </section>
  );
}

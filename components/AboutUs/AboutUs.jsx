import aImage from "../../src/assets/images/aboutus-image.svg";
import aIcon1 from "../../src/assets/images/aboutus-icon1.svg";
import aIcon2 from "../../src/assets/images/aboutus-icon2.svg";
import styles from "../../components/AboutUs/AboutUs.module.css";
import Button from "../Button";

export default function AboutUs() {
  const aboutUsMarkUp = [
    {
      title: "Wide Range of Courses",
      description:
        "Explore diverse courses across various disciplines, from technical skills to creative arts, tailored to meet different learning needs.",
      className: "padding-btm",
      icon: aIcon1,
    },
    {
      title: "Expert Instructors",
      description:
        "Learn from industry-leading experts and experienced educators who bring real-world insights and practical knowledge.",
      className: "",
      icon: aIcon2,
    },
  ];

  return (
    <section className="aboutus container" id="section-3">
      <div className="about-us-content ">
        <img
          src={aImage}
          className={`about-us-image ${styles.aboutusimage}`}
          alt="about-us-img"
        />
        <div className="aboutustextcontent">
          <div className="aboutushead">
            <h2>Creating a community of learners.</h2>
            <p className="aboutustext page-text">
              At Edux, we're dedicated to transforming education by providing a
              diverse range of high- quality courses that cater to learners of
              all levels.
            </p>
          </div>

          <div className="aboutussubcontent">
            {aboutUsMarkUp.map((item, index) => (
              <div className="aboutussubsection" key={index}>
                <img
                  className="aboutusimage"
                  src={item.icon}
                  alt="about-us-icon"
                />
                <span className={item.className}>
                  <h3 className=" aboutussubhead">{item.title}</h3>
                  <p className="aboutussubtext page-text">{item.description}</p>
                </span>
              </div>
            ))}
          </div>

          <Button text="Get Started Now" />
        </div>
      </div>
    </section>
  );
}

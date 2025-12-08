import xIcon from "./x-icon.svg";
import copyStyles from "../../components/Courses/Courses.module.css";
import learnStyles from "../../components/Learn/Learn.module.css";
import styles from "./Testimonial.module.css";
import { testimonialData } from "./testimonialMarkup";
import Head from "../Head";

export default function Testimonials() {
  return (
    <section
      className={`courses   ${copyStyles.coursessection}  section-padding`}
    >
      <div className="container">
        <Head
          title="What our students says."
          textfirst=" At Edux, our courses are meticulously curated and delivered by a network
        of highly skilled trainers who"
          textsecond="are experts in their respective fields. Each trainer at Edux."
        />

        <div className={`${copyStyles.coursecardcontainer} ${styles.gap}`}>
          {testimonialData.map((item, index) => (
            <div className={`${styles.testimonialsubsection}`} key={index}>
              <div className={styles.testimonialshead}>
                <img className={styles.testimonialauthor} src={item.image} />
                <div className={`${learnStyles.learnheadspan} ${styles.fill}`}>
                  <span className={styles.aboutauthor}>
                    <h4 className={`${styles.authorname}   page-text`}>
                      {item.name}
                    </h4>
                    <p className={`${styles.username} page-text`}>
                      {item.xUsername}
                    </p>
                  </span>
                  <a href="https://x.com/i/flow/login">
                    <img
                      className={styles.twittericon}
                      src={xIcon}
                      alt="X logo"
                    />
                  </a>
                </div>
              </div>

              <p className={`${styles.testimonial} page-text`}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

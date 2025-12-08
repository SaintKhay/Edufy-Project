import courseIcon from "./course-icon.svg";
import styles from "../../components/Courses/Courses.module.css";
import Head from "../Head";
import { coursesData } from "./course";

export default function Courses() {
  return (
    <section
      className={`courses   ${styles.coursessection} section-padding`}
      id="section-4"
    >
      <div className="container">
        <Head
          title="Our popular courses"
          textfirst=" Our popular courses are designed to meet the diverse needs and
            interests of our students,"
          textsecond="providing top-notch education and practical skills."
        />

        <div className={styles.coursecardcontainer}>
          {coursesData.map((course, index) => (
            <div className={styles.coursecardsubcontent1} key={index}>
              <div>
                <p className={styles.course}>{course.title}</p>
                <h3 className={styles.courseheader}>{course.header}</h3>
                <img
                  loading="lazy"
                  src={course.image}
                  alt="course-icon"
                  className={styles.courseimage}
                />
                <p className={styles.coursetext}>{course.text}</p>
              </div>

              <div className={styles.coursecardsubcontent}>
                <img src={courseIcon} alt="course-icon" />
                <p className={styles.seemore}>12 Lessons</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Head from "../Head";
import { tutorMarkup } from "./tutor";
import styles from "./Tutor.module.css";

export default function Tutor() {
  return (
    <section id="section-8">
      <div className="container section-padding">
        <Head
          title="Courses trainers at Edux."
          textfirst="At Edux, our courses are meticulously curated and delivered by a network of highly skilled trainers"
          textsecond="who are experts in their respective fields. Each trainer at Edux."
        />

        <div className={styles.tutorcontent}>
          {tutorMarkup.map((item, i) => (
            <div key={i}>
              <img
                src={item.image}
                className={styles.tutorimg}
                alt={`An image of ${item.tutorName}`}
              />
              <h3 className={styles.tutorname}>{item.tutorName}</h3>
              <p className={`page-text ${styles.tutoroccupation}`}>
                {item.occupation}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import joinImg from "../../src/assets/images/join-img.svg";
import joinImg2 from "../../src/assets/images/join-img2.svg";
import styles from "../../components/JoinUs/JoinUs.module.css";
import { joinSubsectionData } from "./join";
import Head from "../Head";

export default function Join() {
  return (
    <section className={`${styles.joinsection} container section-padding`}>
      <div className={styles.joincontainer}>
        <Head
          title="Join our free workshop"
          textfirst=" Join our free workshops to unlock a world of learning and growth
          opportunities! Our workshops"
          textsecond="are designed to cater to a diverse
          range of interests and skill levels"
        />
      </div>
      <div className={styles.joinsubcontainer}>
        <img loading="lazy" src={joinImg} className={styles.joinimage}></img>
        <div className={styles.joinsub}>
          <span>
            <h2 className={styles.joinsubhead}>
              Trusted by the 20,000+ happy students and online users since 1994
            </h2>
            <div className={styles.joinbtndiv}>
              <button className={styles.joinbtn}>Join Our Community</button>
            </div>
          </span>

          <div>
            <div className={styles.joinsubsection}>
              {joinSubsectionData.map((item, index) => (
                <span key={index}>
                  <h2 className={styles.joinsubhead}>{item.head}</h2>
                  <p className={styles.joinsubtext}>
                    <strong>{item.text}</strong>
                    <br /> {item.secText}
                  </p>
                </span>
              ))}
            </div>

            <div className={styles.joinsubsection2}>
              <img
                src={joinImg2}
                className={styles.joinimg2}
                loading="lazy"
                alt="Edufy Tutor"
              />
              <p className="page-text">
                "All courses are incredibly to help people to achieve their
                goals"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

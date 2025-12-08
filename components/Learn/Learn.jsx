import React from "react";
import { useState } from "react";
import learnImg from ".//learn-img.svg";
import openIcon from ".//open-icon.svg";
import closeIcon from ".//close-icon.svg";
import styles from ".//Learn.module.css";
import { learnMarkUp } from "./learn.js";

import QandA from "../QandA.jsx";

export default function Learn() {
  const [items, setItems] = useState(learnMarkUp);

  return (
    <section className={`${styles.learncontainer} section-padding`}>
      <div className={`container  ${styles.learncontent}`}>
        <div className={styles.learntxtcontent}>
          <h1 className={`${styles.learntitle} secondary-header`}>
            Learn in 3 simple steps on Edux.
          </h1>

          <div className={`aboutussubcontent  ${styles.learnsubcontent}`}>
            <QandA
              data={items}
              open={openIcon}
              close={closeIcon}
              setState={setItems}
            />
          </div>
        </div>

        <img
          loading="lazy"
          src={learnImg}
          alt="learn-img"
          className={styles.learnimage}
        />
      </div>
    </section>
  );
}

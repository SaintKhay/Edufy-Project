import Head from "../Head";
import styles from "./Faq.module.css";
import plusIcon from "./plus-icon.svg";
import closeIcon from "./minus-icon.svg";
import { useState } from "react";
import { FaqMarkup } from "./faq";
import QandA from "../QandA";

export default function Faq() {
  const [items, setItems] = useState(FaqMarkup);

  return (
    <section className="container">
      <Head
        title="Frequently asked questions"
        textfirst="Frequently Asked Questions (FAQ) sections are vital components of any website, especially for platforms like Edux they"
        textsecond="serve as a centralized hub of information where users can quickly find answers."
      />

      <div className={`${styles.faqcontainer} `}>
        <QandA
          data={items}
          open={plusIcon}
          close={closeIcon}
          setState={setItems}
        />
      </div>
    </section>
  );
}

import Head from "../Head";
import style from "./Articles.module.css";
import { articleMarkup } from "./article";

export default function Article() {
  return (
    <section>
      <div className="container section-padding">
        <Head
          title="Latest news & articles"
          textfirst="Stay informed and inspired with the latest news and articles from Edux. Our dedicated team of "
          textsecond="experts and industry leaders regularly curate insightful content."
        />

        <div className={style.articlecontainer}>
          {articleMarkup.map((item, index) => (
            <div className={style.articlecontent} key={index}>
              <img
                src={item.image}
                className={style.articleimage}
                alt="Image"
                loading="lazy"
              />
              <p className={style.articlehead}>{item.head}</p>
              <h3 className={style.articletext}>{item.text}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

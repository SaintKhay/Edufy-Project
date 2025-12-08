import { aboutData } from "./about";

export default function About() {
  return (
    <section className="about-section">
      <div className="about-container container">
        {aboutData.map((section, index) => {
          return (
            <span className="about-sub" key={index}>
              <img src={section.image} alt="Monitor Icon" />
              <h4 className="about-head ">{section.title}</h4>
              <p className="page-text about-text">{section.content}</p>
            </span>
          );
        })}
      </div>
    </section>
  );
}

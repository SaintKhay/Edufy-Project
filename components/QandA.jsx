export default function QuestionsAndAnswers(prop) {
  function toggle(index) {
    console.log("FAQ toggle called for", index);
    prop.setState((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, isTrue: !item.isTrue } : item
      )
    );
  }

  return prop.data.map((item, i) => (
    <div key={i} className="learnsubsec ">
      <div className="learnheadspan">
        <h3 className="aboutussubhead paddingbottom">{item.heading}</h3>
        <button
          type="button"
          onClick={() => toggle(i)}
          aria-expanded={item.isTrue}
          className="toggleButton"
        >
          <img
            className="toggleicon"
            src={item.isTrue ? prop.close : prop.open}
            alt={item.isTrue ? "Collapse" : "Expand"}
          />
        </button>
      </div>
      <p
        className={`aboutussubtext page-text learnDescription ${
          !item.isTrue ? "closed" : ""
        }`}
      >
        {item.description}
      </p>
    </div>
  ));
}

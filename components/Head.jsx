export default function Head(prop) {
  return (
    <div className="headtextcontent">
      <h2 className="headtitle  secondary-header">{prop.title}</h2>
      <p className="page-text">
        {prop.textfirst} {prop.textsecond}
      </p>
    </div>
  );
}

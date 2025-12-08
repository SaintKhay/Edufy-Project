export default function Button(prop) {
  return (
    <div className={`btn-container `}>
      <button className={`btn ${prop.classname}`}>{prop.text}</button>
    </div>
  );
}

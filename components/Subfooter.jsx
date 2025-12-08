import Button from "./Button";
import subfooterimage from "../src/assets/images/subfooter.svg";
export default function () {
  return (
    <section className="">
      <div
        className="subfooter"
        style={{
          backgroundImage: `url(${subfooterimage})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          minHeight: "100%",
        }}
      >
        <div className="subfooter-textcontainer container">
          <h3>Are you ready to start your course?</h3>
          <Button text="Get Started Now" classname="btn-color2" />
        </div>
      </div>
    </section>
  );
}

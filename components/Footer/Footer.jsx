import style from "./Footer.module.css";
import facebook from "./facebook.svg";
import linkedin from "./linkedin.svg";
import twitter from "./twitter.svg";

import footerlogo from "../../src/assets/images/logo.svg";
export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={` container ${style.footercontainer}`}>
        <div className={style.footercontent}>
          <img src={footerlogo} alt="Edufy-logo" className="logo" />
          <p className={`${style.footertext} page-text`}>
            At Edux, we provide top-tier E-learning to the services to meet all
            your educational needs. Whether you're a student.
          </p>

          <div className={style.media}>
            <a href="#" className={style.socialmedia}>
              <img src={facebook} alt="Facebook" />
            </a>
            <a href="#" className={style.socialmedia}>
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a href="#" className={style.socialmedia}>
              <img src={twitter} alt="Twitter" />
            </a>
          </div>
        </div>

        <div className={style.footercontent}>
          <ul>
            <li className={style.footerfirst}>Company</li>
            <li>
              <a href="#section-1">Home</a>
            </li>
            <li>
              <a href="#section-4">Courses</a>
            </li>
            <li>
              <a href="#section-3">About Us</a>
            </li>
          </ul>
        </div>

        <div className={style.footercontent}>
          <ul>
            <li className={style.footerfirst}>Other Pages</li>
            <li>
              <a href="#section-8">Instructor</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms & Condition</a>
            </li>
          </ul>
        </div>

        <div className={style.footercontent}>
          <ul>
            <li className={style.footerfirst}>Pages</li>
            <li>
              <a href="#">Contacts</a>
            </li>
            <li>
              <a href="#">404</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

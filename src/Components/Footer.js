import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaMusic } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>
            Emin<span>Rasen</span>
          </h3>

          <p className="footer-links">TURKMEN RAP İÑ DALISI</p>

          <p className="footer-company-name">eminrasen.ir &copy; 2020</p>
        </div>

        <div className="footer-center">
          <p>لینک های کاربردی</p>
          <ul>
            <li>
              <Link to="/eminrasen-ir">
                صفحه اصلی <FaHome />
              </Link>
            </li>
            <li>
              <Link to="/songs">
                آهنگ <FaMusic />
              </Link>
            </li>
            <li>
              <Link to="/musicvideo">
                موزیک ویدئو <FaVideo />
              </Link>
            </li>
            <li>
              <Link to="/aboutus">
                درباره ما <FaInfoCircle />
              </Link>
            </li>
            <li>
              <Link to="/contactus">
                تماس با ما <FaPhoneAlt />
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>شبکه های اجتماعی</span>
            صفحه رسمی امین راسن در شبکه های اجتماعی را دنبال کنید
          </p>

          <div className="footer-icons">
            <a
              href="https://www.instagram.com/amin_rasen/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://t.me/rasenrap1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegramPlane />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <hr className="footer-hr" />
          <p>
            طراحی سایت توسط تیم <span>آتیال</span>
          </p>
        </div>
      </footer>
    );
  }
}

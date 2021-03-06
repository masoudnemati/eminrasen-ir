import React, { Component } from "react";
import Logo from "../assets/images/dalitoporlogo.png";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaMusic } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

export default class Navbar extends Component {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/eminrasen-ir">
              <img src={Logo} height="75" width="75" alt="Dalitopor" />
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
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
              <Link to="/about-us">
                درباره ما <FaInfoCircle />
              </Link>
            </li>
            <li>
              <Link to="/contact-us">
                تماس با ما <FaPhoneAlt />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

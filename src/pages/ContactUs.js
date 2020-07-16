import React from "react";
import EminRasenIns from "../assets/images/eminraseninstagram.jpg";
import AtyalLogo from "../assets/images/atyallogo.png";
import Awill from "../assets/images/awill.jpg";
import Dali from "../assets/images/dali.jpg";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

export default function ContactUs() {
  window.scrollTo(0, 0);
  return (
    <main className="contactus-main">
      <address className="emin">
        <img
          width="125"
          height="125"
          src={EminRasenIns}
          alt="eminrasen"
          className="contactus-emin-img"
        />
        <h2>Emin Rasen</h2>
        <p>TURKMEN RAP İÑ DALISI</p>
        <hr />
        <a
          href="https://www.instagram.com/amin_rasen/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="contactus-icons" /> Instagram: amin-rasen
        </a>
        <a
          href="https://t.me/rasenrap1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegramPlane className="contactus-icons" /> Telegram: rasenrap1
        </a>
      </address>

      <address className="contactus-atyal">
        <img
          width="125"
          height="125"
          src={AtyalLogo}
          alt="atyal"
          className="contactus-atyal-img"
        />
        <h2>Atyal</h2>
        <p>Web Developer</p>
        <hr />
        <a
          href="https://www.instagram.com/masoudnemati1994/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="contactus-icons" /> masoudnemati1994
        </a>
        <a href="https://t.me/atyal" target="_blank" rel="noopener noreferrer">
          <FaTelegramPlane className="contactus-icons" /> Telegram: atyal
        </a>
        <a href="https://atyal.ir" target="_blank" rel="noopener noreferrer">
          <FaGlobe className="contactus-icons" /> Website: atyal.ir
        </a>
      </address>

      <address className="contactus-doo">
        <img
          width="125"
          height="125"
          src={Dali}
          alt="dali"
          className="contactus-doo-img"
        />
        <h2>Doo Dali</h2>
        <p>Producer</p>
        <hr />
        <a
          href="https://www.instagram.com/doo_dali/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="contactus-icons" /> Instagram: doo_dali
        </a>
      </address>

      <address className="awill">
        <img width="125" height="125" src={Awill} alt="awill" />
        <h2>Awill Photography</h2>
        <p>Videography &amp; Photography </p>
        <hr />
        <a
          href="https://www.instagram.com/awill.photography/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="contactus-icons" /> awill.photography
        </a>
      </address>
    </main>
  );
}

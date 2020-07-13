import React from "react";
import EminRasenIns from "../assets/images/eminraseninstagram.jpg";
import ReactLogo from "../assets/images/reactlogo.jpg";
import Awill from "../assets/images/awill.jpg";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

export default function ContactUs() {
  return (
    <main className="contactus-main">
      <address className="emin">
        <img
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
        <img src={ReactLogo} alt="atyal" className="contactus-atyal-img" />
        <h2>Atyal</h2>
        <p>Web Developer</p>
        <hr />
        <a
          href="https://www.instagram.com/masoudnemati1994/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="contactus-icons" /> Instagram:
          masoudnemati1994
        </a>
        <a href="https://t.me/atyal" target="_blank" rel="noopener noreferrer">
          <FaTelegramPlane className="contactus-icons" /> Telegram: atyal
        </a>
        <a href="https://atyal.ir" target="_blank" rel="noopener noreferrer">
          <FaReact className="contactus-icons" /> Website: atyal.ir
        </a>
      </address>

      <address className="awill">
        <img src={Awill} alt="awill" />
        <h2>Awill Photography</h2>
        <p>Videography &amp; Photography </p>
        <hr />
        <a
          href="https://www.instagram.com/awill.photography/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="contactus-icons" /> Instagram:
          awill.photography
        </a>
      </address>
    </main>
  );
}

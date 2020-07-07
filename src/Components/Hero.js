import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

export default function Hero() {
  return (
    <main>
      <div className="hero">
        <h1 className="heroheader">EMIN RASEN</h1>
        <h4 className="herodes">TURKMEN RAP İÑ DALISI</h4>
        <div className="icons">
          <div className="instagramicon">
            <a href="https://www.instagram.com/amin_rasen/">
              <FaInstagram />
            </a>
          </div>
          <div>
            <a href="https://t.me/rasenrap1">
              <FaTelegramPlane />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

import React from "react";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import "./header.css";
import ProfilePhoto from "../../assets/ryan-walton 1.png";

export default function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello everyone!</h5>
        <h1>Aizirek Nurlanbekova</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="profile">
          <img src={ProfilePhoto} alt="photo" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

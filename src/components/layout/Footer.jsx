import React from "react";
import lemonLogo from "./../../assets/LogoWhite.png";
import ExternalRedirectBtn from "../ui/ExternalRedirectBtn";
import "./Footer.css";

const COMPANY_LINKS = [
  { id: 1, label: "About", to: "https://little-lemon.com/about" },
  { id: 2, label: "Careers", to: "https://little-lemon.com/careers" },
  { id: 3, label: "Press Releases", to: "https://little-lemon.com/press" },
  {
    id: 4,
    label: "Exclusive Recipes",
    to: "https://little-lemon.com/exclusive",
  },
  { id: 5, label: "Our Kitchen", to: "https://little-lemon.com/our-kitchen" },
];

const SOCIAL_LINKS = [
  {
    id: 1,
    label: "Faceboook",
    to: "https://facebook.com",
  },
  {
    id: 2,
    label: "Instagram",
    to: "https://instagram.com",
  },
  {
    id: 3,
    label: "Youtube",
    to: "https://youtube.com",
  },
];

const FooterLinks = ({ links }) => {
  return (
    <ul className="footer-links">
      {links.map((link) => (
        <ExternalRedirectBtn url={link.to} key={link.id}>
          {link.label}
        </ExternalRedirectBtn>
      ))}
    </ul>
  );
};

const Footer = () => {
  return (
    <footer>
      <div className="img-wrapper">
        <img src={lemonLogo} alt="Little Lemon" width={300} />
      </div>
      <div className="info">
        <div>
          <h3>Reach out to us </h3>
          <address className="label">
            Little Lemon
            <br />
            Box 564, Disneyland
            <br />
            USA
          </address>
        </div>
        <div>
          <h3>Get to know us</h3>
          {<FooterLinks links={COMPANY_LINKS} />}
        </div>
        <div>
          <h3>Connect with us</h3>
          <ul>{<FooterLinks links={SOCIAL_LINKS} />}</ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

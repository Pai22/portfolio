import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Sarunporn</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>

          <li>
            <a href="#Testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://web.facebook.com/profile.php?id=100005532196509"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="bx bxl-facebook"></i>
          </a>

          <a
            href="https://www.instagram.com/sxpp03/"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="bx bxl-instagram"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/%E0%B8%AA%E0%B8%A3%E0%B8%B1%E0%B8%A5%E0%B8%9E%E0%B8%A3-%E0%B8%9E%E0%B8%B9%E0%B8%A5%E0%B8%A0%E0%B8%B2%E0%B8%9E-47a5162b2/"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="bx bxl-twitter"></i>
          </a>
        </div>

        {/* <span className="footer__copy">&#169; Sarunporn. All rigths reserved</span> */}
      </div>
    </footer>
  );
};

export default Footer;

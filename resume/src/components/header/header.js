import React from "react";

function Header() {
  return (
    <header id="home">
      <nav id="nav-wrap">
        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
              Resume
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              Works
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#testimonials">
              Testimonials
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">I'm Scout Lerma.</h1>
          <h3>
            I am an <span>Austin</span> based <span>Software Developer </span>
            with a background in event management. Passionate about learning,
            detail oriented, and self-driven. Currently a student in the
            University of Texas <span>full-stack development</span> coding
            bootcamp . Let's{" "}
            <a className="smoothscroll" href="#about">
              start scrolling
            </a>{" "}
            and learn more{" "}
            <a className="smoothscroll" href="#about">
              about me
            </a>
            .
          </h3>
          <hr />
          <ul className="social">
            <li>
              <a href="#">
                <i className="fa fa-facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-google-plus" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-linkedin" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-instagram" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-dribbble" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-skype" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle" />
        </a>
      </p>
    </header>
  );
}
export default Header;

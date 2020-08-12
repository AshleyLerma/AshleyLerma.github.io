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
          <h1 className="responsive-headline">I'm Ashley Lerma.</h1>
          <h3>
            An <span>Austin</span> based <span>Software Developer </span>
            with a background in event management. Detail oriented, and
            self-driven with a passion for learning. Enrolled in the{" "}
            <span>full-stack development</span> coding bootcamp at the
            University of Texas at Austin.
            {/* Let's{" "}
            <a className="smoothscroll" href="#about">
              start scrolling
            </a>{" "}
            . */}
          </h3>
          <hr />
          <ul className="social">
            <li>
              <a href="https://www.linkedin.com/in/ashleylerma/" target="blank">
                <i className="fa fa-linkedin" />
              </a>
            </li>
            <li>
              <a href="https://github.com/AshleyLerma" target="blank">
                <i className="fa fa-github" />
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

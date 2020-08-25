import React from "react";

function Footer() {
  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            <li>
              <a href="https://www.linkedin.com/in/ashleylerma/" target="blank">
                <i className="fa fa-linkedin" />
              </a>
            </li>
            <li>
              <a href="https://instagram.com/scoutlerma" target="blank">
                <i className="fa fa-instagram" />
              </a>
            </li>
            <li>
              <a href="https://github.com/AshleyLerma" target="blank">
                <i className="fa fa-github" />
              </a>
            </li>
          </ul>
        </div>
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open" />
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;

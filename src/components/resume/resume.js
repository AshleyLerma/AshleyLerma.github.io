import React from "react";

function Resume() {
  return (
    <section id="resume">
      {/* Education*/}
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>
        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              <h3>University of Texas at Austin</h3>
              <p className="info">
                Full Stack Coding Bootcamp <span>•</span>{" "}
                <em className="date">October 2020</em>
              </p>
              <p>Some stuff about the Coding Bootcamp.</p>
            </div>
          </div>{" "}
          {/* item end */}
          <div className="row item">
            <div className="twelve columns">
              <h3>University of Texas at Austin</h3>
              <p className="info">
                B.A. Degree in International Relations and Global Studies{" "}
                <span>•</span> <em className="date">May 2016</em>
              </p>
              <p>This is some info about my bachelors from UT</p>
            </div>
          </div>{" "}
          {/* item end */}
        </div>{" "}
        {/* main-col end */}
      </div>{" "}
      {/* End Education */}
      {/* Work */}
      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Professional</span>
          </h1>
        </div>
        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              <h3>New Waterloo</h3>
              <p className="info">
                Conference Services Manager <span>•</span>{" "}
                <em className="date">September 2016 - Present</em>
              </p>
              <p>Stuff about my job.</p>
            </div>
          </div>{" "}
          {/* item end */}
          {/* <div className="row item">
            <div className="twelve columns">
              <h3>Super Cool Studio</h3>
              <p className="info">
                UX Designer <span>•</span>{" "}
                <em className="date">March 2007 - February 2010</em>
              </p>
              <p>
                This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                vel velit auctor aliquet. Aenean sollicitudin, lorem quis
                bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit
                amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio
                tincidunt auctor a ornare odio. Sed non mauris vitae erat
              </p>
            </div>
          </div>{" "}
          item end */}
        </div>{" "}
        {/* main-col end */}
      </div>{" "}
      {/* End Work */}
      {/* Skills*/}
      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>
        <div className="nine columns main-col">
          <p>Some stuff about my skills</p>
          <div className="bars">
            <ul className="skills">
              <li>
                <span className="bar-expand photoshop" />
                <em>React JS</em>
              </li>
              <li>
                <span className="bar-expand illustrator" />
                <em>Javascript</em>
              </li>
              <li>
                <span className="bar-expand wordpress" />
                <em>jQuery</em>
              </li>
              <li>
                <span className="bar-expand css" />
                <em>CSS</em>
              </li>
              <li>
                <span className="bar-expand html5" />
                <em>HTML5</em>
              </li>
              <li>
                <span className="bar-expand jquery" />
                <em>MongoDB</em>
              </li>
            </ul>
          </div>
          {/* end skill-bars */}
        </div>
        {/* main-col end */}
      </div>
      {/* End skills */}
    </section>
  );
}

export default Resume;

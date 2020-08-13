import React from "react";

function Portfolio() {
  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          {/* portfolio-wrapper */}
          <div id="portfolio-wrapper" className="bgrid-thirds cf">
            <div className="columns portfolio-item">
              <div className="item-wrap">
                <a href="#modal-01" title="work">
                  <img alt="cocktail" src="images/portfolio/gitDrunk.jpg" />
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>gitDrunk</h5>
                      <p>
                        Look up cocktails based on the ingredients you have at
                        home.
                      </p>
                    </div>
                  </div>
                  <div className="link-icon">
                    <i className="icon-plus" />
                  </div>
                </a>
              </div>
            </div>
            {/* item end */}
            <div className="columns portfolio-item">
              <div className="item-wrap">
                <a href="#modal-02" title="work">
                  <img alt="tbd" src="images/portfolio/bagit.jpg" />
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>BagIt</h5>
                      <p>Grocery List App</p>
                    </div>
                  </div>
                  <div className="link-icon">
                    <i className="icon-plus" />
                  </div>
                </a>
              </div>
            </div>
            {/* item end */}
            <div className="columns portfolio-item">
              <div className="item-wrap">
                <a href="#modal-03" title="work">
                  <img alt="notepad" src="images/portfolio/noteTaker.jpg" />
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>Note Taker</h5>
                      <p>Note taking application</p>
                    </div>
                  </div>
                  <div className="link-icon">
                    <i className="icon-plus" />
                  </div>
                </a>
              </div>
            </div>
            {/* item end */}
            <div className="columns portfolio-item">
              <div className="item-wrap">
                <a href="#modal-04" title="work">
                  <img alt="weather" src="images/portfolio/weatherApp.jpg" />
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>Weather Dashboard</h5>
                      <p>Weather application</p>
                    </div>
                  </div>
                  <div className="link-icon">
                    <i className="icon-plus" />
                  </div>
                </a>
              </div>
            </div>
            {/* item end */}
            <div className="columns portfolio-item">
              <div className="item-wrap">
                <a href="#modal-05" title="work">
                  <img alt="question mark" src="images/portfolio/quiz.jpg" />
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>Office Quiz</h5>
                      <p>Test your knowledge of the hit show The Office.</p>
                    </div>
                  </div>
                  <div className="link-icon">
                    <i className="icon-plus" />
                  </div>
                </a>
              </div>
            </div>
            {/* item end */}
            <div className="columns portfolio-item">
              <div className="item-wrap">
                <a href="#modal-06" title="work">
                  <img alt="planner" src="images/portfolio/planner.jpg" />
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>Day Planner</h5>
                      <p>Day scheduler application.</p>
                    </div>
                  </div>
                  <div className="link-icon">
                    <i className="icon-plus" />
                  </div>
                </a>
              </div>
            </div>
            {/* item end */}
          </div>
          {/* portfolio-wrapper end */}
        </div>
        {/* twelve columns end */}
        {/* Modal Popup */}
        <div id="modal-01" className="popup-modal mfp-hide">
          <img
            className="scale-with-grid"
            src="images/portfolio/modals/m-gitDrunk.jpg"
            alt="cocktail"
          />
          <div className="description-box">
            <h4>gitDrunk</h4>
            <p>Look up cocktails based on the ingredients you have at home.</p>
            <span className="categories">
              <i className="fa fa-tag" />
              html, css, javascript
            </span>
          </div>
          <div className="link-box">
            <a href="https://party-of-five.github.io/gitDrunk/" target="blank">
              Try It
            </a>
            <a href="https://github.com/Party-of-Five/gitDrunk" target="blank">
              Details
            </a>
            <a className="popup-modal-dismiss">Close</a>
          </div>
        </div>
        {/* modal-01 End */}
        <div id="modal-02" className="popup-modal mfp-hide">
          <img
            className="scale-with-grid"
            src="images/portfolio/modals/m-bagit.jpg"
            alt="grocery cart"
          />
          <div className="description-box">
            <h4>BagIt</h4>
            <p>Keep track of your grocery list and shop with ease.</p>
            <span className="categories">
              <i className="fa fa-tag" />
              Javascript, HTML, SQL, Sequelize, CSS, React
            </span>
          </div>
          <div className="link-box">
            <a href="https://bagit-and-tagit.herokuapp.com/" target="blank">
              Try It
            </a>
            <a href="https://github.com/The-CallBack-Cats/BagIt" target="blank">
              Details
            </a>
            <a className="popup-modal-dismiss">Close</a>
          </div>
        </div>
        {/* modal-02 End */}
        <div id="modal-03" className="popup-modal mfp-hide">
          <img
            className="scale-with-grid"
            src="images/portfolio/modals/m-noteTaker.jpg"
            alt="notepad"
          />
          <div className="description-box">
            <h4>Note Taker</h4>
            <p>
              An application that can be used to write, save, and delete notes.
            </p>
            <span className="categories">
              <i className="fa fa-tag" />
              Javascript, HTML, CSS, Express
            </span>
          </div>
          <div className="link-box">
            <a href="https://note-taker-ashley.herokuapp.com/" target="blank">
              Try It
            </a>
            <a href="https://github.com/AshleyLerma/NoteTaker" target="blank">
              Details
            </a>
            <a className="popup-modal-dismiss">Close</a>
          </div>
        </div>
        {/* modal-03 End */}
        <div id="modal-04" className="popup-modal mfp-hide">
          <img
            className="scale-with-grid"
            src="images/portfolio/modals/m-weatherApp.jpg"
            alt="weather"
          />
          <div className="description-box">
            <h4>Weather Dashboard</h4>
            <p>Check the weather and forecast anywhere around the world.</p>
            <span className="categories">
              <i className="fa fa-tag" />
              HTML, CSS, Javascript
            </span>
          </div>
          <div className="link-box">
            <a
              href="https://ashleylerma.github.io/Weather-Dashboard/"
              target="blank"
            >
              Try It
            </a>
            <a
              href="https://github.com/AshleyLerma/Weather-Dashboard"
              target="blank"
            >
              Details
            </a>
            <a className="popup-modal-dismiss">Close</a>
          </div>
        </div>
        {/* modal-04 End */}
        <div id="modal-05" className="popup-modal mfp-hide">
          <img
            className="scale-with-grid"
            src="images/portfolio/modals/m-quiz.jpg"
            alt="question marks"
          />
          <div className="description-box">
            <h4>Office Quiz</h4>
            <p>
              Test your knowledge of the hit TV series The Office with this
              timed quiz.
            </p>
            <span className="categories">
              <i className="fa fa-tag" />
              Javascript, HTML, CSS
            </span>
          </div>
          <div className="link-box">
            <a href="https://ashleylerma.github.io/codeQuiz/" target="blank">
              Try It
            </a>
            <a href="https://github.com/AshleyLerma/codeQuiz" target="blank">
              Details
            </a>
            <a className="popup-modal-dismiss">Close</a>
          </div>
        </div>
        {/* modal-05 End */}
        <div id="modal-06" className="popup-modal mfp-hide">
          <img
            className="scale-with-grid"
            src="images/portfolio/modals/m-planner.jpg"
            alt="planner"
          />
          <div className="description-box">
            <h4>Day Planner</h4>
            <p>
              Day scheduler application that allows you to easily reference what
              you still have to do for the day.
            </p>
            <span className="categories">
              <i className="fa fa-tag" />
              Javascript, HTML, CSS
            </span>
          </div>
          <div className="link-box">
            <a href="https://ashleylerma.github.io/dayPlanner/" target="blank">
              Try It
            </a>
            <a href="https://github.com/AshleyLerma/dayPlanner" target="blank">
              Details
            </a>
            <a className="popup-modal-dismiss">Close</a>
          </div>
        </div>
        {/* modal-06 End */}
      </div>
      {/* row End */}
    </section>
  );
}
export default Portfolio;

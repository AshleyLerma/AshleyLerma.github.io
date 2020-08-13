import React from "react";

function Portfolio() {
  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          {/* portfolio-wrapper */}
          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            <div className="columns portfolio-item">
              <div className="item-wrap">
                <a href="#modal-01" title="work">
                  <img alt="tbd" src="images/portfolio/gitDrunk.jpg" />
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
                  <img alt="tbd" src="images/portfolio/farmerboy.jpg" />
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>Farmer Boy</h5>
                      <p>Branding</p>
                    </div>
                  </div>
                  <div className="link-icon">
                    <i className="icon-plus" />
                  </div>
                </a>
              </div>
            </div>{" "}
            {/* item end */}
            <div className="columns portfolio-item">
              <div className="item-wrap">
                <a href="#modal-06" title="work">
                  <img alt="tbd" src="images/portfolio/girl.jpg" />
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>Girl</h5>
                      <p>Photography</p>
                    </div>
                  </div>
                  <div className="link-icon">
                    <i className="icon-plus" />
                  </div>
                </a>
              </div>
            </div>{" "}
            {/* item end */}
            <div className="columns portfolio-item">
              <div className="item-wrap">
                <a href="#modal-07" title="work">
                  <img alt="tbd" src="images/portfolio/origami.jpg" />
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>Origami</h5>
                      <p>Illustrration</p>
                    </div>
                  </div>
                  <div className="link-icon">
                    <i className="icon-plus" />
                  </div>
                </a>
              </div>
            </div>{" "}
            {/* item end */}
            <div className="columns portfolio-item">
              <div className="item-wrap">
                <a href="#modal-08" title="work">
                  <img alt="tbd" src="images/portfolio/retrocam.jpg" />
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>Retrocam</h5>
                      <p>Web Development</p>
                    </div>
                  </div>
                  <div className="link-icon">
                    <i className="icon-plus" />
                  </div>
                </a>
              </div>
            </div>{" "}
            {/* item end */}
          </div>{" "}
          {/* portfolio-wrapper end */}
        </div>{" "}
        {/* twelve columns end */}
        {/* Modal Popup
	      --------------------------------------------------------------- */}
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
            <a className="popup-modal-dismiss">Close</a>
          </div>
        </div>
        {/* modal-04 End */}
        <div id="modal-05" className="popup-modal mfp-hide">
          <img
            className="scale-with-grid"
            src="images/portfolio/modals/m-farmerboy.jpg"
            alt="tbd"
          />
          <div className="description-box">
            <h4>Farmer Boy</h4>
            <p>
              Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
              lorem quis bibendum auctor, nisi elit consequat ipsum, nec
              sagittis sem nibh id elit.
            </p>
            <span className="categories">
              <i className="fa fa-tag" />
              Branding, Webdesign
            </span>
          </div>
          <div className="link-box">
            <a href="http://www.behance.net">Details</a>
            <a className="popup-modal-dismiss">Close</a>
          </div>
        </div>
        {/* modal-05 End */}
        <div id="modal-06" className="popup-modal mfp-hide">
          <img
            className="scale-with-grid"
            src="images/portfolio/modals/m-girl.jpg"
            alt="tbd"
          />
          <div className="description-box">
            <h4>Girl</h4>
            <p>
              Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
              lorem quis bibendum auctor, nisi elit consequat ipsum, nec
              sagittis sem nibh id elit.
            </p>
            <span className="categories">
              <i className="fa fa-tag" />
              Photography
            </span>
          </div>
          <div className="link-box">
            <a href="http://www.behance.net">Details</a>
            <a className="popup-modal-dismiss">Close</a>
          </div>
        </div>
        {/* modal-06 End */}
        <div id="modal-07" className="popup-modal mfp-hide">
          <img
            className="scale-with-grid"
            src="images/portfolio/modals/m-origami.jpg"
            alt="tbd"
          />
          <div className="description-box">
            <h4>Origami</h4>
            <p>
              Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
              lorem quis bibendum auctor, nisi elit consequat ipsum, nec
              sagittis sem nibh id elit.
            </p>
            <span className="categories">
              <i className="fa fa-tag" />
              Branding, Illustration
            </span>
          </div>
          <div className="link-box">
            <a href="http://www.behance.net">Details</a>
            <a className="popup-modal-dismiss">Close</a>
          </div>
        </div>
        {/* modal-07 End */}
        <div id="modal-08" className="popup-modal mfp-hide">
          <img
            className="scale-with-grid"
            src="images/portfolio/modals/m-retrocam.jpg"
            alt="tbd"
          />
          <div className="description-box">
            <h4>Retrocam</h4>
            <p>
              Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
              lorem quis bibendum auctor, nisi elit consequat ipsum, nec
              sagittis sem nibh id elit.
            </p>
            <span className="categories">
              <i className="fa fa-tag" />
              Webdesign, Photography
            </span>
          </div>
          <div className="link-box">
            <a href="http://www.behance.net">Details</a>
            <a className="popup-modal-dismiss">Close</a>
          </div>
        </div>
        {/* modal-01 End */}
      </div>
      {/* row End */}
    </section>
  );
}
export default Portfolio;

import React from "react";

function Contact() {
  return (
    <section id="contact">
      <div className="row section-head">
        <div className="two columns header-col">
          <h1>
            <span>Get In Touch.</span>
          </h1>
        </div>
        <div className="ten columns">
          <p className="lead">
            I am always looking for a new challenge, so if you think I would be
            a good fit for your company or project please contact me.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="eight columns">
          <form action="" method="post" id="contactForm" name="contactForm">
            <fieldset>
              <div>
                <label htmlFor="contactName">
                  Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  defaultValue={""}
                  size={35}
                  id="contactName"
                  name="contactName"
                />
              </div>
              <div>
                <label htmlFor="contactEmail">
                  Email <span className="required">*</span>
                </label>
                <input
                  type="text"
                  defaultValue={""}
                  size={35}
                  id="contactEmail"
                  name="contactEmail"
                />
              </div>
              <div>
                <label htmlFor="contactSubject">Subject</label>
                <input
                  type="text"
                  defaultValue={""}
                  size={35}
                  id="contactSubject"
                  name="contactSubject"
                />
              </div>
              <div>
                <label htmlFor="contactMessage">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  cols={50}
                  rows={15}
                  id="contactMessage"
                  name="contactMessage"
                  defaultValue={""}
                />
              </div>
              <div>
                <button className="submit">Submit</button>
                <span id="image-loader">
                  <img alt="loading" src="images/loader.gif" />
                </span>
              </div>
            </fieldset>
          </form>
          {/* contact-warning */}
          <div id="message-warning">
            {" "}
            There was an error, please try again.{" "}
          </div>
          {/* contact-success */}
          <div id="message-success">
            <i className="fa fa-check" />
            Your message was sent, thank you!
            <br />
          </div>
        </div>
        <aside className="four columns footer-widgets">
          <div className="widget widget_contact">
            <h4>Reach Out Directly</h4>
            <p className="address">
              Ashley "Scout" Lerma
              <br />
              lerma.scout@gmail.com
              <br />
              Austin, TX 78741 US
              <br />
              <span>(512) 636-3282</span>
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
export default Contact;

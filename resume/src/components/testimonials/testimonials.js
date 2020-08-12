import React from "react";

function Testimonials() {
  return (
    <section id="testimonials">
      <div className="text-container">
        <div className="row">
          <div className="two columns header-col">
            <h1>
              <span>Client Testimonials</span>
            </h1>
          </div>
          <div className="ten columns flex-container">
            <div className="flexslider">
              <ul className="slides">
                <li>
                  <blockquote>
                    <p>
                      The greatest performance improvement of all is when a
                      system goes from not-working to working.
                    </p>
                    <cite>John Ousterhout</cite>
                  </blockquote>
                </li>
                <li>
                  <blockquote>
                    <p>
                      "'You miss 100 percent of the chances you don't take.' –
                      Wayne Gretzky"
                    </p>
                    <cite>Michael Scott</cite>
                  </blockquote>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Testimonials;

import React from "react";
import Item from "./Item";
import projects from "./itemInfo";
import Modal from "./Modal";

function Works() {
  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          {/* portfolio-wrapper */}
          <div id="portfolio-wrapper" className="bgrid-thirds cf">
            <React.Fragment>
              {projects.map((currentItem, index) => {
                return (
                  <Item
                    currentItem = {currentItem}
                    key = {index}
                  />
                );
              })}
            </React.Fragment>
          </div>
          {/* portfolio-wrapper end */}
        </div>
        {/* twelve columns end */}
        {/* Modal Popup */}
        {projects.map((currentItem, index) => {
                return (
                  <Modal
                    currentItem = {currentItem}
                    key = {index}
                  />
                );
              })}
      </div>
      {/* row End */}
    </section>
  );
}
export default Works;

import React from "react";

function Modal(props) {
  return (
    <div id={props.currentItem.id} className="popup-modal mfp-hide">
          <img
            className="scale-with-grid"
            src="images/portfolio/modals/m-gitDrunk.jpg"
            alt={props.currentItem.name}
          />
          <div className="description-box">
            <h4>{props.currentItem.name}</h4>
            <p>{props.currentItem.description}</p>
            <span className="categories">
              <i className="fa fa-tag" />
              {props.currentItem.tags}
            </span>
          </div>
          <div className="link-box">
            <a href={props.currentItem.tryIt} target="blank">
              Try It
            </a>
            {"  "}
            <a href={props.currentItem.details} target="blank">
              Details
            </a>
            <a href="#/" className="popup-modal-dismiss">
              Close
            </a>
          </div>
        </div>
  );
}
export default Modal;
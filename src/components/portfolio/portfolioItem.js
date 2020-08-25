import React from "react";
// import projects from "./itemInfo";

function Item(props) {
  return (
    <div className="columns portfolio-item">
      <div className="item-wrap">
        <a href={props.modal} title="work">
          <img alt={props.name} src={props.image} />
          <div className="overlay">
            <div className="portfolio-item-meta">
              <h5>{props.name}</h5>
              <p>{props.description}</p>
            </div>
          </div>
          <div className="link-icon">
            <i className="icon-plus" />
          </div>
        </a>
      </div>
    </div>
  );
}
export default Item;

import React from "react";

function Item(props) {
  return (
    <div className="columns portfolio-item">
      <div className="item-wrap">
        <a href={props.currentItem.modal} title="work">
          <img alt={props.currentItem.name} src={props.currentItem.image} />
          <div className="overlay">
            <div className="portfolio-item-meta">
              <h5>{props.currentItem.name}</h5>
              <p>{props.currentItem.description}</p>
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

import React from "react";
import "./Item.css";

const Item = (props) => {
  return (
    <div className="list-item">
      <p>{props.item.text}</p>
    </div>
  );
};

export default Item;

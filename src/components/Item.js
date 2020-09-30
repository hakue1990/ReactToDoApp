import React from "react";
import "./Item.css";

const Item = (props) => {
  return <h1>{props.item.text}</h1>;
};

export default Item;

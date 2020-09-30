import React from "react";
import "./ListItems.css";
import Item from "./Item";

const ListItems = (props) => {
  const items = props.items.map((item) => <Item item={item} key={item.key} />);
  return <React.Fragment>{items}</React.Fragment>;
};

export default ListItems;

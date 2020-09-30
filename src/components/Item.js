import React from "react";
import "./Item.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Item = (props) => {
  return (
    <div className="list-item">
      <p>
        {props.item.text}{" "}
        <span>
          <FontAwesomeIcon className="faicons" icon="trash" />
        </span>
      </p>
    </div>
  );
};

export default Item;

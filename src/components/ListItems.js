import React from "react";
import "./ListItems.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ListItems = (props) => {
  const tasks = props.tasks.map((task) => (
    <div key={task.id}>
      <p>
        {task.text}
        <span>
          <FontAwesomeIcon className="faicons" icon="trash" />
        </span>
      </p>
    </div>
  ));
  return <div className="list">{tasks}</div>;
};

export default ListItems;

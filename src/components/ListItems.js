import React from "react";
import "./ListItems.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ListItems = (props) => {
  const tasks = props.tasks.map((task) => (
    <div key={task.id} className="list">
      <p>
        {task.text}
        <span onClick={() => props.delete(task.id)}>
          <FontAwesomeIcon className="faicons" icon="trash" />
        </span>
      </p>
    </div>
  ));
  return <div>{tasks}</div>;
};

export default ListItems;

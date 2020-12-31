import React from "react";
import "./BugCard.css";
import PriorityController from "../../Controllers/PriorityController";

const BugCard = (props) => {
  const { name, priority, version } = props.bug;
  const { label, color } = PriorityController(priority);

  const style = {
    backgroundColor: color,
  };

  return (
    <div className="bug-card">
      <h2 className="name">{name}</h2>
      <h4 className="priority" style={style}>
        {label}
      </h4>
      <h5 className="version">{version}</h5>
    </div>
  );
};

export default BugCard;

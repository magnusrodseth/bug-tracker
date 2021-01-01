import React from "react";
import "./BugCard.css";
import PriorityController from "../../../Controllers/PriorityController";

const BugCard = (props) => {
  const { name, priority, version } = props.bug;
  const { label, color } = PriorityController(priority);

  const style = {
    backgroundColor: color,
  };

  const clickedCard = () => {
    props.clicked(name);
  };

  return (
    <div className="bug-card" onClick={clickedCard}>
      <h2 className="name">{name}</h2>
      <span className="priority" style={style}>
        Priority: {label}
      </span>
      <p className="version">{version}</p>
    </div>
  );
};

export default BugCard;

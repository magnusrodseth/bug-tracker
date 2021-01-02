import React from "react";
import "./DashboardCard.css";
import PriorityController from "../../../Controllers/PriorityController";

const DashboardCard = (props) => {
  const { count, clicked, priority } = props;
  const { label, color } = PriorityController(priority);
  return (
    <div className="dashboard-card" onClick={clicked} style={{ color: color }}>
      <h2>Bugs with {label.toLowerCase()} priority</h2>
      <p>{count}</p>
    </div>
  );
};

export default DashboardCard;

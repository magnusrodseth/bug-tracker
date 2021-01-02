import React, { useEffect } from "react";
import "./Dashboard.css";
import PriorityController from "../../../Controllers/PriorityController";
import DashboardCard from "../../Components/Dashboard/DashboardCard";
import { useDispatch, useSelector } from "react-redux";
import { getBugs } from "../../../Controllers/Redux/BugSlice";
import { useHistory } from "react-router-dom";

const Dashboard = () => {
  const dispatch = useDispatch();
  const bugs = useSelector((state) => state.bugs);
  const browserHistory = useHistory();
  let highPriorityBugs = 0;
  let mediumPriorityBugs = 0;
  let lowPriorityBugs = 0;

  const filterBugs = (priority) =>
    bugs.filter((bug) => bug.priority === priority);

  if (bugs !== undefined) {
    highPriorityBugs = filterBugs(1);
    mediumPriorityBugs = filterBugs(2);
    lowPriorityBugs = filterBugs(3);
  }

  useEffect(() => {
    dispatch(getBugs());
  }, [bugs === undefined]);

  const redirect = () => browserHistory.push("/view-bugs");

  return (
    <div className="dashboard">
      <DashboardCard
        priority={1}
        count={highPriorityBugs.length}
        clicked={redirect}
      />
      <DashboardCard
        priority={2}
        count={mediumPriorityBugs.length}
        clicked={redirect}
      />
      <DashboardCard
        priority={3}
        count={lowPriorityBugs.length}
        clicked={redirect}
      />
    </div>
  );
};

export default Dashboard;

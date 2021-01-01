import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBugs } from "../../../Controllers/Redux/BugSlice";
import BugCard from "../../Components/BugCard/BugCard";
import BugView from "../../Components/BugView/BugView";
import "./ViewBugs.css";

const ViewBugs = () => {
  const [displayBug, setDisplayBug] = useState({
    name: "",
    isDisplayed: false,
  });

  const dispatch = useDispatch();
  const { bugs } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getBugs());
  }, [bugs.length < 1]);

  const bugClicked = (name) => {
    setDisplayBug({ name: name, isDisplayed: !displayBug.isDisplayed });
  };

  return (
    <div className="page-container">
      <h1>View bugs</h1>
      <div className="bug-cards">
        {bugs.map((bug, index) => (
          <BugCard key={index} bug={bug} clicked={bugClicked} />
        ))}
      </div>
      <div className="displayed-bug">
        {displayBug.isDisplayed && (
          <BugView
            bug={bugs.filter((bug) => bug.name === displayBug.name)[0]}
          />
        )}
      </div>
    </div>
  );
};

export default ViewBugs;

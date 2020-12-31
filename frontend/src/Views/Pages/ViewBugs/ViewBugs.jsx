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
      {bugs.map((bug, index) => (
        <BugCard key={index} bug={bug} clicked={bugClicked} />
      ))}
      {displayBug.isDisplayed && (
        <BugView bug={bugs.filter((bug) => bug.name === displayBug.name)[0]} />
      )}
    </div>
  );
};

export default ViewBugs;

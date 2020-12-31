import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBugs } from "../../Controllers/Redux/BugSlice";
import BugCard from "../BugCard/BugCard";

const ViewBugs = () => {
  const dispatch = useDispatch();
  const { bugs } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getBugs());
  }, [bugs.length > 1]);

  return (
    <div className="page-container">
      {bugs.map((bug, index) => (
        <BugCard key={index} bug={bug} />
      ))}
    </div>
  );
};

export default ViewBugs;

import BugViewSection from "./BugViewSection/BugViewSection";
import BugModel from "../../../Models/BugModel";
import "./BugView.css";

const BugView = (props) => {
  const bug = new BugModel(props.bug);

  return (
    <div className="bug-view">
      <h1>{bug.name}</h1>
      <BugViewSection title="Details" info={bug.details} />
      <BugViewSection title="Steps" info={bug.steps} />
      <BugViewSection title="Priority" info={bug.priority} />
      <BugViewSection title="Creator" info={bug.creator} />
      <BugViewSection title="Version" info={bug.version} />
      <BugViewSection title="Time created" info={bug.time} />
    </div>
  );
};

export default BugView;

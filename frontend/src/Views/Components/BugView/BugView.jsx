import BugViewSection from "./BugViewSection/BugViewSection";
import BugModel from "../../../Models/BugModel";
import "./BugView.css";
import { useState } from "react";
import BugForm from "../BugCreateEdit/BugForm";

const BugView = (props) => {
  const bug = new BugModel(props.bug);

  const [displayEdit, setDisplayEdit] = useState(false);

  return (
    <div className="bug-view">
      <h1>{bug.name}</h1>
      <div className="viewed">
        <div className="sections">
          <BugViewSection title="Details" info={bug.details} />
          <BugViewSection title="Steps" info={bug.steps} />
          <BugViewSection title="Priority" info={bug.priority} />
          <BugViewSection title="Creator" info={bug.creator} />
          <BugViewSection title="Version" info={bug.version} />
          <BugViewSection title="Time created" info={bug.time} />
        </div>
        <div className="edit-and-delete">
          <button
            onClick={() => {
              setDisplayEdit(!displayEdit);
            }}
          >
            Edit
          </button>
          <button onClick={() => {}}>Delete</button>
        </div>
      </div>
      {displayEdit && (
        <BugForm
          title="Edit bug"
          bug={bug}
          close={() => setDisplayEdit(!displayEdit)}
        />
      )}
    </div>
  );
};

export default BugView;

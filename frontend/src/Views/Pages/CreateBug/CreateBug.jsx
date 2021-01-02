import React from "react";
import BugForm from "../../Components/BugCreateEdit/BugForm";

const CreateBug = (props) => {
  const { title } = props;
  return (
    <div className="create-bug">
      <BugForm title={title} />
    </div>
  );
};

export default CreateBug;

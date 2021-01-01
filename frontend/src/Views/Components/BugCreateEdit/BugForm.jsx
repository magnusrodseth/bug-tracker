import React, { useState } from "react";
import BugModel from "../../../Models/BugModel";
import "./BugForm.css";

const BugForm = (props) => {
  const { title, bug, close } = props;
  const [bugObject, setBugObject] = useState(new BugModel(props.bug));

  const inputChanged = (event) => {
    setBugObject({ ...bugObject, [event.target.name]: event.target.value });
  };
  return (
    <div className="background">
      <div className="bug-form-container">
        {props.title === "Edit bug" && (
          <button className="close-button" onClick={close}>
            Close
          </button>
        )}
        <h1>{title}</h1>
        <form action="#" id="bug-form">
          <div className="form-section">
            <label htmlFor="bug-name-input">Name: </label>
            <input
              name="name"
              type="text"
              id="bug-name-input"
              required
              onChange={inputChanged}
              value={bug.name}
            />
          </div>

          <div className="form-section">
            <label htmlFor="details-textarea">Details: </label>
            <textarea
              name="details"
              id="details-textarea"
              cols="30"
              rows="10"
              form="bug-form"
              onChange={inputChanged}
              value={bug.detail}
            />
          </div>

          <div className="form-section">
            <label htmlFor="steps-textarea">Steps: </label>
            <textarea
              name="steps"
              id="steps-textarea"
              cols="30"
              rows="10"
              form="bug-form"
              onChange={inputChanged}
              value={bug.steps}
            />
          </div>

          <div className="form-section">
            <label htmlFor="priority-select">Priority: </label>
            <select
              name="priority"
              id="priority-select"
              required
              onChange={inputChanged}
              value={bug.priority}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>

          <div className="form-section">
            <label htmlFor="assigned-select">Assigned: </label>
            <select
              name="assigned"
              id="assigned-select"
              onChange={inputChanged}
              value={bug.assigned}
            >
              <option>Ola Nordmann</option>
            </select>
          </div>

          <div className="form-section">
            <label htmlFor="version-input">Application version: </label>
            <input
              type="text"
              name="version"
              id="version-input"
              onChange={inputChanged}
              value={bug.version}
            />
          </div>

          <div className="form-section">
            <button type="submit">{title}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BugForm;

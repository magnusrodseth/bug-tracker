import BugModel from "../Models/BugModel";

// TODO: This is dummy data. Remove later.
export const BugController = () => {
  let data = [];

  data.push(
    new BugModel({
      _id: 1,
      name: "Crash on load",
      details: "Crash after 3 seconds",
      steps: "Open application and it crashes",
      version: "1.1.0",
      priority: 3,
      assigned: "John Doe",
      creator: "Ola Nordmann",
      time: "13:02",
    })
  );

  data.push(
    new BugModel({
      _id: 1,
      name: "Crash on load",
      details: "Crash after 3 seconds",
      steps: "Open application and it crashes",
      version: "1.1.0",
      priority: 1,
      assigned: "John Doe",
      creator: "Ola Nordmann",
      time: "13:02",
    })
  );

  let sorted = data.sort((a, b) => a.priority - b.priority);

  return sorted;
};

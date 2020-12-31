const GREEN = "#2ecc71";
const ORANGE = "#f39c12";
const RED = "#e74c3c";

const PriorityController = (priority) => {
  const priorities = [
    { label: "High", color: RED },
    { label: "Medium", color: ORANGE },
    { label: "Low", color: GREEN },
  ];

  return priorities[priority - 1];
};

export default PriorityController;

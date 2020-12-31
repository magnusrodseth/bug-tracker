import "./BugViewSection.css";

const BugViewSection = (props) => {
  const { title, info } = props;
  return (
    <div className="view-section">
      <h2>{title}</h2>
      <p>{info}</p>
    </div>
  );
};

export default BugViewSection;

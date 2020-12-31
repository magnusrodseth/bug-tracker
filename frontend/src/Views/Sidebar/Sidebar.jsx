import "./Sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import AddIcon from "@material-ui/icons/Add";
import ViewComfyIcon from "@material-ui/icons/ViewComfy";
import CheckIcon from "@material-ui/icons/Check";

const Sidebar = () => {
  return (
    <div className="container">
      <div className="sidebar-item">
        <HomeIcon color="action" />
      </div>
      <div className="sidebar-item">
        <AddIcon color="action" />
      </div>
      <div className="sidebar-item">
        <ViewComfyIcon color="action" />
      </div>
      <div className="sidebar-item">
        <CheckIcon color="action" />
      </div>
    </div>
  );
};

export default Sidebar;

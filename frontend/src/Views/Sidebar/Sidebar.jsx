import "./Sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import AddIcon from "@material-ui/icons/Add";
import ViewComfyIcon from "@material-ui/icons/ViewComfy";
import CheckIcon from "@material-ui/icons/Check";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";
import { signOut } from "../../Controllers/Redux/AuthSlice";
import { useDispatch, useSelector } from "react-redux";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);

  const signOut = () => {
    dispatch(signOut());
  };
  return (
    <div className="container">
      {/* Home */}
      <Link to="/" className="nav-link">
        <div className="sidebar-item">
          <HomeIcon color="action" />
          <span className="label">Home</span>
        </div>
      </Link>

      {/* Create bug */}
      {auth.admin && (
        <Link to="/create-bug" className="nav-link">
          <div className="sidebar-item">
            <AddIcon color="action" />
            <span className="label">Create bug</span>
          </div>
        </Link>
      )}

      {/* View bugs */}
      <Link to="/view-bugs" className="nav-link">
        <div className="sidebar-item">
          <ViewComfyIcon color="action" />
          <span className="label">View bugs</span>
        </div>
      </Link>

      <Link to="/resolve-bug" className="nav-link">
        <div className="sidebar-item">
          <CheckIcon color="action" />
          <span className="label">Resolve bug</span>
        </div>
      </Link>

      <Link to="/log-out" className="nav-link">
        <div className="sidebar-item" onClick={signOut}>
          <ExitToAppIcon color="action" />
          <span className="label">Log out</span>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;

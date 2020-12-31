import Login from "./Views/Login/Login";
import { useSelector } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./Views/Sidebar/Sidebar";
import ViewBugs from "./Views/Pages/ViewBugs";

const App = () => {
  const { auth } = useSelector((state) => state);
  return (
    <Router>
      {!auth.loggedIn ? (
        <Login />
      ) : (
        <>
          <Sidebar />
          <ViewBugs />
        </>
      )}
    </Router>
  );
};

export default App;

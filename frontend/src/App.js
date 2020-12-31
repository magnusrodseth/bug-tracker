import Login from "./Views/Login/Login";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
          <Switch>
            <Route path="/view-bugs">
              <ViewBugs />
            </Route>
          </Switch>
        </>
      )}
    </Router>
  );
};

export default App;

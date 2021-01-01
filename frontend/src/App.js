import Login from "./Views/Pages/Login/Login";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./Views/Sidebar/Sidebar";
import ViewBugs from "./Views/Pages/ViewBugs/ViewBugs";
import CreateBug from "./Views/Pages/CreateBug/CreateBug";

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
            <Route path="/create-bug">
              <CreateBug title="Create bug" />
            </Route>
          </Switch>
        </>
      )}
    </Router>
  );
};

export default App;

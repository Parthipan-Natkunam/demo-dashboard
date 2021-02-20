import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LogInPage from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LogInPage />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="*">
          <LogInPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;

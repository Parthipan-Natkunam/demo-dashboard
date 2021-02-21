import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { selectisAuthed } from "./store/appSlice";
import LogInPage from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function ProtectedRoute({ children, ...rest }) {
  const isAuthed = useSelector(selectisAuthed);
  return (
    <Route
      {...rest}
      render={() => {
        return isAuthed ? children : <Redirect to="/" />;
      }}
    />
  );
}

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LogInPage />
        </Route>
        <ProtectedRoute exact path="/dashboard">
          <Dashboard />
        </ProtectedRoute>
        <Route path="*">
          <LogInPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;

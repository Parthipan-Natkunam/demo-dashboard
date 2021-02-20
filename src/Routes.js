import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import LogInPage from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function ProtectedRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        const isAuthed = true; // Implement this with Redux and stuff
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

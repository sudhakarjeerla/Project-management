import React from "react";
import ViewLogs from "./components/Logs/ViewLogs";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import AddLogs from "./components/Logs/AddLogs";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
      <Link to="/viewlogs">
          <button
            class="btn waves-effect waves-light blue"
            type="submit"
            name="action"
          >
            View Log
          </button>
        </Link>
        <Switch>
          <Route exact path="/viewlogs" component={ViewLogs} />
          <Route exact path="/addlog" component={AddLogs} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

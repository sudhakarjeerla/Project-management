import React from "react";
import { Switch, Route } from "react-router-dom";
import ViewLogs from "./components/Logs/ViewLogs";
import AddLogs from "./components/Logs/AddLogs";
import EditLogs from "./components/Logs/EditLogs";
import Home from "./Home";
import Profile from "./components/Profile/Profile";
import ViewEmployee from "./components/Employees/ViewEmployee";

const Routers = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/editlogs" component={EditLogs} />
      <Route exact path="/viewlogs" component={ViewLogs} />
      <Route exact path="/addlog" component={AddLogs} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/viewemployees" component={ViewEmployee} />
    </Switch>
  );
};

export default Routers;

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PersonsComponent from "./PersonsComponent";
import UserComponent from "./UserComponent";

class ApiApp extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={PersonsComponent} />
            <Route path="/user/:id" component={UserComponent} />

            {/* <Route path="/singup" component={SingupComponent} /> */}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default ApiApp;

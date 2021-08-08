import React from "react";
import All from "./All";
import Completed from "./Completed";
import Active from "./Active";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function MainCard() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">All</Link>
            </li>
            <li>
              <Link to="/active">Active</Link>
            </li>
            <li>
              <Link to="/completed">Completed</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/active">
            <Active />
          </Route>
          <Route path="/completed">
            <Completed />
          </Route>
          <Route path="/">
            <All />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default MainCard;

import "../styles/MainCard.css";
import React from "react";
import All from "./All";
import Completed from "./Completed";
import Active from "./Active";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";

function MainCard() {
  return (
    <Router>
      <div className="main-card">
        <nav>
          <NavLink
            className="nav_links"
            activeClassName="nav_link_active"
            to="/all"
          >
            All
          </NavLink>
          <NavLink
            className="nav_links"
            activeClassName="nav_link_active"
            to="/active"
          >
            Active
          </NavLink>
          <NavLink
            className="nav_links"
            activeClassName="nav_link_active"
            to="/completed"
          >
            Completed
          </NavLink>
        </nav>

        <Switch>
          <Route exact path="/active">
            <Active />
          </Route>
          <Route exact path="/completed">
            <Completed />
          </Route>
          <Route exact path="/all">
            <All />
          </Route>
          <Route exact path="/">
            <Redirect to="/all" />
          </Route>
          <Route render={() => <Redirect to={{ pathname: "/" }} />} />{" "}
        </Switch>
      </div>
    </Router>
  );
}

export default MainCard;

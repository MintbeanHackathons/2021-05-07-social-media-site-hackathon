import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginPage from "./auth/LoginPage";
import TweetPage from "./tweet/TweetPage";

export default function App() {
  return (
    <div>
      <Router>
        <div>TODO: Navbar</div>
        <Switch>
          <Route path="/" exact>
            <p>TODO: Feed</p>
          </Route>
          <Route path="/tweet/:id" exact>
            <TweetPage />
          </Route>
          <Route path="/auth/login">
            <Login />
          </Route>
          <Route path="/auth/reset">
            <p>TODO: Password Reset</p>
          </Route>
          <Route path="/auth/logout">
            <p>TODO: Logout</p>
          </Route>
          <Route path="/auth/profile">
            <p>TODO: Profile</p>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

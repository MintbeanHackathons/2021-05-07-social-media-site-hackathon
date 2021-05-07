import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginPage from "./auth/LoginPage";
import TweetPage from "./feed/FeedPage";
import MainBar from "./layout/MainBar";
import LeftBar from "./layout/LeftBar";
import RightBar from "./layout/RightBar";
import FeedPage from "./feed/FeedPage";

export default function App() {
  return (
    <div>
      <Router>
        <LeftBar />
        <MainBar>
          <Switch>
            <Route path="/" exact>
              <FeedPage />
            </Route>
            <Route path="/tweet/:id" exact>
              <TweetPage />
            </Route>
            <Route path="/auth/login">
              <LoginPage />
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
        </MainBar>
        <RightBar />
      </Router>
    </div>
  );
}

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Grid } from "@material-ui/core";

import MainBar from "./layout/MainBar";
import LeftBar from "./layout/LeftBar";
import RightBar from "./layout/RightBar";

import LoginPage from "./auth/LoginPage";
import LogoutPage from "./auth/LogoutPage";
import FeedPage from "./feed/FeedPage";
import NotFoundPage from "./layout/NotFoundPage";

export default function App() {
  return (
    <div>
      <Router>
        <Grid container>
          <LeftBar />
          <MainBar>
            <Switch>
              <Route path="/" exact>
                <FeedPage />
              </Route>
              <Route path="/auth/login">
                <LoginPage />
              </Route>
              <Route path="/auth/logout">
                <LogoutPage />
              </Route>
              <Route component={NotFoundPage} />
            </Switch>
          </MainBar>
          <RightBar />
        </Grid>
      </Router>
    </div>
  );
}

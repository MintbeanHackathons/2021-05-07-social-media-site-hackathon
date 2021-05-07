import Grid from "@material-ui/core/Grid";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Box } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  navItemLink: {
    textDecoration: "none",
  },
});

const NavRow = ({ children }) => (
  <Grid item xs={12}>
    <Box height="40px" lineHeight="40px" paddingBottom="40px">
      {children}
    </Box>
  </Grid>
);

const NavButton = ({ children }) => (
  <Button variant="contained">{children}</Button>
);

const NavItem = ({ children, to }) => {
  const classes = useStyles();
  return (
    <NavRow>
      <Link to={to} className={classes.navItemLink}>
        <NavButton>{children}</NavButton>
      </Link>
    </NavRow>
  );
};

export default function LeftBar() {
  return (
    <Grid item xs={4}>
      <Grid container>
        <Grid item xs={6} /> {/* Leave half the column */}
        <Grid item xs={6}>
          <Grid container>
            <NavRow>Twitterbean</NavRow>
            <NavItem to="/">Home</NavItem>
            <NavItem to="/auth/logout">Logout</NavItem>
            <NavRow>
              <NavButton>Tweet</NavButton>
            </NavRow>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

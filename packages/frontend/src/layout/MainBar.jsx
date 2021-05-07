import Grid from "@material-ui/core/Grid";
import React from "react";

export default function LeftBar({ children }) {
  return (
    <Grid item xs={4}>
      {children}
    </Grid>
  );
}

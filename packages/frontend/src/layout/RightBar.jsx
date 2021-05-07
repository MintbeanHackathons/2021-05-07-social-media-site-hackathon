import Grid from "@material-ui/core/Grid";
import React from "react";

export default function RightBar() {
  return (
    <Grid item xs={4}>
      <Grid container>
        <Grid item xs={6}></Grid>
        <Grid item xs={12} /> {/* Leave half the page */}
      </Grid>
    </Grid>
  );
}

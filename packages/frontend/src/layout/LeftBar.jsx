import Grid from "@material-ui/core/Grid";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

export default function LeftBar() {
  return (
    <Grid item xs={4}>
      <Grid container>
        <Grid item xs={6} /> {/* Leave half the column */}
        <Grid item xs={6}>
          LeftBar
        </Grid>
      </Grid>
    </Grid>
  );
}

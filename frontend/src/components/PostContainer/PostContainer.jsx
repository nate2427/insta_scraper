import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";
import Card from "../../shared/MUICard";
import { useState } from "react";

const PostContainer = ({ postList }) => {
  const classes = styles();
  return (
    <Grid container justify="center">
      <Grid item container justify="center">
        <Typography variant="h2">Last Five Post</Typography>
      </Grid>
      <Grid
        container
        item
        xs={11}
        sm={10}
        className={classes.postContainer}
        justify="center"
        alignItems="center"
      >
        {postList.forEach((post, index) => {
          return <Card></Card>;
        })}
      </Grid>
    </Grid>
  );
};

export default PostContainer;

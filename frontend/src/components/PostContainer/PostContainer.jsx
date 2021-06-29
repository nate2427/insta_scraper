import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";
import Card from "../../shared/MUICard";

const PostContainer = ({ postList }) => {
  const classes = styles();
  return (
    <Grid container justify="center">
      <Grid item container justify="center">
        <Typography variant="h2">Last {postList.length} Post</Typography>
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
        {postList.map((post, index) => {
          return (
            <Grid
              className={classes.cardContainerStyle}
              item
              container
              key={index}
              sm={6}
              xs={12}
              justify="center"
            >
              <Card
                numLikes={post.likes}
                numComments={post.comments}
                imgUrl={post.pic}
                username={post.name}
              ></Card>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default PostContainer;

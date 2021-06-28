import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

const SearchContainer = () => {
  return (
    <Grid item container md={10} sm={11} xs={12} className="search-container">
      <Grid item>
        <Typography variant="h1">Insta Scraper</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1">Insta Scraper</Typography>
      </Grid>
      <Grid item>
        <TextField id="standard-basic" label="Username" />
      </Grid>
      <Grid item>
        {/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}
        <Button variant="contained" color="primary" endIcon={<Icon>send</Icon>}>
          Send
        </Button>
      </Grid>
    </Grid>
  );
};

export default SearchContainer;

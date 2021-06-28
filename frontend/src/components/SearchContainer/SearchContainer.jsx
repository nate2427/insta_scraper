import React from "react";
import { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styles from "./styles";
import Axios from "axios";

const SearchContainer = () => {
  const classes = styles();
  const [username, setUsername] = useState(null);

  const handleOnChange = (event) => {
    const user = event.target.value;
    setUsername(user);
  };

  const handleButtonClick = async () => {
    //   return if blank username
    if (username === null) return;
    console.log(username);
    const data = await Axios.post("/api/get-user-data", {
      username,
    });
    console.log(data);
  };

  return (
    <Grid
      item
      container
      md={10}
      sm={11}
      xs={12}
      className="search-container"
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Grid justify="center" className={classes.titleContainer} container item>
        <Typography variant="h1">Insta Scraper</Typography>
      </Grid>
      <Grid justify="center" className={classes.descContainer} container item>
        <Typography variant="body1">
          This will allow us to find a user on insta without even logging into
          an account.
        </Typography>
      </Grid>
      <Grid justify="center" className={classes.inputContainer} container item>
        <TextField
          onChange={(event) => handleOnChange(event)}
          id="standard-basic"
          label="Username"
        />
      </Grid>
      <Grid
        md={6}
        alignItems="center"
        justify="center"
        className={classes.buttonContainer}
        container
        item
      >
        {/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}
        <Button
          className={classes.sendButton}
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleButtonClick}
        >
          Send
        </Button>
      </Grid>
    </Grid>
  );
};

export default SearchContainer;

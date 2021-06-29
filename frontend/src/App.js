import "./App.css";
import { useState } from "react";
import Grid from "@material-ui/core/Grid";
import SearchContainer from "./components/SearchContainer/SearchContainer";
import PostContainer from "./components/PostContainer/PostContainer";

function App() {
  const [postList, setPostList] = useState([]);

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      className="App"
    >
      <SearchContainer setPostList={setPostList}></SearchContainer>
      {postList.length > 0 && (
        <PostContainer postList={postList}></PostContainer>
      )}
    </Grid>
  );
}

export default App;

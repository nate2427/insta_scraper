import "./App.css";
import Grid from "@material-ui/core/Grid";
import SearchContainer from "./components/SearchContainer/SearchContainer";

function App() {
  return (
    <Grid container justify="center" className="App">
      <SearchContainer></SearchContainer>
    </Grid>
  );
}

export default App;

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  titleContainer: {
    padding: "1rem 0",
  },
  descContainer: {
    padding: "1rem 0",
  },
  inputContainer: {
    paddingTop: "5rem",
  },
  buttonContainer: {
    padding: "5rem",
  },
  title: {
    "@media (max-width: 450px)": {
      fontSize: "3rem",
    },
  },
}));

export default useStyles;

import React from "react";
import { Link } from "react-router-dom";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./Nav.css";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#f05545",
      main: "#b71c1c",
      dark: "#7f0000",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#62727b",
      main: "#37474f",
      dark: "#102027",
      contrastText: "#ffffff",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className="navBar">
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h3" className={classes.title}>
              Brad Williams
            </Typography>
            <Typography variant="h6" className={classes.title}>
              <Link to="/">
                <Button className="buttonLink">About</Button>
              </Link>
            </Typography>
            <Typography variant="h6" className={classes.title}>
              <Link to="/Portfolio">
                <Button className="buttonLink">Portfolio</Button>
              </Link>
            </Typography>
            <Typography variant="h6" className={classes.title}>
              <Link to="/Contact">
                <Button className="buttonLink">Contact</Button>
              </Link>
            </Typography>
            <div>
              <Link to="https://github.com/bread-w">
                <Button className="buttonLink">
                  <GitHubIcon fontSize="large" />
                </Button>
              </Link>
            </div>
            <div>
              <Link to="https://www.linkedin.com/in/brad-williams-79674253/">
                <Button className="buttonLink">
                  <LinkedInIcon fontSize="large" />
                </Button>
              </Link>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>
  );
}

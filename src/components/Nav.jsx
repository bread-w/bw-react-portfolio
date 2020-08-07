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
  const navBar = {
    color: "white",
    float: "right",
    textDecoration: "underline",
  };
  return (
    <ThemeProvider theme={theme}>
      <div>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h3" className={classes.title}>
              Brad Williams
            </Typography>
            <Typography variant="h6" className={classes.title}>
              <Link to="/">
                <Button style={navBar}>About</Button>
              </Link>
            </Typography>
            <Typography variant="h6" className={classes.title}>
              <Link to="/Portfolio">
                <Button style={navBar}>Portfolio</Button>
              </Link>
            </Typography>
            <Typography variant="h6" className={classes.title}>
              <Link to="/Contact">
                <Button style={navBar}>Contact</Button>
              </Link>
            </Typography>
            <div>
              <a
                href="https://github.com/bread-w"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button style={navBar}>
                  <GitHubIcon fontSize="large" />
                </Button>
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/brad-williams-79674253/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button style={navBar}>
                  <LinkedInIcon fontSize="large" />
                </Button>
              </a>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>
  );
}

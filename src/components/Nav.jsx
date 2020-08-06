import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
          <Button color="inherit"><Link to="/">About</Link></Button>
          </Typography>
          <Typography variant="h6" className={classes.title}>
          <Button color="inherit"><Link to="/Portfolio">Portfolio</Link></Button>
          </Typography>
          <Typography variant="h6" className={classes.title}>
          <Button color="inherit"><Link to="/Contact">Contact</Link></Button>
          </Typography>
          <GitHubIcon />
          <LinkedInIcon/>
        </Toolbar>
      </AppBar>
    </div>
  );
}

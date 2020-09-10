import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Grid from "@material-ui/core/Grid";
import styles from "./myStyle.module.css";

export default function ButtonAppBar() {
  return (
    <AppBar className={styles.navBar}>
      <Toolbar>
        <Grid
          justify="space-between" // Add it here :)
          container
          spacing={24}
        >
          <Link to="/" >
            <Typography variant="h3" className={styles.bradW}>
              Brad Williams
            </Typography>
          </Link>
          <Typography variant="h6"></Typography>
          <Typography variant="h6">
            <Link to="/Portfolio" className={styles.navLink}>
              <Button className={styles.navBtn}>Portfolio</Button>
            </Link>
          </Typography>
          <Typography variant="h6">
            <Link to="/Contact" className={styles.navLink}>
              <Button className={styles.navBtn}>Contact</Button>
            </Link>
          </Typography>
          <div>
            <a
              href="https://github.com/bread-w"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className={styles.navBtn}>
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
              <Button className={styles.navBtn}>
                <LinkedInIcon fontSize="large" />
              </Button>
            </a>
          </div>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

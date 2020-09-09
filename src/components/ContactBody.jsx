import React from "react";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Avatar from '@material-ui/core/Avatar';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

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

const useStyles = makeStyles({
  root: {
    maxWidth: 750,
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Box m={2} width={750} mx="auto">
        <Card className={classes.root}>
          <CardActionArea>
            <Avatar
              alt="Brad Williams"
              src="https://i.imgur.com/7pmQ7Ft.jpg"
              className={classes.large}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                James "Brad" Williams
              </Typography>
              <Typography variant="body1" component="p">
                Please contact me via any of the options I've listed below. You
                may also view my other qualifications on my LinkedIn page and
                Resume by following the provided links in the navbar shown
                above. Thank you for visiting my portfolio page and I look
                forward to speaking soon! If you have an urgent matter, feel
                free to contact me via email or on my cell.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="large" color="primary">
              <a
                href="https://docs.google.com/document/d/1z5g5z8KkijgM7MXMcTTAsrx6WvvyD2njZetimYtuIr8/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                View my Resume
              </a>
            </Button>
            <Button size="large" color="primary">
              <a href="mailto: jb.wms89@gmail.com">jb.wms89@gmail.com</a>
            </Button>
            <Button size="large" color="primary">
              <a href="tel:+14043761524"> 404.376.1524</a>
            </Button>
          </CardActions>
        </Card>
      </Box>
    </ThemeProvider>
  );
}

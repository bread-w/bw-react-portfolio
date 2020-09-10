import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Avatar from '@material-ui/core/Avatar';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from '@material-ui/core/styles';
import styles from "./myStyle.module.css";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function ImgMediaCard() {
  const classes = useStyles();
  return (
    <>
      <Container className={styles.contactFiller}></Container>
      <Container maxWidth="md">
        <Card>
          <CardActionArea>
            <Avatar
              alt="Brad Williams"
              src="https://i.imgur.com/7pmQ7Ft.jpg"
              className={classes.large}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Brad Williams
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
            <Button size="large" >
              <a
                href="https://docs.google.com/document/d/1z5g5z8KkijgM7MXMcTTAsrx6WvvyD2njZetimYtuIr8/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactMe}
              >
               Resume
              </a>
            </Button>
            <Button size="large">
              <a href="mailto: jb.wms89@gmail.com" className={styles.contactMe}>jb.wms89@gmail.com</a>
            </Button>
            <Button size="large">
              <a href="tel:+14043761524"  className={styles.contactMe}> 404.376.1524</a>
            </Button>
          </CardActions>
        </Card>
      </Container>
      </>
  );
}

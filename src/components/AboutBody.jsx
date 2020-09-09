import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

export default function SimpleContainer() {
  const bioStyle = {
    float: "left",
    marginRight: "20px",
    width: "250px",
    height: "auto",
    marginTop: "10px",
    borderRadius: "5%",
  };
  return (
    <React.Fragment>
      <Container
        maxWidth="lg"
        style={{
          backgroundColor: "rgb(55,71,79, 0.75)",
          marginTop: "20px",
          padding: 25,
          borderRadius: "1.5%"
        }}
      >
        <img
          style={bioStyle}
          src="https://i.imgur.com/7pmQ7Ft.jpg"
          alt="Brad Williams"
        />
        <Typography
          variant="h5"
          component="h6"
          style={{ color: "white", paddingTop: "10px" }}
        >
          Full stack web developer with 4 years of managing small to medium
          sized teams between 5 and 30+ members in a startup environment. Former
          math teacher in an English as a second language classroom with vast
          experience planning differentiated lessons and activities based on
          individualized student data. Reliable, consistent and amiable as both
          a teammate and leader, preferring an action-oriented approach in both
          professional and personal life. Familiar with fast paced work
          environments, and meeting deadlines with no sacrifice to the final
          quality of deliverables, be it a product or service. Fluent in both
          English and Spanish with experience working in both languages.
          <br></br>
          <br></br>
          Recently transitioned to web development to add technical expertise to
          an established set of practical business acumen, managerial
          experience, and interpersonal skills. Fascinated with planning and
          iterative development, with a passion for creating practical and
          unique web based applications.
          <br></br>
          <br></br>
          Earned a certificate in Full Stack Web Development through Georgia
          Tech, with a primary focus in Javascript applications, REST APIs,
          Node, MySQL, MongoDB and React. Easily integrates into existing teams
          and quickly learns the established best practices with the necessary
          developmental and project management tools.
        </Typography>
      </Container>
    </React.Fragment>
  );
}

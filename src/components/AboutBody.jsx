import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

export default function SimpleContainer() {
  const bioStyle = {
    float: "left",
    marginRight: "20px",
    width: "250px",
    height: "auto",
  };
  return (
    <React.Fragment>
      <Container
        maxWidth="lg"
        style={{ backgroundColor: "#37474f", marginTop: "20px" }}
      >
        <img
          style={bioStyle}
          src="https://i.imgur.com/7pmQ7Ft.jpg"
          alt="Brad Williams"
        />
        <Typography
          variant="subtitle1"
          component="subtitle1"
          style={{ color: "white" }}
        >
          Hello there, and thanks for stopping by! My name is Brad Williams and
          I was born and raised right here in Atlanta, Ga. I graduated from high
          school in 2008, where I then went on to study Spanish at Auburn
          University. War Eagle! After graduation, I taught Spanish for 2 years
          in Atlanta, and then picked up my things and moved a few thousand
          miles south to Santiago, Chile! While in Chile, I taught English to
          both children and adults, improving both my Spanish language skills
          and broadening my cultural perspective. While it was at times jarring,
          I loved my time in Chile, the people I met and the experiences I
          gained while living there. After a year, I decided to head back to the
          U.S. where I would go on to work for Teach for America in Denver,
          Colorado. In Denver, I taught math in an English as a second language
          classroom to first generation hispanic immigrants.
          <br />
          <br />
          In 2017, I decided that I no longer wanted to pursue a career in
          teaching, mainly because of the sheer lack of financial growth
          available for most long term teachers. I then moved back to Atlanta
          and began working at a coworking startup, SharedSpace, at the peak of
          the coworking bubble. I started as General Manager, and after bringing
          a space to profitability, I then went on to open two more spaces, one
          in Cobb County and another in Augusta, Ga. While working at
          SharedSpace, I hosted a coding bootcamp, which sparked an interest in
          coding that would stick with me until today. I worked for SharedSpace
          for 2 years. While opening the SharedSpace location in Augusta, I was
          approached about a position with a startup concept called Kefi, which
          I decided to follow, yet again bringing me back to Atlanta. At Kefi, I
          was very quickly promoted to manager, but as is the nature of
          startups, it came with its own set of challenges, and ended up not
          being the right fit for me.
          <br />
          <br />
          I’m now working full time as a student at the Georgia Tech Coding
          bootcamp following my dream of becoming a developer. While not coding,
          I love to play video games, cook, watch movies, and spend time with my
          girlfriend and pets. I love learning foreign languages and I speak
          spanish at an advanced level, and I’m hoping to add a few coding
          languages to my belt as well!
        </Typography>
      </Container>
    </React.Fragment>
  );
}

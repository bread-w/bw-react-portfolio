import React from "react";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       light: "#f05545",
//       main: "#b71c1c",
//       dark: "#7f0000",
//       contrastText: "#ffffff",
//     },
//     secondary: {
//       light: "#62727b",
//       main: "#37474f",
//       dark: "#102027",
//       contrastText: "#ffffff",
//     },
//   },
// });

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Nav />
          <Route exact path="/" component={About} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/Contact" component={Contact} />
        </div>
      </Router>
    </div>
  );
}

export default App;

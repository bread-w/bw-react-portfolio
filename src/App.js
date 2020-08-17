import React from "react";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "../src/components/Footer"
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Nav />
          <Route exact path="/" component={About} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/Contact" component={Contact} />
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

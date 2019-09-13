import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Menu from "./pages/Menu";
import Reservation from "./pages/Reservation";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/about/" component={About} />
      <Route path="/contact/" component={Contact} />
      <Route path="/blog/" component={Blog} />
      <Route path="/menu/" component={Menu} />
      <Route path="/reservation/" component={Reservation} />
    </Router>
  );
}

export default App;

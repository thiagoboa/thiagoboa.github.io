import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <React.Fragment>
            <Header />
            <Route exact path="/" component={Home} />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;

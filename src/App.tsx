import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import Header from "./components/Header/Header";
import Home from "./pages/Home";
import { Theme } from "./assets/style/Theme";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${Theme.global.bg};
    color: ${Theme.global.color};
    line-height: 1.4;
  }

  a {
    color: ${Theme.global.linkColor};
  }
`;

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <Router>
          <React.Fragment>
            <Header />
            <main>
              <Route exact path="/" component={Home} />
            </main>
          </React.Fragment>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;

import React, { Component } from "react";
import styled from "styled-components";
import { Theme, colorPallet } from "../assets/style/Theme";

import Roulette from "../components/Roulette";

const Billboard = styled.div`
  background-color: ${Theme.billboard.bg};
  color: ${Theme.billboard.color};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
  width: 100%;
  font-size: 5rem;
`;

const Hero = styled.h1`
  font-size: 1em;
  margin: 0;
`;

class Home extends Component {
  render() {
    return (
      <Billboard>
        <Hero>Design</Hero>
        <Roulette slides={["&", "+"]} />
        <Hero>Code</Hero>
      </Billboard>
    );
  }
}

export default Home;

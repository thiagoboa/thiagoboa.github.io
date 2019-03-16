import React, { Component } from "react";
import styled from "styled-components";
import { Theme, colorPallet } from "../assets/style/Theme";

import Roulette from "../components/Roulette";
import Gallery from "../components/Gallery/Gallery";
import GalleryItem from "../components/Gallery/GalleryItem";

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
      <React.Fragment>
        <Billboard>
          <Hero>Design</Hero>
          <Roulette slides={["&", "+"]} />
          <Hero>Code</Hero>
        </Billboard>
        <Gallery>
          <GalleryItem
            href="https://ink.carta.com/"
            caption="ink"
            img="https://camo.githubusercontent.com/19dd75e12e7e07008e378a77075a450efc41b7d6/68747470733a2f2f64656d6f2e63617274612e636f6d2f7374617469632f6c69622f657368617265732f696d672f696e6b2f696e6b2e737667"
          />
          <GalleryItem
            href="http://www.gfx.adv.br/"
            caption="GFX"
            img="http://www.gfx.adv.br/wp-content/uploads/2017/02/header-retina.png"
          />
        </Gallery>
      </React.Fragment>
    );
  }
}

export default Home;

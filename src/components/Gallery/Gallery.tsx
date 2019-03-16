import React, { Component } from "react";
import styled from "styled-components";
import { Theme } from "../../assets/style/Theme";

const StyledGallery = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: 2fr 1fr;
`;

class Gallery extends Component {
  render() {
    return <StyledGallery>{this.props.children}</StyledGallery>;
  }
}

export default Gallery;

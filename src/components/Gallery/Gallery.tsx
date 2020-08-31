import React, { Component } from "react";
import styled from "styled-components";

const StyledGallery = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-gap: 16px;

  @media (min-width: 1024px) {
    grid-template-columns: 6fr 4fr 3fr;
  }
`;

class Gallery extends Component {
  render() {
    return <StyledGallery>{this.props.children}</StyledGallery>;
  }
}

export default Gallery;

import React, { Component } from "react";
import styled from "styled-components";

const StyledGallery = styled.div`
  display: grid;
  grid-template-columns: 6fr 4fr 3fr;
  grid-template-rows: 1fr;
  grid-gap: 16px;
`;

class Gallery extends Component {
  render() {
    return <StyledGallery>{this.props.children}</StyledGallery>;
  }
}

export default Gallery;

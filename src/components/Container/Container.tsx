import React, { Component } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`;

class Container extends Component {
  render() {
    return <StyledContainer>{this.props.children}</StyledContainer>;
  }
}

export default Container;

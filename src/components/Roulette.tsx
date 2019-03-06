import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { Theme } from "../assets/style/Theme";

export interface RouletteProps {
  slides: string[];
}

export interface RouletteState {
  slides: string[];
  activeSlide: number;
}

export interface SlideProps {
  index: number;
  isLast: boolean;
  activeSlide: number;
}

const Wrapper = styled.div`
  width: 10vw;
  margin: 0 20px;
`;

const StyledRoullete = styled.ul`
  background-color: ${Theme.roulette.bg};
  color: ${Theme.roulette.color};
  padding-bottom: 161.8%; //Golden Ratio
  position: relative;
  height: 0;
`;

const roll = keyframes`
  0% {
    background-color: RGBA(0,0,0,.5);
    transform: scaleY(0);
    transform-origin: top center;
  }

  33% {
    background-color: RGBA(0,0,0,0);
    transform: scaleY(1);
    transform-origin: top center;
  }

  66% {
    background-color: RGBA(0,0,0,0);
    transform: scaleY(1);
    transform-origin: bottom center;
  }

  100% {
    background-color: RGBA(0,0,0,.5);
    transform: scaleY(0);
    transform-origin: bottom center;
  }
`;

const rollLast = keyframes`
  0% {
    background-color: RGBA(0,0,0,.5);
    transform: scaleY(0);
    transform-origin: top center;
  }

  100% {
    background-color: RGBA(0,0,0,0);
    transform: scaleY(1);
    transform-origin: top center;
  }
`;

const animationDuration = 2000;

const Slide = styled.li<SlideProps>`
  align-items: center;
  animation: ${roll} ${animationDuration}ms linear;
  background-color: rgba(0, 0, 0, 0.1);
  bottom: 0;
  color: ${Theme.roulette.color};
  display: flex;
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transform-origin: bottom center;
  transform: scaleY(0);
`;

class Roulette extends Component<RouletteProps, RouletteState> {
  constructor(props: RouletteProps) {
    super(props);

    this.state = {
      slides: [],
      activeSlide: 0
    };
  }

  componentDidMount() {
    //this.addSlide(0);
  }

  addSlide(newSlide: number) {
    const currentSlide = this.props.slides[newSlide];
    const nextSlide =
      newSlide + 1 < this.props.slides.length ? newSlide + 1 : 0;

    setTimeout(() => {
      return this.setState(
        { slides: [...this.state.slides, currentSlide] },
        () => this.addSlide(nextSlide)
      );
    }, (animationDuration * 2) / 3);
  }

  render() {
    return (
      <Wrapper>
        <StyledRoullete>
          {this.state.slides.map((slide, index) => (
            <Slide
              key={index}
              index={index}
              activeSlide={this.state.activeSlide}
              isLast={index + 1 === this.state.slides.length}
            >
              {slide}
            </Slide>
          ))}
        </StyledRoullete>
      </Wrapper>
    );
  }
}

export default Roulette;

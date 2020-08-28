import React, { Component } from "react";
import styled from "styled-components";
import { colorPallet, Theme } from "../../assets/style/Theme";

export interface GalleryItemProps {
  href: string;
  img: string;
  captionTitle: string;
  captionSubtitle: string;
  description: React.ReactNode;
}

const StyledGalleryItem = styled.a`
  border: 1px solid ${colorPallet.gray.medium};
  border-radius: 4px;
  box-shadow: 4px 4px 6px 0 rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: ${colorPallet.black};
  overflow: hidden;
  transition: border-color 500ms, box-shadow 500ms;

  &:hover {
    border-color: #9d9d9d;
    box-shadow: 4px 4px 8px 2px rgba(0, 0, 0, 0.12);
  }
`;

const GalleryFigure = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;

  position: relative;
  height: 100%;
`;

const GalleryImageWrapper = styled.div`
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 160px;
`;

const GalleryImage = styled.img`
  max-height: 100%;
  max-width: 100%;
  filter: saturate(0.5);
  transition: filter 500ms;

  ${StyledGalleryItem}:hover & {
    filter: saturate(1);
  }
`;

const GalleryCaption = styled.figcaption`
  width: 100%;
  padding: 16px;
  padding-bottom: 0;
  border-top: 1px solid ${colorPallet.gray.medium};
  background-color: #fafafa;
  flex: 1;
`;

const GalleryCaptionTitle = styled.h4`
  font-family: ${Theme.font.headings};
  font-size: 1.5rem;
  margin: 0;
`;

const GalleryCaptionSubtitle = styled.h5`
  font-family: ${Theme.font.headings};
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
`;

const GalleryCaptionDescription = styled.div`
  margin: 1rem 0 0;
  font-size: 14px;
`;

class GalleryItem extends Component<GalleryItemProps> {
  render() {
    return (
      <StyledGalleryItem href={this.props.href} target="_blank">
        <GalleryFigure>
          <GalleryImageWrapper>
            <GalleryImage src={this.props.img} alt={this.props.captionTitle} />
          </GalleryImageWrapper>
          <GalleryCaption>
            <GalleryCaptionTitle>{this.props.captionTitle}</GalleryCaptionTitle>
            <GalleryCaptionSubtitle>
              {this.props.captionSubtitle}
            </GalleryCaptionSubtitle>
            <GalleryCaptionDescription>
              {this.props.description}
            </GalleryCaptionDescription>
          </GalleryCaption>
        </GalleryFigure>
      </StyledGalleryItem>
    );
  }
}

export default GalleryItem;

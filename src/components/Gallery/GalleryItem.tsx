import React, { Component } from "react";
import styled from "styled-components";
import { Theme } from "../../assets/style/Theme";

export interface GalleryItemProps {
	href: string;
	img: string;
	caption: string;
}

const StyledGalleryItem = styled.a``;

const GalleryFigure = styled.figure`
	display: flex;
	align-items: center;
	margin: 0;
	padding: 10px;
	position: relative;
	height: 100%;
`;

const GalleryImage = styled.img`
	width: 100%;
	height: auto;
`;

const GalleryCaption = styled.figcaption`
	display: none;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: rgba(0, 0, 0, 0.3);

	${GalleryFigure}:hover & {
		display: block;
	}
`;

class GalleryItem extends Component<GalleryItemProps> {
	render() {
		return (
			<StyledGalleryItem href={this.props.href} target="_blank">
				<GalleryFigure>
					<GalleryImage
						src={this.props.img}
						alt={this.props.caption}
					/>
					<GalleryCaption>{this.props.caption}</GalleryCaption>
				</GalleryFigure>
			</StyledGalleryItem>
		);
	}
}

export default GalleryItem;

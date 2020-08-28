import React, { Component } from "react";
import styled from "styled-components";

import { Theme } from "../assets/style/Theme";
import Gallery from "../components/Gallery/Gallery";
import GalleryItem from "../components/Gallery/GalleryItem";

import avatarPath from "../assets/images/thiago_boa.png";
import chiaveLogoPath from "../assets/images/chiave_logo.png";
import gfxLogoPath from "../assets/images/gfx_logo.png";
import inkLogoPath from "../assets/images/ink_logo.png";
import Container from "../components/Container/Container";

const Banner = styled.div`
  background-color: ${Theme.banner.bg};
  color: ${Theme.banner.color};
  position: relative;
`;

const BannerContent = styled.div`
  display: flex;
  align-items: flex-end;
  height: 500px;
  max-height: 80vh;
  position: relative;
  z-index: 1;
`;

const Paint = styled.div`
  background-color: ${Theme.paint.bg};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: calc((100vw - 1024px) / 2 + 350px);
`;

const Heading = styled.h1`
  font-family: ${Theme.font.headings};
  margin: 0;
  ${({ theme }) => theme};
`;

const Greeting = styled.div`
  margin-top: 48px;
  padding: 48px 32px;
  flex: 1;
`;

const Description = styled.p`
  font-size: 20px;
  max-width: 80%;
  width: 320px;
  font-weight: 300;
`;

const Avatar = styled.img`
  width: 400px;
  height: auto;
`;

const Section = styled.section`
  padding: 24px;
`;

const SectionTitle = styled.h3`
  font-family: ${Theme.font.headings};
  font-size: 2rem;
  margin: 0 0 16px;
`;

const Contact = styled.div`
  display: flex;
`;

const ContactLink = styled.a``;

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Banner>
          <Container>
            <BannerContent>
              <Avatar src={avatarPath} />
              <Greeting>
                <Heading theme={{ fontSize: "5rem" }}>
                  Design &lt;&gt; Code
                </Heading>
                <Heading
                  as="h2"
                  theme={{ fontSize: "2.5rem", marginTop: "48px" }}
                >
                  Hey, I'm Thiago Bôa
                </Heading>
                <Description>
                  A design technologist in love with Design Systems
                </Description>
              </Greeting>
            </BannerContent>
          </Container>
          <Paint />
        </Banner>
        <Container>
          <Section>
            <SectionTitle id="portfolio">Portfolio</SectionTitle>
            <Gallery>
              <GalleryItem
                href="https://ink.carta.com/"
                captionTitle="ink"
                captionSubtitle="Carta’s Design System"
                description={
                  <div>
                    <p>
                      One of the three designers that founded the system, I'm
                      responsible for researching, designing and developing many
                      of the core React components in the library.
                    </p>
                    <p>
                      From complex Tables with frozen columns, to delicate Date
                      Pickers, I've created and maintained a series of
                      hand-crafted composable UI elements that speed up design
                      and development across several teams since 2018.
                    </p>
                  </div>
                }
                img={inkLogoPath}
              />
              <GalleryItem
                href="http://www.gfx.adv.br/"
                captionTitle="GFX"
                captionSubtitle="Law Firm"
                description={
                  <div>
                    <p />
                  </div>
                }
                img={gfxLogoPath}
              />
              <GalleryItem
                href="https://www.lojachiave.com.br/"
                captionTitle="Chiave Store"
                captionSubtitle="Clothing ecommerce"
                description={
                  <div>
                    <p />
                  </div>
                }
                img={chiaveLogoPath}
              />
            </Gallery>
          </Section>
          <Section>
            <SectionTitle id="trajectory">Trajectory</SectionTitle>
          </Section>
          <Section>
            <SectionTitle id="contact">Contact</SectionTitle>
            <Contact>
              <ContactLink
                href="https://www.linkedin.com/in/thiagoboa/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/thiagoboa
              </ContactLink>
            </Contact>
            <Contact>
              <ContactLink href="mailto:thiagoboat@gmail.com">
                thiagoboat@gmail.com
              </ContactLink>
            </Contact>
            <Contact>
              <ContactLink href="tel:+5521998518219">
                +55 21 99851-8219
              </ContactLink>
            </Contact>
          </Section>
        </Container>
      </React.Fragment>
    );
  }
}

export default Home;

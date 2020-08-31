import React, { Component } from "react";
import styled from "styled-components";

import { Theme } from "../assets/style/Theme";
import Gallery from "../components/Gallery/Gallery";
import GalleryItem from "../components/Gallery/GalleryItem";

import Container from "../components/Container/Container";
import avatarPath from "../assets/images/thiago_boa.png";
import chiaveLogoPath from "../assets/images/chiave_logo.png";
import gfxLogoPath from "../assets/images/gfx_logo.png";
import inkLogoPath from "../assets/images/ink_logo.png";
import trajectoryPath from "../assets/images/trajectory.svg";

const Banner = styled.div`
  background-color: ${Theme.banner.bg};
  color: ${Theme.banner.color};
  position: relative;
`;

const BannerContent = styled.div`
  display: flex;
  align-items: flex-end;
  height: 360px;
  max-height: 80vh;
  position: relative;
  z-index: 1;

  @media (min-width: 768px) {
    height: 440px;
  }

  @media (min-width: 1024px) {
    height: 520px;
  }
`;

const Paint = styled.div`
  background-color: ${Theme.paint.bg};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 70px;

  @media (min-width: 768px) {
    width: calc(45% - 90px);
  }

  @media (min-width: 1024px) {
    width: calc((100vw - 1024px) / 2 + 350px);
  }
`;

const Greeting = styled.div`
  margin-top: 24px;
  padding: 24px 16px 24px 8px;
  flex: 1;

  @media (min-width: 768px) {
    margin-top: 48px;
    padding: 48px 32px;
  }
`;

const Heading = styled.h1`
  font-family: ${Theme.font.headings};
  margin: 0;
  font-size: 2rem;

  @media (min-width: 768px) {
    font-size: 3rem;
  }

  @media (min-width: 1024px) {
    font-size: 5rem;
  }
`;

const SubHeading = styled.h2`
  font-family: ${Theme.font.headings};
  margin: 0;
  font-size: 1.5rem;
  margin-top: 16px;

  @media (min-width: 768px) {
    font-size: 2rem;
  }

  @media (min-width: 1024px) {
    font-size: 2.5rem;
    margin-top: 48px;
  }
`;

const Description = styled.p`
  font-weight: 300;

  @media (min-width: 1024px) {
    font-size: 20px;
    max-width: 80%;
  }
`;

const Avatar = styled.img`
  height: auto;
  margin-left: -40px;
  width: 400px;
  max-width: 45%;

  @media (min-width: 1024px) {
    margin-left: 16px;
  }
`;

const Section = styled.section`
  padding: 24px 16px;
`;

const SectionTitle = styled.h3`
  border-bottom: 6px solid #e55563;
  font-family: ${Theme.font.headings};
  font-size: 2rem;
  margin: 0 0 16px;
`;

const TrajectorySection = styled.div`
  /* display: flex; */
`;

const TrajectoryImage = styled.img`
  display: block;
  margin: 0 auto;
  max-width: 100%;
`;

const TrajectoryText = styled.div`
  margin-top: 24px;
  font-size: 20px;
`;

const Caption = styled.p`
  color: #707070;
  font-size: 1rem;
  text-align: center;
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
                <Heading>Design &lt;&gt; Code</Heading>
                <SubHeading>Hey, I'm Thiago Bôa</SubHeading>
                <Description>
                  Experienced Design Technologist with a solid background in
                  both product design and front end development.
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
                    <p>
                      I was responsible for creating the complete visual
                      identity for GFX Law Firm. Applying it to both digital
                      medial and stationary items.
                    </p>
                    <p>
                      I've designed and developed their mobile first website and
                      implemented their social media presence.
                    </p>
                  </div>
                }
                img={gfxLogoPath}
              />
              <GalleryItem
                href="https://www.lojachiave.com.br/"
                captionTitle="Chiave Store"
                captionSubtitle="Clothing eCommerce"
                description={
                  <div>
                    <p>
                      Responsible for creating Chiave’s branding strategy and
                      its visual identity.
                    </p>
                    <p>
                      I've designed and developed their eCommerce template and
                      created their packaging and printed materials.
                    </p>
                  </div>
                }
                img={chiaveLogoPath}
              />
            </Gallery>
          </Section>
          <Section>
            <SectionTitle id="trajectory">Trajectory</SectionTitle>
            <TrajectorySection>
              <TrajectoryText>
                <p>
                  My trajectory begins in 2009. A 18-year-old that spent his
                  adolescence playing with html templates, programing languages
                  and design tools starts his bachelor in Industrial Design, in
                  the Federal University of Rio de Janeiro, Brazil. During
                  college years, I had the opportunity to participate in an
                  exchange program in Politecnico di Milano, Italy. Trough the
                  bachelor course I was able to build a strong foundation on
                  semiotics, ergonomics, composition, aesthetics, project
                  development and prototyping.
                </p>
                <p>
                  All these skills proved to be invaluable since the first job
                  opportunities as a freelancer, still during my tenure in
                  college. In the last year at university, I was invited to
                  become a full-time Front End Developer at iMusica, a company
                  part of Carlos Slim’s America Movil. I've worked there for 4
                  great years, where I was able to grow from an intern to the
                  main Javascript developer of company’s core product, Claro
                  Música — a web-based streaming platform with users across 16
                  countries in Latin America. I was responsible for
                  communicating with both the design and the engineering team to
                  deliver accessible, durable and scalable systems and
                  interfaces, developing UI components with HTML, Less and
                  jQuery. I've established pre-processed CSS and vector based
                  icons as company's standard. In 2017, my last year at iMusica,
                  I was also responsible for choosing and implementing React as
                  our framework for a brand new product called Claro RBT.
                </p>
                <TrajectoryImage src={trajectoryPath} />
                <Caption>
                  This infographic summarizes my experience with different
                  technologies over the years.
                </Caption>
                <p>
                  The contact with React and my design formation were a perfect
                  fit for Carta — a fintech born in the Bay Area that, in 2017,
                  just closed their C Round of investment, with around 250
                  employees across US and Brazil. I've started as a Producer, a
                  role that was a mix of UI/UX Designer, Product Manager and
                  Front End Developer. As the company grew, the roles and the
                  teams were becoming more specific and, after several reorgs, I
                  was assigned to a team with 2 other designers, called Platform
                  Design. Our challenge was to create a consistent user
                  experience in a rapid growing company. To address this and
                  many other technical challenges we created Ink, Carta’s Design
                  System. Composed of design principles, usage guidelines, Figma
                  prototyping tools and more than 90 modular React components,
                  Ink was made from scratch to best suit the complex pool of
                  services provided by the platform. During the following couple
                  of years, the system was adopted on more than 70% of all user
                  interfaces, saving several hours of development and assuring a
                  reliable and consistent experience for all Carta customers.
                </p>
              </TrajectoryText>
            </TrajectorySection>
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

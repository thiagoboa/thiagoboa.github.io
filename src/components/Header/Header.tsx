import React from "react";
import styled from "styled-components";
import useScrollPosition from "@react-hook/window-scroll";

import { Theme } from "../../assets/style/Theme";
import logoPath from "../../assets/images/TB_logo.svg";
import Container from "../Container/Container";

const StyledHeader = styled.header`
  background-color: ${Theme.header.bg};
  color: ${Theme.header.color};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  transition: background-color 150ms;

  ${({ theme }) => theme.scrollTop && `background-color: transparent;`}
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
`;

const Nav = styled.nav`
  display: grid;
  grid-gap: 16px;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(3, max-content);
  font-family: ${Theme.font.headings};
  font-size: 14px;

  @media (min-width: 768px) {
    grid-gap: 24px;
    font-size: 1rem;
  }
`;

const NavLink = styled.a`
  color: ${Theme.header.color};
  text-transform: uppercase;
  text-decoration: none;
`;

const Logo = styled.img`
  height: 32px;
  margin: -5px 0;
`;

const Links = [
  {
    label: "Portfolio",
    href: "#portfolio",
  },
  {
    label: "Trajectory",
    href: "#trajectory",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const Header = () => {
  const scrollY = useScrollPosition();

  return (
    <StyledHeader theme={{ scrollTop: scrollY < 50 }}>
      <Container>
        <HeaderContent>
          <Logo src={logoPath} />
          <Nav>
            {Links.map((Link) => (
              <NavLink key={Link.href} href={Link.href} target="_self">
                {Link.label}
              </NavLink>
            ))}
          </Nav>
        </HeaderContent>
      </Container>
    </StyledHeader>
  );
};

export default Header;

import React from "react";
import styled from "styled-components";
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
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 24px;
`;

const Nav = styled.nav`
  display: grid;
  grid-gap: 24px;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(3, 1fr);
  font-family: ${Theme.font.headings};
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

function Header() {
  return (
    <StyledHeader>
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
}

export default Header;

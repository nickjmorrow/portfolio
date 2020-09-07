// external
import React from "react";
import styled, { keyframes } from "styled-components";
import { theme } from "modules/theming";
import { SlideInFade } from "modules/core/SlideInFade";
import { Typography } from "modules/core/Typography";
import { enterTimeouts } from "modules/core/enterTimeouts";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const Landing: React.FC = () => {
  return (
    <Container>
      <NavLinkContainer>
        {navLinks.map(nl => (
          <SlideInFade enterTimeout={nl.enterTimeout}>
            <AnchorLink
              href={`#${nl.label}`}
              style={{ textDecoration: "none" }}
            >
              <NavLink>{nl.label}</NavLink>
            </AnchorLink>
          </SlideInFade>
        ))}
      </NavLinkContainer>
      <BackgroundContainer>
        <SlideInFade enterTimeout={enterTimeouts.name}>
          <Name>Lorem Ipsum</Name>
        </SlideInFade>
      </BackgroundContainer>
    </Container>
  );
};

const navLinks = [
  {
    label: "about",
    enterTimeout: enterTimeouts.about
  },
  {
    label: "projects",
    enterTimeout: enterTimeouts.projects
  },
  {
    label: "experiences",
    enterTimeout: enterTimeouts.experiences
  },
  {
    label: "contact",
    enterTimeout: enterTimeouts.contact
  }
];

const NavLink = styled(Typography)`
  color: ${theme.neutralColor.cs1};
  display: block;
`;

const NavLinkContainer = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: row;
  gap: ${theme.spacing.ss4};
  margin-top: ${theme.spacing.ss4};
  z-index: 0;
`;

const animate = keyframes`
  to {
    background-position: 50% 50%;
  }
`;

const BackgroundContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  position: fixed;
  z-index: -2;
  width: 100%;
  animation: ${animate} 5s infinite alternate;
  background: radial-gradient(
        circle at top left,
        hsla(334, 100%, 50%, 0.4) 10%,
        transparent 80%
      )
      100% 100%/200% 200%,
    radial-gradient(circle at bottom left, #6a00ff 30%, transparent 80%) 100%
      100%/200% 200%,
    radial-gradient(
        circle at top right,
        hsla(232, 90%, 61%, 0.7) 30%,
        transparent 60%
      )
      100% 100%/200% 200%,
    radial-gradient(
        circle at 75% 75%,
        hsla(155, 90%, 61%, 0.7) 10%,
        transparent 90%
      )
      100% 100%/200% 200%,
    radial-gradient(circle at 50% 50%, #ffd900 70%, transparent 100%) 100% 100%/200%
      200%;
`;

const Container = styled.div`
  height: 100vh;
  display: grid;
  align-items: center;
  swidth: 100%;
`;

const Name = styled.span`
  font-size: ${theme.fontSizes.fs9};
  font-family: ${theme.fontFamilies.title};
  color: ${theme.backgroundColor};
  margin-left: 20%;
`;

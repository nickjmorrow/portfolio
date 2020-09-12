// external
import React from "react";
import styled, { keyframes } from "styled-components";
import { theme } from "modules/theming";
import { SlideInFade } from "modules/core/SlideInFade";
import { Typography } from "modules/core/Typography";
import { enterTimeouts } from "modules/core/enterTimeouts";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Button } from "modules/core/Button";
import { animateRadialGradient } from "modules/core/animateRadialGradient";
import { radialGradient } from "modules/core/radialGradient";

export const Landing: React.FC = () => {
  return (
    <>
      <TopRight />
      <Container>
        <NavLinkContainer>
          {navLinks.map(nl => (
            <SlideInFade enterTimeout={nl.enterTimeout} key={nl.label}>
              <AnchorLink
                href={`#${nl.label}`}
                style={{ textDecoration: "none" }}
              >
                <NavLink>{nl.label}</NavLink>
              </AnchorLink>
            </SlideInFade>
          ))}
          <ResumeButton>Resume</ResumeButton>
        </NavLinkContainer>
        <BackgroundContainer>
          <SlideInFade enterTimeout={enterTimeouts.name}>
            <Name>Lorem Ipsum</Name>
          </SlideInFade>
        </BackgroundContainer>
      </Container>
    </>
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

const TopRight = styled.div`
  position: fixed;
  width: 100%;
  height: 80px;
  background-color: ${theme.neutralColor.cs9};
  transform: skewY(10deg) scale(1.2, 4) rotate(0deg);
  border-radius: 0% 0% 30% 30%;
  top: -10px;
`;

const changeBackgroundPosition = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`;

const ResumeButton = styled(Button)`
  background: linear-gradient(
    60deg,
    #f79533,
    #f37055,
    #ef4e7b,
    #a166ab,
    #5073b8,
    #1098ad,
    #07b39b,
    #6fba82
  );
  background-size: 300% 300%;
  animation: ${changeBackgroundPosition} 5s ease infinite;
`;

const NavLink = styled(Typography)`
  color: ${theme.neutralColor.cs1};
  display: block;
  padding: ${theme.spacing.ss4} ${theme.spacing.ss2};
`;

const NavLinkContainer = styled.div`
  position: fixed;
  top: 0;
  left: 80%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: row;
  gap: ${theme.spacing.ss4};
  margin-top: ${theme.spacing.ss4};
  z-index: 0;
`;

const BackgroundContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  position: fixed;
  z-index: -2;
  width: 100%;
  ${animateRadialGradient}
  ${radialGradient}
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

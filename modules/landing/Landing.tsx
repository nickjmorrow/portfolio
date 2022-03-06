// external
import { animateRadialGradient } from "modules/core/animateRadialGradient";
import { Button } from "modules/core/Button";
import { enterTimeouts } from "modules/core/enterTimeouts";
import { radialGradient } from "modules/core/radialGradient";
import { Typography } from "modules/core/Typography";
import { theme } from "modules/theming";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import styled, { keyframes } from "styled-components";

export const Landing: React.FC = () => {
  return (
    <>
      <TopRight />
      <Container>
        <NavLinkContainer>
          <InnerNavLinkContainer>
            {navLinks.map(nl => (
              <AnchorLink
                href={`#${nl.label}`}
                style={{ textDecoration: "none" }}
              >
                <NavLink>{nl.label}</NavLink>
              </AnchorLink>
            ))}
            <a download href="/resume.pdf">
              <ResumeButton>Resume</ResumeButton>
            </a>
          </InnerNavLinkContainer>
        </NavLinkContainer>
        <ColoredBackgroundContainer>
          <Name>Nicholas Morrow</Name>
        </ColoredBackgroundContainer>
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
  transform: skewY(3deg) scale(2, 4) rotate(0deg);
  border-radius: 0% 0% 30% 30%;
  top:-50px;
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
  display: block;
  padding: ${theme.spacing.ss4} ${theme.spacing.ss2};
  color: ${theme.neutralColor.cs1};
`;

const NavLinkContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  top: 0px;
  width: 100%;
  background-color: ${theme.neutralColor.cs9};
`;

const InnerNavLinkContainer = styled.div`
    display: flex;
    gap: 0px ${theme.spacing.ss8};
    padding: ${theme.spacing.ss8} ${theme.spacing.ss8};
`;

const ColoredBackgroundContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  position: fixed;
  z-index: -1;
  width: 100%;
  ${animateRadialGradient}
  ${radialGradient}
`;

const Container = styled.div`
  height: 100vh;
`;

const Name = styled.span`
  font-size: ${theme.fontSizes.fs11};
  font-family: ${theme.fontFamilies.title};
  color: ${theme.backgroundColor};
  margin-left: 15%;
  font-weight: 700;
  letter-spacing: 2px;
  position: relative;
`;

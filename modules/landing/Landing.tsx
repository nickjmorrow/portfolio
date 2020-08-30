// external
import React from "react";
import styled, { keyframes } from "styled-components";
import { Diagonal } from "modules/core/Diagonal";
import { diagonalColors } from "modules/core/diagonalColors";
import { Image } from "modules/landing/Image";
import { theme } from "modules/theming";

export const Landing: React.FC = () => {
  return (
    <Container>
      <BackgroundContainer>
        <Name>Nicholas Morrow</Name>
        {/* <Image /> */}
      </BackgroundContainer>
      {/* <Diagonal colorScheme={diagonalColors.gray} variant={"alternate"}>
        About
      </Diagonal> */}
    </Container>
  );
};

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
  z-index: -1;
  width: 100%;
  animation: ${animate} 5s infinite alternate;
  background: radial-gradient(
        circle at top left,
        hsla(334, 100%, 50%, 0.7) 10%,
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
  font-family: ${theme.fontFamilies.default};
  color: ${theme.backgroundColor};
  margin-left: 20%;
`;

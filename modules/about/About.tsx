// external
import React from "react";
import styled from "styled-components";
import { diagonalColors } from "modules/core/diagonalColors";
import { Diagonal } from "modules/core/Diagonal";
import { Card } from "modules/core/Card";
import { theme } from "modules/theming";

export const About: React.FC = () => {
  return (
    <Container>
      <Title>About</Title>
      <Diagonal colorScheme={diagonalColors.warm} variant={"alternate"}>
        Experiences
      </Diagonal>
      <Card />
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
  position: relative;
  background-color: ${theme.backgroundColor};
`;

const Title = styled.span`
  font-family: ${theme.fontFamilies.default};
  font-size: ${theme.fontSizes.fs9};
`;

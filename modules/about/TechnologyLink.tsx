// external
import React from "react";
import styled from "styled-components";
import { Technology } from "modules/core/types";
import { Typography } from "modules/core/Typography";
import { theme } from "modules/theming";

export const TechnologyLink: React.FC<{
  technology: Technology;
  index: number;
}> = ({ technology, index }) => {
  return (
    <Container>
      <StyledLink index={index}>{technology.name}</StyledLink>
    </Container>
  );
};

const Container = styled.div``;

const textLightness = 20;
const textSaturation = 60;
const backgroundLightness = 80;
const backgroundSaturation = 80;

const StyledLink = styled("a")<{ index: number }>`
  color: ${p =>
    `hsla(${
      colorPairs[p.index].hue
    }, ${textSaturation}%, ${textLightness}%, 1)}`};
  font-family: ${theme.fontFamilies.default};
  background-color: ${p =>
    `hsla(${
      colorPairs[p.index].hue
    }, ${backgroundSaturation}%, ${backgroundLightness}%, 0.8)}`};
  padding: ${theme.spacing.ss2};
  border-radius: ${theme.borderRadius.br1};
  margin-bottom: ${theme.spacing.ss1};
  display: block;
  cursor: pointer;
  transition: all ${theme.transitions.fast};
  &:hover {
    transition: all ${theme.transitions.fast};
    background-color: ${p =>
      `hsla(${
        colorPairs[p.index].hue
      }, ${backgroundSaturation}%, ${backgroundLightness + 10}%, 1)}`};
    color: ${p =>
      `hsla(${colorPairs[p.index].hue}, ${textSaturation}%, ${textLightness +
        10}%, 1)}`};
  }
`;

interface ColorPair {
  hue: number;
}

const colorPairs: ColorPair[] = [
  {
    hue: 340
  },
  {
    hue: 240
  },
  {
    hue: 55
  },
  {
    hue: 120
  },
  {
    hue: 160
  },
  {
    hue: 180
  },
  {
    hue: 220
  }
];

// external
import React from "react";
import styled, { css } from "styled-components";
import { theme } from "modules/theming";
import { Experience } from "modules/core/types";
import { getHeapCodeStatistics } from "v8";

type Position = "first" | "middle" | "last";

export const ExperienceTimeline: React.FC<{
  experiences: Experience[];
  activeExperience: Experience;
  setActiveExperience: (experience: Experience) => void;
}> = ({ experiences, activeExperience, setActiveExperience }) => {
  const sortedExperiences = experiences.sort((a, b) => {
    return a.startDate < b.startDate ? 1 : -1;
  });

  const getPosition = (index: number): Position => {
    switch (index) {
      case 0:
        return "first";
      case sortedExperiences.length - 1:
        return "last";
      default:
        return "middle";
    }
  };
  return (
    <Container>
      {sortedExperiences.map((e, i) => (
        <ExperienceTimelinePart
          key={e.experienceId}
          onClick={() => setActiveExperience(e)}
          index={i}
          numEntries={sortedExperiences.length}
          isActive={e.experienceId === activeExperience.experienceId}
        >
          {e.name}
        </ExperienceTimelinePart>
      ))}
    </Container>
  );
};

type Props = { index: number; numEntries: number; isActive: boolean };

type UiState = "default" | "hover";

const getBackgroundColor = (
  { index, numEntries, isActive }: Props,
  uiState: UiState
) => {
  const hue = 240;

  const lowestLightness = 70;
  const highestLightness = 95;

  const lightnesses = new Array(numEntries).fill(null).map((e, i) => {
    const lightness =
      lowestLightness +
      (i / (numEntries - 1)) * (highestLightness - lowestLightness);
    return lightness;
  });

  const getSaturation = () => {
    if (isActive) {
      return 80;
    }
    switch (uiState) {
      case "default":
        return 20;
      case "hover":
        return 40;
    }
  };

  const colors = lightnesses.map(
    l => `hsla(${hue}, ${getSaturation()}%, ${l}%)`
  );

  const color = colors[index];

  return color;
};

const getBorderRadiusCss = ({ index, numEntries }: Props) => {
  if (index === 0) {
    return css`
    //   border-top-left-radius: ${theme.borderRadius.br1};
      border-top-right-radius: ${theme.borderRadius.br1};
    `;
  }

  if (index === numEntries - 1) {
    return css`
    //   border-bottom-left-radius: ${theme.borderRadius.br1};
      border-bottom-right-radius: ${theme.borderRadius.br1};
    `;
  }
};

const getColor = ({ isActive }: Props, uiState: UiState) => {
  if (isActive) {
    return theme.neutralColor.cs9;
  }
  switch (uiState) {
    case "default":
      return theme.neutralColor.cs7;
    case "hover":
      return theme.neutralColor.cs8;
  }
};

const getBorderColor = ({ isActive }: Props) => {
  if (isActive) {
    return theme.coreColor.cs6;
  } else {
    return theme.neutralColor.cs6;
  }
};

const ExperienceTimelinePart = styled("div")<Props>`
  padding: ${theme.spacing.ss4};
  background-color: ${p => getBackgroundColor(p, "default")};
  font-family: ${theme.fontFamilies.default};
  cursor: pointer;
  color: ${p => getColor(p, "default")};
  transition: all ${theme.transitions.fast};
  border-left: 4px solid ${p => getBorderColor(p)};
  ${p => getBorderRadiusCss(p)}
  &: hover {
    color: ${p => getColor(p, "hover")};
    background-color: ${p => getBackgroundColor(p, "hover")};
    transition: all ${theme.transitions.fast};
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${theme.spacing.ss8};
  max-width: 130px;
  opacity: 1;
`;

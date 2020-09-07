// external
import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Card } from "modules/core/Card";
import { theme } from "modules/theming";
import { Container } from "modules/core/Container";
import { diagonalColors } from "modules/core/diagonalColors";
import { Diagonal } from "modules/core/Diagonal";
import { data } from "modules/core/data";
import { Typography } from "modules/core/Typography";
import { CurrentExperience } from "modules/experiences/CurrentExperience";

export const Experiences: React.FC = () => {
  const { experiences } = data;
  const sortedExperiences = experiences.sort((a, b) => {
    return a.startDate < b.startDate ? 1 : -1;
  });
  const [activeExperience, setActiveExperience] = useState(
    sortedExperiences[0]
  );

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
    <Container id="experiences">
      <Diagonal colorScheme={diagonalColors.warm} variant={"alternate"}>
        Experiences
      </Diagonal>
      <CustomCard>
        <ExperienceTimeline>
          {sortedExperiences.map((e, i) => (
            <ExperienceTimelinePart
              key={e.experienceId}
              onClick={() => setActiveExperience(e)}
              position={getPosition(i)}
              isActive={e.experienceId === activeExperience.experienceId}
            >
              {e.name}
            </ExperienceTimelinePart>
          ))}
        </ExperienceTimeline>
        <CurrentExperience experience={activeExperience} />
      </CustomCard>
    </Container>
  );
};

type Position = "first" | "middle" | "last";

type Props = { position: Position; isActive: boolean };

const ExperienceTimelinePart = styled("div")<Props>`
  padding: ${theme.spacing.ss4};
  background-color: ${p => getBackgroundColor(p, "default")};
  font-family: ${theme.fontFamilies.default};
  cursor: pointer;
  ${p => getPositionalCss(p)}
  &: hover {
    background-color: ${p => getBackgroundColor(p, "hover")};
  }
`;

const CustomCard = styled(Card)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${theme.spacing.ss8};
  justify-content: center;
`;

type UiState = "default" | "hover";

const getBackgroundColor = (props: Props, uiState: UiState) => {
  if (props.isActive) {
    return theme.coreColor.cs4;
  }
  switch (uiState) {
    case "hover":
      return theme.coreColor.cs2;
    case "default":
      return theme.neutralColor.cs2;
  }
};

const getPositionalCss = (props: Props) => {
  switch (props.position) {
    case "first":
      return css`
        border-top-left-radius: ${theme.borderRadius.br1};
        border-top-right-radius: ${theme.borderRadius.br1};
      `;
    case "last":
      return css`
        border-bottom-left-radius: ${theme.borderRadius.br1};
        border-bottom-right-radius: ${theme.borderRadius.br1};
      `;
  }
};

const ExperienceTimeline = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${theme.spacing.ss8};
  max-width: 130px;
`;

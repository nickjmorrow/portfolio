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
import { radialGradient } from "modules/core/radialGradient";
import { animateRadialGradient } from "modules/core/animateRadialGradient";
import { GradientText } from "modules/core/GradientText";
import { ExperienceTimeline } from "modules/experiences/ExperienceTimeline";

export const Experiences: React.FC = () => {
  const { experiences } = data;
  const sortedExperiences = experiences.sort((a, b) => {
    return a.startDate < b.startDate ? 1 : -1;
  });
  const [activeExperience, setActiveExperience] = useState(
    sortedExperiences[0]
  );

  return (
    <>
      <CustomContainer id="experiences">
        <CustomCard>
          <GradientText>Experiences</GradientText>
          <Content>
            <ExperienceTimeline
              experiences={sortedExperiences}
              activeExperience={activeExperience}
              setActiveExperience={setActiveExperience}
            />
            <CurrentExperience experience={activeExperience} />
          </Content>
        </CustomCard>
        <BottomCard />
      </CustomContainer>
    </>
  );
};

const CustomContainer = styled(Container)`
  background-color: transparent;
  ${animateRadialGradient}
  ${radialGradient}
`;

const BottomCard = styled.div`
  position: absolute;
  width: 100%;
  height: 80px;
  background-color: ${theme.neutralColor.cs1};
  transform: skewY(10deg) scale(1.2, 4) rotate(-2deg);
  border-radius: 30% 0% 30% 0%;
  top: -50px;
  z-index: -1;
`;

const CustomCard = styled(Card)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: ${theme.spacing.ss8};
  justify-content: center;
  position: relative;
  top: 100px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${theme.spacing.ss8};
  justify-content: center;
`;

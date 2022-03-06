// external
import { animateRadialGradient } from "modules/core/animateRadialGradient";
import { Card } from "modules/core/Card";
import { Container } from "modules/core/Container";
import { data } from "modules/core/data";
import { GradientText } from "modules/core/GradientText";
import { radialGradient } from "modules/core/radialGradient";
import { CurrentExperience } from "modules/experiences/CurrentExperience";
import { ExperienceTimeline } from "modules/experiences/ExperienceTimeline";
import { theme } from "modules/theming";
import React, { useState } from "react";
import styled from "styled-components";
import { CardHeader } from "modules/core/CardHeader";

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
          <CardHeader>Experiences</CardHeader>
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
  min-height: 110vh;
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
  top: -150px;
  z-index: -1;
`;

const CustomCard = styled(Card)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: ${theme.spacing.ss8};
  position: relative;
  top: -20px;
  min-height: 520px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${theme.spacing.ss8};
  justify-content: center;
`;

// external
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Experience } from "modules/core/types";
import { theme } from "modules/theming";
import { Fade } from "modules/core/Fade";
import { TextLink } from "modules/core/TextLink";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const getFormattedDate = (date: Date | null): string => {
  if (date === null) {
    return "Present";
  }

  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  return `${month} ${year}`;
};

export const CurrentExperience: React.FC<{
  experience: Experience;
}> = ({ experience }) => {
  return (
    <Container>
      <Header>
        {experience.roleName} at <TextLink>{experience.name}</TextLink>
      </Header>
      <Timeline>
        {getFormattedDate(experience.startDate)} -{" "}
        {getFormattedDate(experience.endDate)}
      </Timeline>
      <ExperienceDetailList>
        {experience.experienceDetails.map(ed => (
          <ExperienceDetail key={ed.experienceDetailId}>
            {ed.description}
          </ExperienceDetail>
        ))}
      </ExperienceDetailList>
    </Container>
  );
};

const fade = keyframes`
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
`;

const Container = styled.div`
  max-width: 700px;
  animation: ${fade} 100ms ease linear;
`;

const Header = styled.span`
  font-family: ${theme.fontFamilies.default};
  margin-bottom: ${theme.spacing.ss2};
  display: block;
  font-size: ${theme.fontSizes.fs5};
  color: ${theme.neutralColor.cs9};
  font-weight: 500;
`;

const Timeline = styled.div`
  font-family: ${theme.fontFamilies.default};
  color: ${theme.neutralColor.cs7};
  font-weight: 300;
  font-size: ${theme.fontSizes.fs2};
`;

const ExperienceDetailList = styled.ul`
  margin-left: 0;
  max-width: 500px;
  padding-left: 20px;
`;

const ExperienceDetail = styled.li`
  font-family: ${theme.fontFamilies.default};
  margin-bottom: ${theme.spacing.ss4};
  line-height: ${theme.lineHeights.default};
  color: ${theme.neutralColor.cs7};
`;

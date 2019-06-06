import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import styled from "styled-components";
import { Experience as ExperienceType } from "../types";
import { Experience } from "./Experience";
import { DelayedSlideInFade } from "./shared/DelayedSlideInFade";
import { Header } from "./shared/Header";
import { Timeline } from "./Timeline";
import { useThemeContext } from "@nickjmorrow/react-component-library";

export const GatsbyQuery = graphql`
  {
    data {
      experiences {
        experienceId
        name
        roleName
		startDate
		endDate
		experienceDetails {
			experienceDetailId
			description
		}
      }
    }
  }
`;

export const ExperienceList: React.FC = () => {
  const {
    data
  } = useStaticQuery<{ data: { experiences: ExperienceType[] } }>(GatsbyQuery);
  console.log(data);
  const { experiences } = data;
  const [activeExperience, setActiveExperience] = React.useState(experiences[0]);
	const { spacing } = useThemeContext();
  return (
    <>
	<DelayedSlideInFade enterTimeout={500}>
	<Header style={{marginBottom: spacing.ss16}}>Experience</Header>
      <ExperiencesWrapper>
        <Timeline setActiveExperience={setActiveExperience} experiences={experiences} activeExperience={activeExperience}>Timeline</Timeline>
		<Experience experience={activeExperience} />
      </ExperiencesWrapper>
	  </DelayedSlideInFade>
    </>
  );
};

const ExperiencesWrapper = styled('div')`
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  margin: 0 ${p => p.horizontalMargin};
  justify-content: center;
  max-width: 800px;
  margin: 0 auto;
`;

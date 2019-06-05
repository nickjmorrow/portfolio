import { Typography, horizontalWidth } from "@nickjmorrow/react-component-library";
import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import { Experience as ExperienceType } from "../types";
import { DelayedSlideInFade } from "./shared/DelayedSlideInFade";
import { Header } from "./shared/Header";
import styled from "styled-components";
import { Experience } from "./Experience";

export const GatsbyQuery = graphql`
  {
    data {
      experiences {
        experienceId
        name
        roleName
      }
    }
  }
`;

export const ExperienceList: React.FC = () => {
  const {
    data: { experiences }
  } = useStaticQuery<{ data: { experiences: ExperienceType[] } }>(GatsbyQuery);

  return (
    <>
      <ExperiencesWrapper>
        <DelayedSlideInFade enterTimeout={500}>
          <Header>Experience</Header>
          {experiences.map(d => <Experience experience={d} />)}
        </DelayedSlideInFade>
      </ExperiencesWrapper>
    </>
  );
};

const ExperiencesWrapper = styled('div')`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 ${p => p.horizontalMargin};
`;

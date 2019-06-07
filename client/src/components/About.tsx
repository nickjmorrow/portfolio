import {
  StyleConstant,
  Typography,
  useThemeContext
} from "@nickjmorrow/react-component-library";
import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import styled from "styled-components";
import { Technology } from "../types";
import { DelayedSlideInFade } from "./shared/DelayedSlideInFade";
import { Header } from "./shared/Header";
import { TechnologyEmphasizedTypography } from "./TechnologyEmphasizedTypography";

export const GatsbyQuery = graphql`
  {
    data {
      technologies {
        name
        version
      }
    }
  }
`;

// TODO: Why am I hitting key errors when using technologyId?
export const About: React.FC = () => {
  const {
    data
  } = useStaticQuery<{ data: { technologies: Technology[] } }>(GatsbyQuery);
  if (data === null) {
	  return null;
  }
  const { technologies } = data;
  const { spacing } = useThemeContext();
  return (
    <AboutWrapper>
      <DelayedSlideInFade enterTimeout={500}>
        <Header>About</Header>
        <div style={{maxWidth: spacing.ss160}}>
          <TechnologyEmphasizedTypography text={'I enjoy using Redux. I also like using other technologies.'} />
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
          <div>
            <TechnologiesWrapper spacing={spacing}>
              {technologies.map((t, i) => (
                <TechnologyWrapper key={i}>
                  <Typography>{t.name}</Typography>
                </TechnologyWrapper>
              ))}
            </TechnologiesWrapper>
          </div>
        </div>
      </DelayedSlideInFade>
    </AboutWrapper>
  );
};

const TechnologiesWrapper = styled("ul")<{ spacing: StyleConstant<"spacing"> }>`
  display: grid;
  grid-template-columns: repeat(2, ${p => p.spacing.ss48});
  margin: 0;
  margin-top: ${p => p.spacing.ss12};
  margin-bottom: ${p => p.spacing.ss24};
`;

const TechnologyWrapper = styled.li`
  list-style-type: none;
  margin: 0;
`;

const AboutWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
`;

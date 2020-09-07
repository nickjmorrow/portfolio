// external
import React from "react";
import styled from "styled-components";
import { Project } from "modules/core/types";
import { theme } from "modules/theming";
import { Card } from "modules/core/Card";
import { Typography } from "modules/core/Typography";
import { GithubIcon } from "modules/core/icons/GithubIcon";
import { ShareIcon } from "modules/core/icons/ShareIcon";

export const OtherProject: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <Container>
      <Name>{project.name}</Name>
      <Tagline>{project.tagline}</Tagline>
      <TechnologyListContainer>
        {project.technologies.map(t => (
          <TechnologyListItem key={t.technologyId}>{t.name}</TechnologyListItem>
        ))}
      </TechnologyListContainer>
      <IconContainer>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "black" }}
        >
          <GithubIcon
            style={{
              height: "22px",
              width: "22px",
              marginTop: "-4px",
              marginRight: "6px"
            }}
          />
        </a>
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "black" }}
        >
          <ShareIcon style={{ position: "relative", top: "2px" }} />
        </a>
      </IconContainer>
    </Container>
  );
};

const Container = styled(Card)`
  width: 60%;
  max-width: 200px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

const Name = styled(Typography)`
  display: block;
  font-weight: bold;
  font-size: ${theme.fontSizes.fs6};
  color: ${theme.neutralColor.cs9};
`;

const Tagline = styled(Typography)`
  display: block;
  font-size: ${theme.fontSizes.fs5};
  line-height: ${theme.lineHeights.title};
`;

const TechnologyListContainer = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
  line-height: ${theme.lineHeights.default};
`;

const TechnologyListItem = styled.li`
  color: ${theme.neutralColor.cs9};
  font-family: ${theme.fontFamilies.monospace};
  display: inline;
  margin-right: ${theme.spacing.ss2};
`;

const IconContainer = styled.div``;

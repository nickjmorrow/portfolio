// external
import { Card } from "modules/core/Card";
import { Project } from "modules/core/types";
import { FeaturedProjectWide } from "modules/projects/FeaturedProjectWide";
import { Name } from "modules/projects/Name";
import { ProjectIcons } from "modules/projects/ProjectIcons";
import { ProjectTechnologyList } from "modules/projects/ProjectTechnologyList";
import { Tagline } from "modules/projects/Tagline";
import { theme } from "modules/theming";
import React from "react";
import Media from "react-media";
import styled from "styled-components";

export const FeaturedProject: React.FC<{ project: Project; index: number }> = ({
  project,
  index
}) => {
  const threshold = 800;
  return (
    <Media
      queries={{
        mobile: `(max-width: ${threshold - 1}px)`,
        desktop: `(min-width: ${threshold}px)`
      }}
    >
      {matches => (
        <>
          {matches.mobile && (
            <Container>
              <Name>{project.name}</Name>
              <Tagline>{project.tagline}</Tagline>
              <ProjectTechnologyList project={project} />
              <ProjectImage src={`images/${project.fileName}`} />
              <ProjectIcons project={project} />
            </Container>
          )}
          {matches.desktop && (
            <FeaturedProjectWide index={index} project={project} />
          )}
        </>
      )}
    </Media>
  );
};

const ProjectImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0.4;
  filter: blur(4px);
  z-index: -1;
`;

const Container = styled(Card)`
  width: 60%;
  max-width: 600px;
  height: 300px;
  margin: ${theme.spacing.ss12} 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

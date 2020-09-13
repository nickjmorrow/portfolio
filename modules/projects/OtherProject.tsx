// external
import React from "react";
import styled from "styled-components";
import { Project } from "modules/core/types";
import { Card } from "modules/core/Card";
import { ProjectIcons } from "modules/projects/ProjectIcons";
import { ProjectTechnologyList } from "modules/projects/ProjectTechnologyList";
import { Tagline } from "modules/projects/Tagline";
import { Name } from "modules/projects/Name";

export const OtherProject: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <Container>
      <Name>{project.name}</Name>
      <Tagline>{project.tagline}</Tagline>
      <ProjectTechnologyList project={project} />
      <ProjectIcons project={project} />
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

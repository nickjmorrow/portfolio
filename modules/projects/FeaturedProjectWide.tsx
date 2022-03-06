// external
import { Card } from "modules/core/Card";
import { Project } from "modules/core/types";
import { Name } from "modules/projects/Name";
import { ProjectIcons } from "modules/projects/ProjectIcons";
import { ProjectTechnologyList } from "modules/projects/ProjectTechnologyList";
import { Tagline } from "modules/projects/Tagline";
import { theme } from "modules/theming";
import React from "react";
import styled from "styled-components";

export const FeaturedProjectWide: React.FC<{
  project: Project;
  index: number;
}> = ({ project, index }) => {
  const alignment = index % 2 === 0 ? "left" : "right";
  return (
    <Container>
      <ImageContainer alignment={alignment}>
        <ProjectImage alignment={alignment} fileName={project.fileName} />
      </ImageContainer>
      <ProjectInfo alignment={alignment}>
        <Name>{project.name}</Name>
        <ProjectDetails alignment={alignment}>
          <Tagline>{project.tagline}</Tagline>
          <ProjectTechnologyList project={project} />
          <ProjectIcons project={project} />
        </ProjectDetails>
      </ProjectInfo>
    </Container>
  );
};

type Alignment = "left" | "right";

const ProjectDetails = styled("div") <{ alignment: Alignment }>`
  background-color: ${theme.backgroundColor};
  padding: ${theme.spacing.ss4};
  border-radius: ${theme.borderRadius.br1};
  background-color: ${theme.neutralColor.cs2};
  display: flex;
  flex-direction: column;
  align-items: ${({ alignment }) =>
    alignment === "right" ? "flex-end" : "flex-start"};
  z-index: 2;
  box-shadow: ${theme.boxShadow.bs2};
`;

const ProjectInfo = styled("div") <{ alignment: Alignment }>`
  grid-row: 1;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.ss8};
  ${({ alignment }) => `
	text-align: ${alignment};
	align-items: ${alignment === "right" ? "flex-end" : "flex-start"};
	grid-column: ${alignment === "right" ? "6 / -1" : "1 / 8"};
  `}
`;

const ImageContainer = styled("div") <{ alignment: Alignment }>`
  height: 120%;
  grid-column: ${({ alignment }) =>
    alignment === "right" ? "1 / 7" : "7 / -1"};
  grid-row: 1;
  overflow: hidden;
  border-radius: 8px;
  z-index: 1;
`;

const ProjectImage = styled("div") <{ fileName: string; alignment: Alignment }>`
  grid-column: 1 / 8;
  grid-row: 1;
  width: 90%;
  height: 120%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: linear-gradient(
      hsla(200, 100%, 50%, 0.5),
      hsla(253, 100%, 50%, 0.5)
    ),
    url("images/${p => p.fileName}");
  background-size: cover;
  filter: blur(4px);
transform: scale(1.3);
transition: all ${theme.transitions.medium};
&:hover {
	filter: blur(0px);
	transition: all ${theme.transitions.medium};
	transform: scale(1.4);
	background-image: linear-gradient(
		hsla(200, 50%, 50%, 0.2),
		hsla(253, 50%, 50%, 0.2)
	  ),
	  url("images/${p => p.fileName}");
}
`;

const Container = styled(Card)`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  width: 80%;
  align-items: center;
  box-shadow: none;
`;

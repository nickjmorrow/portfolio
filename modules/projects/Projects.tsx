// external
import React from "react";
import styled from "styled-components";
import { Diagonal } from "modules/core/Diagonal";
import { diagonalColors } from "modules/core/diagonalColors";
import { Card } from "modules/core/Card";
import { theme } from "modules/theming";
import { Container } from "modules/core/Container";
import { data } from "modules/core/data";
import { Project } from "modules/core/types";
import { FeaturedProject } from "modules/projects/FeaturedProject";
import { OtherProject } from "modules/projects/OtherProject";

export const Projects: React.FC = () => {
  return (
    <Container id="projects">
      <Diagonal colorScheme={diagonalColors.soft} variant={"default"}>
        Projects
      </Diagonal>
      <FeaturedProjectListContainer>
        {data.projects
          .sort(byOrderId)
          .filter((p, i) => i < 3)
          .map(p => (
            <FeaturedProject project={p} key={p.projectId} />
          ))}
      </FeaturedProjectListContainer>
      <OtherProjectListContainer>
        {data.projects
          .sort(byOrderId)
          .filter((p, i) => i >= 3)
          .map(p => (
            <OtherProject project={p} key={p.projectId} />
          ))}
      </OtherProjectListContainer>
    </Container>
  );
};

const byOrderId = (a: Project, b: Project) => (a.orderId < b.orderId ? -1 : 1);

const FeaturedProjectListContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const OtherProjectListContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 700px;
  gap: ${theme.spacing.ss8};
`;

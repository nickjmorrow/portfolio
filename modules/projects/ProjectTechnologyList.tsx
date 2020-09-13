// external
import React from "react";
import styled from "styled-components";
import { Project } from "modules/core/types";
import { theme } from "modules/theming";

export const ProjectTechnologyList: React.FC<{ project: Project }> = ({
  project
}) => {
  return (
    <TechnologyListContainer>
      {project.technologies.map(t => (
        <TechnologyListItem key={t.technologyId}>{t.shortName ?? t.name}</TechnologyListItem>
      ))}
    </TechnologyListContainer>
  );
};

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

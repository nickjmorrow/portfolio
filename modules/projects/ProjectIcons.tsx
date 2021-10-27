// external
import React from "react";
import styled, { css } from "styled-components";
import { GithubIcon } from "modules/core/icons/GithubIcon";
import { ShareIcon } from "modules/core/icons/ShareIcon";
import { Project } from "modules/core/types";
import { theme } from "modules/theming";

export const ProjectIcons: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <IconContainer>
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "black" }}
      >
        <HoverableGithubIcon
          style={{
            height: "22px",
            width: "22px",
            marginTop: "-4px",
            marginRight: "6px"
          }}
        />
      </a>
      <a href={project.demoUrl!} target="_blank" rel="noopener noreferrer">
        <HoverableShareIcon style={{ position: "relative", top: "2px" }} />
      </a>
    </IconContainer>
  );
};

const IconContainer = styled.div``;

const hoverableCss = css`
  color: ${theme.neutralColor.cs9};
  transition: all ${theme.transitions.fast};
  &:hover {
    transition: all ${theme.transitions.fast};
    color: ${theme.coreColor.cs5};
  }
`;

const HoverableGithubIcon = styled(GithubIcon)`
  ${hoverableCss}
`;

const HoverableShareIcon = styled(ShareIcon)`
  ${hoverableCss}
`;

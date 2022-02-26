// external
import { Project } from "modules/core/types";
import { FeaturedProjectWide } from "modules/projects/FeaturedProjectWide";
import React from "react";

export const FeaturedProject: React.FC<{ project: Project; index: number }> = ({
  project,
  index
}) => {
  return (
    <FeaturedProjectWide index={index} project={project} />
  );
};


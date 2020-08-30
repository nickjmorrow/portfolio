import { Project, Experience, Technology } from "modules/core/types";

interface Data {
  projects: Project[];
  experiences: Experience[];
  technologies: Technology[];
}

export const data: Data = {
  projects: [],
  experiences: [],
  technologies: []
};

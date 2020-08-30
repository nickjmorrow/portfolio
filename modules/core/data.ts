import { Project, Experience, Technology } from "modules/core/types";

interface Data {
  projects: Project[];
  experiences: Experience[];
  technologies: Technology[];
}

const react: Technology = {
  technologyId: 1,
  name: "React.js",
  orderId: 1,
  version: "16.8"
};

const nodejs: Technology = {
  technologyId: 2,
  name: "Node.js",
  orderId: 2,
  version: null
};

const postgres: Technology = {
  technologyId: 3,
  name: "Postgres",
  orderId: 3,
  version: null
};

const htmlCss: Technology = {
  technologyId: 4,
  name: "HTML & CSS",
  orderId: 4,
  version: null
};

const typescript: Technology = {
  technologyId: 5,
  name: "TypeScript",
  orderId: 5,
  version: null
};

const csharp: Technology = {
  technologyId: 6,
  name: "C#",
  orderId: 6,
  version: null
};

export const data: Data = {
  projects: [],
  experiences: [],
  technologies: [react, nodejs, postgres, htmlCss, typescript, csharp]
};

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
  orderId: -1,
  version: null
};

const csharp: Technology = {
  technologyId: 6,
  name: "C# / .NET",
  shortName: ".NET",
  highlightedNames: ["C#", ".NET"],
  orderId: 6,
  version: null
};

const sqlServer: Technology = {
  technologyId: 7,
  name: "SQL Server",
  orderId: 7,
  version: null
};

const tempus: Experience = {
  experienceId: 4,
  name: "Tempus",
  roleName: "Software Engineer",
  startDate: new Date(2020, 9, 28),
  endDate: null,
  companyUrl: "https://tempus.com",
  technologies: [react, typescript, nodejs],
  experienceDetails: [
    {
      experienceDetailId: 1,
      description:
        "Designed and implemented user interface testing infrastructure for React application."
    },
    {
      experienceDetailId: 2,
      description:
        "Application that would provide analytic insights using the MasterCard transaction log persisted in SQL Server and enable banks to make data-driven decisions."
    },
    {
      experienceDetailId: 3,
      description:
        "Worked in a team of 7 on a React .NET application for optimizing instance setup and automating data model configuration."
    }
  ]
};

const mastercard: Experience = {
  experienceId: 1,
  name: "Mastercard",
  roleName: "Software Quality Engineer",
  startDate: new Date(2017, 6, 7),
  endDate: new Date(2020, 0, 8),
  companyUrl: "https://mastercard.com",
  technologies: [csharp, react, typescript],
  experienceDetails: [
    {
      experienceDetailId: 1,
      description:
        "Designed and implemented user interface testing infrastructure for React application."
    },
    {
      experienceDetailId: 2,
      description:
        "Application that would provide analytic insights using the MasterCard transaction log persisted in SQL Server and enable banks to make data-driven decisions."
    },
    {
      experienceDetailId: 3,
      description:
        "Worked in a team of 7 on a React .NET application for optimizing instance setup and automating data model configuration."
    }
  ]
};

const fora: Experience = {
  experienceId: 2,
  name: "Fora",
  roleName: "Software Engineer",
  startDate: new Date(2020, 0, 8),
  endDate: null,
  companyUrl: "https://forafinancial.com",
  technologies: [csharp, react, typescript],
  experienceDetails: [
    {
      experienceDetailId: 1,
      description:
        "Designed and implemented user interface testing infrastructure for React application."
    },
    {
      experienceDetailId: 2,
      description:
        "Application that would provide analytic insights using the MasterCard transaction log persisted in SQL Server and enable banks to make data-driven decisions."
    },
    {
      experienceDetailId: 3,
      description:
        "Worked in a team of 7 on a React .NET application for optimizing instance setup and automating data model configuration."
    }
  ]
};

const bwx: Experience = {
  experienceId: 3,
  name: "BWX",
  roleName: "Engineering Intern",
  startDate: new Date(2016, 6, 10),
  endDate: new Date(2016, 7, 10),
  companyUrl: "https://bwxtechnologies.com",
  technologies: [],
  experienceDetails: [
    {
      experienceDetailId: 1,
      description:
        "Designed and implemented user interface testing infrastructure for React application."
    },
    {
      experienceDetailId: 2,
      description:
        "Application that would provide analytic insights using the MasterCard transaction log persisted in SQL Server and enable banks to make data-driven decisions."
    },
    {
      experienceDetailId: 3,
      description:
        "Worked in a team of 7 on a React .NET application for optimizing instance setup and automating data model configuration."
    }
  ]
};

const geoclustering: Project = {
  projectId: 1,
  orderId: 1,
  technologies: [csharp, react, typescript],
  name: "Geoclustering",
  tagline:
    "Cluster locations in popular cities and view optimal paths between them for better sight-seeing.",
  githubUrl: "https://github.com/nickjmorrow/geoclustering",
  demoUrl: null,
  fileName: "geoclustering.png"
};

const componentLibrary: Project = {
  projectId: 2,
  orderId: 2,
  technologies: [react, typescript, htmlCss],
  name: "Component Library",
  tagline:
    "Define design-decisions up-front with a component library while leaving space for one-off departures.",
  githubUrl: "https://github.com/nickjmorrow/react-component-library",
  demoUrl: "https://nickjmorrow.github.io/react-component-library/",
  fileName: "react_component_library.png"
};

const rankedChoice: Project = {
  projectId: 3,
  orderId: 3,
  technologies: [nodejs, react, typescript, postgres],
  name: "Ranked Choice",
  tagline:
    "Create, vote, and simulate polls that use the ranked choice voting algorithm.",
  githubUrl: "https://github.com/nickjmorrow/ranked-choice",
  demoUrl: null,
  fileName: "ranked_choice.png"
};

const breakbuilder: Project = {
  projectId: 4,
  orderId: 4,
  technologies: [react, typescript],
  name: "Breakbuilder",
  tagline: "Plan out your yearly vacation and view related analytics.",
  githubUrl: "https://github.com/nickjmorrow/breakbuilder",
  demoUrl: "https://breakbuilder.netlify.app",
  fileName: "breakbuilder.png"
};

const whereToLive: Project = {
  projectId: 5,
  orderId: 5,
  technologies: [nodejs, react, typescript],
  name: "Places To Live",
  tagline:
    "Rank places to live by useful metrics like population and job prospects.",
  githubUrl: "https://github.com/nickjmorrow/where-to-live",
  demoUrl: null,
  fileName: "where_to_live.png"
};

const weworkScheduler: Project = {
  projectId: 6,
  orderId: 6,
  technologies: [nodejs, react, typescript],
  name: "WeWork Scheduler",
  tagline: "Randomized chore scheduling for the Mastercard WeWork office.",
  githubUrl: "https://github.com/nickjmorrow/wework-scheduler",
  demoUrl: null,
  fileName: "wework_scheduler.png"
};

const blog: Project = {
  projectId: 7,
  orderId: 7,
  technologies: [react, typescript],
  name: "Blog",
  tagline:
    "Personal blog to jot down thoughts on technology, software, and general development.",
  githubUrl: "https://github.com/nickjmorrow/blog",
  demoUrl: "https://alterview.io",
  fileName: ""
};

export const data: Data = {
  projects: [
    geoclustering,
    componentLibrary,
    rankedChoice,
    breakbuilder,
    whereToLive,
    weworkScheduler,
    blog
  ],
  experiences: [fora, mastercard, bwx, tempus],
  technologies: [
    typescript,
    react,
    nodejs,
    postgres,
    htmlCss,
    csharp,
    sqlServer
  ]
};

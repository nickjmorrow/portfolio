import { graphql, Link } from "gatsby";
import { Experience, Project, Setting, Technology } from "../types";
import React from "react";
import Main from "../components/Main";
import SEO from "../components/seo";
import { Projects } from "../components/Projects";

export const GatsbyQuery = graphql`
  {
    data {
      settings {
        settingId
        value
      }
      experiences {
        experienceId
        name
        experienceDetails {
          experienceDetailId
          description
        }
        technologies {
          technologyId
          name
          skillLevel {
            skillLevelId
            description
          }
        }
      }
      projects {
        name
        projectId
        projectDetails {
          description
        }
        technologies {
          technologyId
          name
        }
      }
      technologies {
        name
        skillLevel {
          skillLevelId
          description
        }
      }
    }
  }
`;

type Data = {
  settings: Setting[];
  experiences: Experience[];
  projects: Project[];
  technologies: Technology[];
};

const IndexPage = ({ data }: { data: Data }) => {
  return (
    <Main>
      <SEO
        title="Home"
        keywords={[`gatsby`, `application`, `react`]}
        description={"personal portfolio"}
      />
      <Link to="/page-2/">Go to page 2</Link>
      <Projects />
    </Main>
  );
};

export default IndexPage;

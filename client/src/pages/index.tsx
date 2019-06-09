import { graphql, Link } from "gatsby";
import { Experience, Project, Setting, Technology } from "../types";
import React from "react";
import Main from "../components/Main";
import SEO from "../components/seo";
import { Projects } from "../components/Projects";
import Helmet from 'react-helmet';

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

interface Data {
  settings: Setting[];
  experiences: Experience[];
  projects: Project[];
  technologies: Technology[];
}

const IndexPage = ({ data }: { data: Data }) => {
  return (
    <Main>
		<Helmet title={'Nick J Morrow'}><title>Nick J Morrow</title></Helmet>
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

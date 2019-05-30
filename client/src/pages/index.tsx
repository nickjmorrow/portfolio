import { graphql, Link } from "gatsby";
import {
	Experience,
	Project,
	Setting,
	Technology
} from "../types";
import React from "react";
import Layout from "../components/layout";
import { Projects } from "../components/Projects";
import SEO from "../components/seo";

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
		<Layout>
			<SEO
				title="Home"
				keywords={[`gatsby`, `application`, `react`]}
				description={"personal portfolio"}
			/>
			<Link to="/page-2/">Go to page 2</Link>
			<Projects />
		</Layout>
	);
};

export default IndexPage;

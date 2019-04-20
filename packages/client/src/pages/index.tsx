import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

export const GatsbyQuery = graphql`
	{
		server {
			settings {
				settingId
				value
			}
			experiences {
				experienceId
				name
				experienceDetails {
					description
				}
				technologies {
					name
				}
			}
			projects {
				name
				projectId
				projectDetails {
					description
				}
				technologies {
					name
				}
			}
			technologies {
				name
				skillLevel {
					description
				}
			}
		}
	}
`;

const IndexPage = ({ data }) => {
	console.log(data);
	return (
		<Layout>
			<SEO
				title="Home"
				keywords={[`gatsby`, `application`, `react`]}
				description={"personal portfolio"}
			/>
			<Link to="/page-2/">Go to page 2</Link>
		</Layout>
	);
};

export default IndexPage;

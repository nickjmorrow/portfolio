import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

export const GatsbyQuery = graphql`
	{
		users {
			users {
				name
				userId
			}
		}
	}
`;

const IndexPage = ({ data }) => {
	console.log(data.users);
	return (
		<Layout>
			<SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
			<Link to="/page-2/">Go to page 2</Link>
		</Layout>
	);
};

export default IndexPage;

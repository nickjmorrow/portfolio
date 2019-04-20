import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

export const GatsbyQuery = graphql`
	{
		data {
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
		}
	}
`;

export const Projects: React.FC = () => {
	const data = useStaticQuery(GatsbyQuery);
	console.log(data);
	return <div>Projects</div>;
};

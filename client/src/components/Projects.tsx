import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Project } from "../types";

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
	const {
		data: { projects }
	} = useStaticQuery<{ data: { projects: Project[] } }>(GatsbyQuery);
	console.log(projects);
	// return <div>Hello</div>;
	return (
		<>
			{projects.map(d => (
				<div key={d.projectId + 1}>{d.name}</div>
			))}
		</>
	);
};

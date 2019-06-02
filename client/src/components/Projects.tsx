import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Project } from "../types";
import { Header } from "./shared/Header";

export const GatsbyQuery = graphql`
	{
		data {
			projects {
				projectId
				name
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
	
	return (
		<>
			<Header>Work</Header>
			{projects.map(d => (
				<div key={d.projectId}>{d.name}</div>
			))}
		</>
	);
};

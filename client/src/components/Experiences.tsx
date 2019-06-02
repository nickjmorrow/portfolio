import * as React from 'react'
import { Header } from './shared/Header';
import { graphql, useStaticQuery } from 'gatsby';
import { Experience } from '../types';


export const GatsbyQuery = graphql`
	{
		data {
			experiences {
				experienceId
				name
				roleName
			}
		}
	}
`;

export const Experiences: React.FC = () => {
	const {
		data: { experiences }
	} = useStaticQuery<{ data: { experiences: Experience[] } }>(GatsbyQuery);
	
	return (
		<>
			<Header>Work</Header>
			{experiences.map(d => (
				<div key={d.experienceId}>{d.name}</div>
			))}
		</>
	);
};

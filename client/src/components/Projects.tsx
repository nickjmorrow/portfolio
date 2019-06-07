import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Project } from '../types';
import { Header } from './shared/Header';
import { Typography } from '@nickjmorrow/react-component-library';
import styled from 'styled-components';
import { DelayedSlideInFade } from './shared/DelayedSlideInFade';
import { FeaturedProjectList } from './FeaturedProjectList';
import { NUM_FEATURED_PROJECTS } from '../constants';
import { OtherProjectList } from './OtherProjectList';

export const GatsbyQuery = graphql`
	{
		data {
			projects {
				projectId
				name
				orderId
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
		data
	} = useStaticQuery<{ data: { projects: Project[] } }>(GatsbyQuery);
	if (data === null) {
		return null;
	}
	const { projects } = data;
	const sortedProjects = projects
							.sort((a, b) => (a.orderId > b.orderId ? 1 : -1));
							
	const featuredProjects = sortedProjects
		.filter((p, i) => i < NUM_FEATURED_PROJECTS);
	
	const otherProjects = sortedProjects
		.filter((p, i) => i >= NUM_FEATURED_PROJECTS);

	return (
		<>
			<ProjectsWrapper>
				<DelayedSlideInFade enterTimeout={0}>
					<Header style={{marginBottom: '64px'}}>Work</Header>
					<FeaturedProjectList
						projects={featuredProjects}
					/>
					<OtherProjectList projects={otherProjects}/>
				</DelayedSlideInFade>
			</ProjectsWrapper>
		</>
	);
};

const ProjectsWrapper = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	margin-bottom: 64px;
`;

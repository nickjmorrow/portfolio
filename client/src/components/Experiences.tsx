import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';
import { Experience as ExperienceType } from '../types';
import { Experience } from './Experience';
import { DelayedSlideInFade } from './shared/DelayedSlideInFade';
import { Header } from './shared/Header';
import { Timeline } from './Timeline';
import { useThemeContext, Typography, Theme } from '@nickjmorrow/react-component-library';

export const GatsbyQuery = graphql`
	{
		data {
			experiences {
				experienceId
				name
				roleName
				startDate
				endDate
				experienceDetails {
					experienceDetailId
					description
				}
			}
		}
	}
`;

export const Experiences: React.FC = () => {
	const { data } = useStaticQuery<{ data: { experiences: ExperienceType[] } }>(GatsbyQuery);
	console.log(data);
	if (data === null) {
		return null;
	}
	const { experiences } = data;
	const [activeExperience, setActiveExperience] = React.useState(experiences.find(e => e.endDate === null)!);
	const theme = useThemeContext();

	return (
		<Wrapper theme={theme}>
			<ExperienceListWrapper theme={theme}>
				<Header id={'experience'} link={'#experience'}>
					Experience
				</Header>
				<ExperiencesWrapper theme={theme}>
					<Timeline
						setActiveExperience={setActiveExperience}
						experiences={experiences}
						activeExperience={activeExperience}
					>
						Timeline
					</Timeline>
					<Experience experience={activeExperience} />
				</ExperiencesWrapper>
			</ExperienceListWrapper>
		</Wrapper>
	);
};

const ExperiencesWrapper = styled('div')`
	display: flex;
	flex-direction: row;
	justify-content: center;
	max-width: 800px;
`;

const ExperienceListWrapper = styled('div')<{ theme: Theme }>`
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 64px;
	background-color: ${p => p.theme.colors.background};
	margin: 0 auto;
	max-width: max-content;
`;

const Wrapper = styled('section')<{ theme: Theme }>`
	position: relative;
	background-color: ${p => p.theme.colors.background};
`;

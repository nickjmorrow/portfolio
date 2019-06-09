import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';
import { Experience as ExperienceType } from '../types';
import { Experience } from './Experience';
import { DelayedSlideInFade } from './shared/DelayedSlideInFade';
import { Header } from './shared/Header';
import { Timeline } from './Timeline';
import { useThemeContext, Typography } from '@nickjmorrow/react-component-library';

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

export const ExperienceList: React.FC = () => {
	const { data } = useStaticQuery<{ data: { experiences: ExperienceType[] } }>(GatsbyQuery);
	console.log(data);
	if (data === null) {
		return null;
	}
	const { experiences } = data;
	const [activeExperience, setActiveExperience] = React.useState(experiences[0]);
	const theme = useThemeContext();
	return (
		<>
			<DelayedSlideInFade enterTimeout={500} style={{backgroundColor: theme.colors.background, position: 'relative'}}>
				<ExperienceListWrapper theme={theme} id="experience">
					<Typography link={'#experience'} weightVariant={7} sizeVariant={9} style={{ marginBottom: theme.spacing.ss16 }} id="header">
						Experience
					</Typography>
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
			</DelayedSlideInFade>
		</>
	);
};

const ExperiencesWrapper = styled('div')`
	display: flex;
	flex-direction: row;
	justify-content: center;
	max-width: 800px;

`;

const ExperienceListWrapper = styled('div')<{ theme: Theme }>`
	min-height: 100vh;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 64px;
	background-color: ${p => p.theme.colors.background};
`;

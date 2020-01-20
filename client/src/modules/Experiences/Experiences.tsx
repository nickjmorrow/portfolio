import { Theme, useThemeContext } from '@nickjmorrow/react-component-library';
import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';
import { Experience as ExperienceType } from '../../types';
import { HeaderTypography } from '../Core/Header';
import { Experience } from './Experience';
import { Timeline } from './Timeline';

export const GatsbyQuery = graphql`
	{
		data {
			experiences {
				experienceId
				name
				roleName
				startDate
				endDate
				companyUrl
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
	if (data === null) {
		return null;
	}
	const { experiences } = data;
	const [activeExperience, setActiveExperience] = React.useState(experiences.find(e => e.endDate === null)!);
	const theme = useThemeContext();

	return (
		<Wrapper theme={theme}>
			<HeaderTypography id={'experience'} link={'#experience'}>
				Experience
			</HeaderTypography>
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
		</Wrapper>
	);
};

const ExperiencesWrapper = styled('div')`
	display: flex;
	flex-direction: row;
	justify-content: center;
	max-width: 800px;
`;

const Wrapper = styled('div')<{ theme: Theme }>`
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
	max-width: ${p => p.theme.spacing.ss192};
	min-height: 75vh;
`;

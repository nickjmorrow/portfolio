import { Theme, useThemeContext } from '@nickjmorrow/react-component-library';
import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';
import { Experience as ExperienceType } from '../../types';
import { HeaderTypography } from '../Core/Header';
import { Experience } from './Experience';
import { Timeline } from './Timeline';
import { ModuleCard } from '../Core/ModuleCard';
import { ModuleWrapper } from '../Core/ModuleWrapper';

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
		<ModuleWrapper theme={theme}>
			<ModuleCard>
				<InnerInnerWrapper>
					<TimelineExperienceWrapper theme={theme}>
						<div style={{ width: '100%' }}>
							<HeaderTypography id={'experience'} Text={'#experience'}>
								Experience
							</HeaderTypography>
						</div>

						<Timeline
							setActiveExperience={setActiveExperience}
							experiences={experiences}
							activeExperience={activeExperience}
						/>

						<Experience experience={activeExperience} />
					</TimelineExperienceWrapper>
				</InnerInnerWrapper>
			</ModuleCard>
		</ModuleWrapper>
	);
};

const TimelineExperienceWrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
`;

const InnerInnerWrapper = styled.div`
	margin: 0 auto;
`;

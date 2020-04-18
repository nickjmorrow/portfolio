import { Theme, useThemeContext } from '@nickjmorrow/react-component-library';
import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';
import { Experience as ExperienceType } from '../../types';
import { HeaderTypography } from '../Core/Header';
import { Experience } from './Experience';
import { Timeline } from './Timeline';
import { pageDimensions } from '../../core/constants';

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
			<InnerWrapper>
				<InnerInnerWrapper>
					<ExperiencesWrapper theme={theme}>
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
					</ExperiencesWrapper>
				</InnerInnerWrapper>
			</InnerWrapper>
		</Wrapper>
	);
};

const ExperiencesWrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
`;

const Wrapper = styled.div`
	flex-direction: column;
	justify-content: center;
	min-height: 75vh;
	margin-top: 64px;
	padding: 0 64px;
`;

const InnerWrapper = styled.div`
	max-width: ${pageDimensions.sectionMaxWidth};
	margin: 0 auto;
`;

const InnerInnerWrapper = styled.div`
	margin: 0 auto;
`;

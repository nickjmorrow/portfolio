import { Theme, useThemeContext } from '@nickjmorrow/react-component-library';
import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';
import { Experience as ExperienceType } from '../../types';
import { HeaderTypography } from '../Core/Header';
import { Experience } from './Experience';
import { Timeline } from './Timeline';
import { PAGE_HORIZONTAL_MARGIN } from '../../core/constants';

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
					<HeaderTypography id={'experience'} link={'#experience'}>
						Experience
					</HeaderTypography>
					<ExperiencesWrapper theme={theme}>
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

const ExperiencesWrapper = styled('div')`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
`;

const Wrapper = styled('div')<{ theme: Theme }>`
	flex-direction: column;
	justify-content: center;
	margin: 16px auto;
	min-height: 75vh;
	border: 1px solid red;
`;

const InnerWrapper = styled.div`
	max-width: ${p => p.theme.njmTheme.spacing.ss192};
	margin: 0 auto;
`;

const InnerInnerWrapper = styled.div`
	margin: 0 ${p => p.theme.njmTheme.spacing.ss4};
`;

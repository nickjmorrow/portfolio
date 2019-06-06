import * as React from 'react';
import { Experience as ExperienceType, Theme } from '../types';
import styled from 'styled-components';
import { getFormattedDate } from '../utilities';
import { Typography, useThemeContext } from '@nickjmorrow/react-component-library';

// TODO: need I rename the type? is that a linting configuration?
export const Experience: React.FC<{ experience: ExperienceType }> = ({ experience }) => {
	const theme = useThemeContext();

	return (
		<ExperienceWrapper theme={theme}>
			<RoleName>
				<Typography sizeVariant={5}>{experience.roleName}</Typography>
			</RoleName>
			<OrganizationName>
				<Typography colorVariant={'secondaryDark'}>{experience.name}</Typography>
			</OrganizationName>
			<Timeframe experience={experience} />
			<ExperienceDetailList theme={theme}>
				{experience.experienceDetails.map(ed => (
					<ExperienceDetail key={ed.description}>
					<Typography>
						{ed.description}
					</Typography>
					</ExperienceDetail>
				))}
			</ExperienceDetailList>

		</ExperienceWrapper>
	);
};

const RoleName = styled.div``;

const OrganizationName = styled.div``;

export const Timeframe : React.FC<{experience: ExperienceType}> = ({experience}) => {
	return (
		<Typography colorVariant={'secondaryDark'}>
						{getFormattedDate(experience.startDate)}
						{` to `}
						{experience.endDate ? getFormattedDate(experience.endDate) : 'Present'}
					</Typography>
	);
}

const ExperienceInfoList = styled.div``;

const ExperienceInfo = styled.div``;

const ExperienceWrapper = styled('div')<{ theme: Theme }>`
	min-width: ${p => p.theme.spacing.ss96};
`;

const ExperienceDetailList = styled('ul')<{theme: Theme}>`
	margin: 0;
	margin-top: ${p => p.theme.spacing.ss6};
`;

const ExperienceDetail = styled('li')<{theme: Theme}>`
	list-style-type: none;
`;
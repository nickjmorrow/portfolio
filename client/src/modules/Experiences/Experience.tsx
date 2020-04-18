import { ArrowIcon, Link, Typography, useThemeContext } from '@nickjmorrow/react-component-library';
import * as React from 'react';
import styled from 'styled-components';
import { Experience as ExperienceType, Theme } from '../../types';
import { getFormattedDate } from '../../utilities';
import { TechnologyEmphasizedTypography } from '../Core/TechnologyEmphasizedTypography';

export const Experience: React.FC<{ experience: ExperienceType }> = ({ experience }) => {
	const theme = useThemeContext();

	return (
		<ExperienceWrapper>
			<div style={{ display: 'grid', gridAutoFlow: 'row', gridRowGap: theme.spacing.ss2 }}>
				<Typography style={{ display: 'block' }} sizeVariant={5}>
					{experience.roleName}
				</Typography>
				<Link route={experience.companyUrl}>
					<Typography colorVariant={'inherit'}>{experience.name}</Typography>
				</Link>
				<Timeframe experience={experience} />
			</div>
			<ExperienceDetailList>
				{experience.experienceDetails.map(ed => (
					<ExperienceDetail key={ed.description}>
						<BulletPointWrapper>
							<ArrowIcon style={{ position: 'relative', top: '5px' }} sizeVariant={1} />
						</BulletPointWrapper>
						<div>
							<TechnologyEmphasizedTypography text={ed.description} />
						</div>
					</ExperienceDetail>
				))}
			</ExperienceDetailList>
		</ExperienceWrapper>
	);
};

const BulletPointWrapper = styled.div`
	display: flex;
	align-items: flex-start;
	margin-right: 10px;
`;

const Timeframe: React.FC<{ experience: ExperienceType }> = ({ experience }) => (
	<Typography colorVariant={'secondaryDark'}>
		{getFormattedDate(experience.startDate)}
		{` to `}
		{experience.endDate ? getFormattedDate(experience.endDate) : 'Present'}
	</Typography>
);

const ExperienceWrapper = styled.div`
	max-width: 600px;
`;

const ExperienceDetailList = styled.ul`
	margin: 0;
	margin-top: ${p => p.theme.njmTheme.spacing.ss6};
`;

const ExperienceDetail = styled.li`
	list-style-type: none;
	display: flex;
	flex-direction: row;
`;

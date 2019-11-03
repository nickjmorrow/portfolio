import { ArrowIcon, Link, Typography, useThemeContext } from '@nickjmorrow/react-component-library';
import * as React from 'react';
import styled from 'styled-components';
import { Experience as ExperienceType, Theme } from '../../types';
import { getFormattedDate } from '../../utilities';
import { TechnologyEmphasizedTypography } from '../Core/TechnologyEmphasizedTypography';
import { DelayedSlideInFade } from '../Core/DelayedSlideInFade';

export const Experience: React.FC<{ experience: ExperienceType }> = ({ experience }) => {
	const theme = useThemeContext();

	return (
		<ExperienceWrapper theme={theme}>
			<div style={{ display: 'grid', gridAutoFlow: 'row', gridRowGap: theme.spacing.ss2 }}>
				<Typography style={{ display: 'block' }} sizeVariant={5}>
					{experience.roleName}
				</Typography>
				<Link route={experience.companyUrl}>
					<Typography colorVariant={'inherit'}>{experience.name}</Typography>
				</Link>
				<Timeframe experience={experience} />
			</div>
			<ExperienceDetailList theme={theme}>
				<DelayedSlideInFade enterTimeout={500}>
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
				</DelayedSlideInFade>
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

const ExperienceWrapper = styled('div')<{ theme: Theme }>`
	min-width: ${p => p.theme.spacing.ss96};
`;

const ExperienceDetailList = styled('ul')<{ theme: Theme }>`
	margin: 0;
	margin-top: ${p => p.theme.spacing.ss6};
`;

const ExperienceDetail = styled('li')<{ theme: Theme }>`
	list-style-type: none;
	display: flex;
	flex-direction: row;
`;

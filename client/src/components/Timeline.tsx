import { Typography, useThemeContext } from '@nickjmorrow/react-component-library';
import * as React from 'react';
import styled from 'styled-components';
import { Experience } from '../types';

type Theme = ReturnType<typeof useThemeContext>;

export const Timeline: React.FC<{ experiences: Experience[]; activeExperience: Experience; setActiveExperience: (e: Experience) => void }> = ({
	experiences,
	activeExperience,
	setActiveExperience
}) => {
	const theme = useThemeContext();
	
	return (
		<TimelineWrapper theme={theme}>
			{experiences.sort((a, b) => a.experienceId < b.experienceId ? -1 : 1).map(e => (
				<TimelineExperience key={e.experienceId} onClick={() => setActiveExperience(e)} theme={theme} isActive={e.experienceId === activeExperience.experienceId} >
					<Typography>{e.name}</Typography>
				</TimelineExperience>
			))}
		</TimelineWrapper>
	);
};

const TimelineWrapper = styled('div')<{theme: Theme}>`
	display: flex;
	flex-direction: column;
	margin-right: ${p => p.theme.spacing.ss6};
	border-radius: 60px;
	overflow: none;
	height: min-content;
`;

const TimelineExperience = styled('div')<{theme: Theme}>`
	padding: ${p => p.theme.spacing.ss3};
	background-color: ${p => p.isActive ? p.theme.colors.core.cs2 : p.theme.colors.neutral.cs2};
	border-left: ${p => p.isActive && `${p.theme.border.borderStyle.bs3} ${p.theme.colors.core.cs3}`};
	transition-property: border, background-color;
	transition-timing-function: ${p => p.theme.transitions.transitionTimingFunction};
	transition-duration: ${p => p.theme.transitions.durations.fast}ms;
	min-width: ${p => p.theme.spacing.ss48};
	cursor: pointer;
`;
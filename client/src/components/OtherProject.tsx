import * as React from 'react';
import { Project as ProjectType } from '../types';
import styled from 'styled-components';
import { useThemeContext, StyleConstant, Typography } from '@nickjmorrow/react-component-library';
import { Theme } from '@nickjmorrow/react-component-library/dist/typeUtilities';
import { DelayedSlideInFade } from './shared/DelayedSlideInFade';

// TODO: think about how and why I had to rename the type to ProjectType
export const OtherProject: React.FC<{ project: ProjectType }> = ({ project }) => {
	const theme = useThemeContext();
	return (
		<DelayedSlideInFade enterTimeout={500}>
			<OtherProjectWrapper theme={theme}>
				<Typography style={{marginBottom: theme.spacing.ss6}} sizeVariant={4} colorVariant={'primaryDark'}>{project.name}</Typography>
				<Typography>{'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track.'}</Typography>
				<Typography
					style={{ marginBottom: theme.spacing.ss6, display: 'block', bottom: '0', position: 'absolute' }}
					sizeVariant={2}
					fontFamilyVariant={'monospace'}
					colorVariant={'secondaryDark'}
				>
					{project.technologies.map(t => t.name).join(', ')}
				</Typography>
			</OtherProjectWrapper>
		</DelayedSlideInFade>
	);
};

const OtherProjectWrapper = styled('div')<{
	theme: Theme
}>`
	height: 350px;
	width: 350px;
	background-color: ${p => p.theme.colors.neutral.cs2};
	border-radius: ${p => p.theme.border.borderRadius.br1};
	padding: ${p => p.theme.spacing.ss6};
	position: relative;
	box-shadow: ${p => p.theme.boxShadow.bs2};
	transition: all ${p => p.theme.transitions.medium};
	top: 0px;
	&: hover {
		top: -4px;
		box-shadow: ${p => p.theme.boxShadow.bs3};
		transition: all ${p => p.theme.transitions.medium};
	}
`;

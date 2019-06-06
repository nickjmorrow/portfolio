import * as React from 'react';
import { Project as ProjectType } from '../types';
import styled from 'styled-components';
import { useThemeContext, StyleConstant, Typography } from '@nickjmorrow/react-component-library';

// TODO: think about how and why I had to rename the type to ProjectType
export const OtherProject: React.FC<{ project: ProjectType }> = ({ project }) => {
	const {
		colors,
		border: { borderRadius },
		spacing,
	} = useThemeContext();
	return (
		<OtherProjectWrapper borderRadius={borderRadius} spacing={spacing} colors={colors}>
			<Typography style={{marginBottom: spacing.ss6}} sizeVariant={4} colorVariant={'primaryDark'}>{project.name}</Typography>
			<Typography>{'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track.'}</Typography>
			<Typography
				style={{ marginBottom: spacing.ss6, display: 'block', bottom: '0', position: 'absolute' }}
				sizeVariant={2}
				fontFamilyVariant={'monospace'}
				colorVariant={'secondaryDark'}
			>
				{project.technologies.map(t => t.name).join(', ')}
			</Typography>
		</OtherProjectWrapper>
	);
};

const OtherProjectWrapper = styled('div')<{
	colors: StyleConstant<'colors'>;
	spacing: StyleConstant<'spacing'>;
	borderRadius: StyleConstant<'border'>['borderRadius'];
}>`
	height: 350px;
	width: 350px;
	background-color: ${p => p.colors.neutral.cs2};
	border-radius: ${p => p.borderRadius.br1};
	padding: ${p => p.spacing.ss6};
	position: relative;
`;

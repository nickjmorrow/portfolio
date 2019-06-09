import * as React from 'react';
import { Project } from '../types';
import styled from 'styled-components';
import { Typography, useThemeContext, StyleConstant, GithubIcon } from '@nickjmorrow/react-component-library';


export const FeaturedProject : React.FC<{project: Project; rightAlign: boolean}> = ({project, rightAlign}) => {
	const { spacing, colors, border: { borderRadius }, boxShadow } = useThemeContext();
	return (
	<FeaturedProjectWrapper shouldRightAlign={rightAlign}>
		<Image shouldRightAlign={rightAlign}/>
		<ProjectInfoWrapper shouldRightAlign={rightAlign}>
			<Typography styleVariant={3} style={{marginBottom: spacing.ss6}}>{project.name}</Typography>
			<Description borderRadius={borderRadius} boxShadow={boxShadow} colors={colors} spacing={spacing}><Typography>{'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.'}</Typography></Description>
			<Typography style={{marginBottom: spacing.ss6, display: 'block', maxWidth: '30%'}} sizeVariant={2} fontFamilyVariant={'monospace'}>
				{project.technologies.map(t => t.name).join(", ")}
			</Typography>
			<Links>
				<GithubIcon sizeVariant={3} colorVariant={'secondaryDark'} />
			</Links>
		</ProjectInfoWrapper>
	</FeaturedProjectWrapper>);
}

const FeaturedProjectWrapper = styled('div')<{shouldRightAlign: boolean}>`
	position: relative;
	height: 400px;
	display: flex;
	justify-content: ${p => p.shouldRightAlign ? 'flex-end' : 'flex-start'};
	align-items: center;
	margin: 0 auto 64px auto;
	max-width: 800px;
`;

const ProjectInfoWrapper = styled('div')<{shouldRightAlign: boolean}>`
	display: flex;
	align-items: ${p => p.shouldRightAlign ? 'flex-end' : 'flex-start'};
	text-align: ${p => p.shouldRightAlign ? 'right' : 'left'};
	flex-direction: column;
	z-index: 1;
`;

const Description = styled('div')<{spacing: StyleConstant<'spacing'>, colors: StyleConstant<'colors'>}>`
	background-color: ${p => p.colors.neutral.cs2};
	padding: 16px;
	border-radius: ${p => p.borderRadius.br1};
	width: 70%;
	margin-bottom: ${p => p.spacing.ss6};
	
`;

const Name = styled.div`

`;

const Links= styled.div``;

const Image = styled('div')<{shouldRightAlign: boolean}>`
	background-color: lightblue;
	opacity: 0.5;
	width: 60%;
	height: 100%;
	max-width: 400px;
	position: absolute;
	${p => p.shouldRightAlign ? 'left: 0' : 'right: 0'};
	top: 0;
	z-index: 0;
`;
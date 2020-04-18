import * as React from 'react';
import { Project } from '../../types';
import { useThemeContext, Typography, GithubIcon, ShareIcon } from '@nickjmorrow/react-component-library';
import styled from 'styled-components';
import { Image } from '../Core/Image';

export const WideProject: React.FC<{ project: Project; rightAlign: boolean }> = ({ project, rightAlign }) => {
	const theme = useThemeContext();

	const rightAlignProxy = true;
	return (
		<FeaturedProjectWrapper shouldRightAlign={rightAlignProxy}>
			<div
				style={{
					width: '75%',
					maxWidth: '700px',
					position: 'absolute',
					boxShadow: theme.boxShadow.bs1,
					borderRadius: '8px',
				}}
			>
				<Image style={{ borderRadius: '80px' }} fileName={project.fileName} url={project.demoUrl} />
			</div>
			<ProjectInfoWrapper shouldRightAlign={rightAlignProxy}>
				<Typography
					colorVariant={'primaryDark'}
					sizeVariant={5}
					weightVariant={7}
					style={{ marginBottom: theme.spacing.ss6 }}
				>
					{project.name}
				</Typography>
				<Description>
					<Typography>{project.tagline}</Typography>
				</Description>
				<Typography
					style={{ marginBottom: theme.spacing.ss6, display: 'block', maxWidth: '60%' }}
					sizeVariant={2}
					fontFamilyVariant={'monospace'}
				>
					{project.technologies.map(t => t.name).join(', ')}
				</Typography>
				<Links>
					<a href={project.githubUrl}>
						<GithubIcon sizeVariant={3} colorVariant={'secondaryDark'} style={{ display: 'block' }} />
					</a>
					<a href={project.demoUrl}>
						<ShareIcon
							sizeVariant={3}
							colorVariant={'secondaryDark'}
							style={{ transform: 'scale(1.6)', display: 'block' }}
						/>
					</a>
				</Links>
			</ProjectInfoWrapper>
		</FeaturedProjectWrapper>
	);
};

const FeaturedProjectWrapper = styled('div')<{ shouldRightAlign: boolean }>`
	position: relative;
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	height: 400px;
	justify-content: ${p => (p.shouldRightAlign ? 'flex-end' : 'flex-start')};
	align-items: center;
	margin: 96px 0;
	width: 100%;
	overflow: hidden;
`;

const ProjectInfoWrapper = styled('div')<{ shouldRightAlign: boolean }>`
	display: flex;
	grid-column: 7 / -1;
	align-items: ${p => (p.shouldRightAlign ? 'flex-end' : 'flex-start')};
	text-align: ${p => (p.shouldRightAlign ? 'right' : 'left')};
	flex-direction: column;
	min-width: ${p => p.theme.njmTheme.spacing.ss64};
	position: relative;
	right: 0;
`;

const Description = styled('div')`
	background-color: ${p => p.theme.njmTheme.colors.neutral.cs2};
	padding: 16px;
	border-radius: ${p => p.theme.njmTheme.border.borderRadius.br1};
	margin-bottom: ${p => p.theme.njmTheme.spacing.ss6};
	box-shadow: ${p => p.theme.njmTheme.boxShadow.bs1};
	z-index: 1;
`;

const Name = styled.div``;

const Links = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 60px;
`;

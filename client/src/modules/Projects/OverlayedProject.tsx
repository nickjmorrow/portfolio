import { GithubIcon, Theme, Typography, useThemeContext, ShareIcon } from '@nickjmorrow/react-component-library';
import * as React from 'react';
import styled from 'styled-components';
import { Project } from '../../types';
import { DelayedSlideInFade } from '../Core/DelayedSlideInFade';
import { Image } from '../Core/Image';

export const OverlayedProject: React.FC<{ project: Project; rightAlign: boolean }> = ({ project, rightAlign }) => {
	const theme = useThemeContext();
	const styles: React.CSSProperties = { position: 'absolute', height: '100%', width: '100%', zIndex: -1 };
	const rightAlignProxy = true;
	return (
		<FeaturedProjectWrapper shouldRightAlign={rightAlignProxy}>
			<div style={{ width: '100%', height: '100%', position: 'absolute', opacity: 0.3 }}>
				<Image styles={styles} fileName={project.fileName} url={project.demoUrl} />
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
	justify-content: ${p => (p.shouldRightAlign ? 'flex-end' : 'flex-start')};
	align-items: center;
	margin: 96px 0;
	overflow: none;
	border-radius: ${p => p.theme.njmTheme.border.borderRadius.br1};
	box-shadow: ${p => p.theme.njmTheme.boxShadow.bs1};
	transition: all ${p => p.theme.njmTheme.transitions.fast};
	top: 0px;
	&: hover {
		top: -4px;
		transition: all ${p => p.theme.njmTheme.transitions.fast};
	}
`;

const ProjectInfoWrapper = styled('div')<{ shouldRightAlign: boolean }>`
	display: flex;
	grid-column: 1 / -1;
	align-items: ${p => (p.shouldRightAlign ? 'flex-end' : 'flex-start')};
	text-align: ${p => (p.shouldRightAlign ? 'right' : 'left')};
	flex-direction: column;
	position: relative;
	padding: 24px;
`;

const Description = styled('div')`
	padding: 16px 0;
	border-radius: ${p => p.theme.njmTheme.border.borderRadius.br1};
	margin-bottom: ${p => p.theme.njmTheme.spacing.ss6};
	z-index: 1;
`;

const Name = styled.div``;

const Links = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 60px;
`;

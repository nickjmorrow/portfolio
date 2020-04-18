import * as React from 'react';
import { Project } from '../../types';
import { DelayedSlideInFade } from '../Core/DelayedSlideInFade';
import Media from 'react-media';
import { OverlayedProject } from './OverlayedProject';
import { WideProject } from './WideProject';

export const FeaturedProject: React.FC<{ project: Project; rightAlign: boolean }> = ({ project, rightAlign }) => {
	const widthDivider = 800;
	return (
		<DelayedSlideInFade enterTimeout={500}>
			<Media
				queries={{
					large: `(min-width: ${widthDivider}px)`,
					mobile: `(max-width: ${widthDivider - 1}px)`,
				}}
			>
				{matches => {
					if (matches.large) {
						return <WideProject project={project} rightAlign={true} />;
					}

					return <OverlayedProject project={project} rightAlign={true} />;
				}}
			</Media>
		</DelayedSlideInFade>
	);
};

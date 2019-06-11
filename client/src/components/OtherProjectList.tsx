import * as React from 'react'
import { Project } from '../types';
import { Typography } from '@nickjmorrow/react-component-library';
import { OtherProject } from './OtherProject';
import { DelayedSlideInFade } from './shared/DelayedSlideInFade';


export const OtherProjectList : React.FC<{projects: Project[]}> = ({projects}) => {
	return (
		<DelayedSlideInFade enterTimeout={500}>
		<div>
			<Typography styleVariant={2}>Other Projects</Typography>
		</div>
			{projects.map(p => (
				<OtherProject project={p} />
			))}
			</DelayedSlideInFade>
	);
}
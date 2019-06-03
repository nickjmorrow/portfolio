import * as React from 'react';
import { Project } from '../types';
import { Typography } from '@nickjmorrow/react-component-library';
import { FeaturedProject } from './FeaturedProject';

export const FeaturedProjectList: React.FC<{ projects: Project[] }> = ({ projects }) => {
	return (
		<>
		<div>
			<Typography styleVariant={3}>Featured Projects</Typography>
		</div>
			{projects.map(p => (
				<div>
					<FeaturedProject project={p} />
				</div>
			))}
		</>
	);
};

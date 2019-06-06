import * as React from 'react';
import { Project } from '../types';
import { Typography } from '@nickjmorrow/react-component-library';
import { FeaturedProject } from './FeaturedProject';

export const FeaturedProjectList: React.FC<{ projects: Project[] }> = ({ projects }) => {
	return (
		<>
		<Typography styleVariant={2}>Featured Projects</Typography>
			{projects.map((p, i) => (
				<div>
					
					<FeaturedProject project={p} rightAlign={i%2 === 0}/>
				</div>
			))}
		</>
	);
};

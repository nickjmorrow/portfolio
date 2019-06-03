import * as React from 'react'
import { Project } from '../types';
import { Typography } from '@nickjmorrow/react-component-library';
import { OtherProject } from './OtherProject';


export const OtherProjectList : React.FC<{projects: Project[]}> = ({projects}) => {
	return (
		<>
		<div>
			<Typography styleVariant={3}>Other Projects</Typography>
		</div>
			{projects.map(p => (
				<OtherProject project={p} />
			))}
		</>
	);
}
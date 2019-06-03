import * as React from 'react'
import { Project as ProjectType } from '../types';

// TODO: think about how and why I had to rename the type to ProjectType
export const OtherProject : React.FC<{project: ProjectType}> = ({project}) => {
	return <div>{project.name}</div>
}
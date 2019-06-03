import * as React from 'react'
import { Project } from '../types';

export const FeaturedProject : React.FC<{project: Project}> = ({project}) => {
	return <div>{project.name}</div>
}
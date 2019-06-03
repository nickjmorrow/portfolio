import * as React from 'react'
import { Experience as ExperienceType } from '../types';

// TODO: need I rename the type? is that a linting configuration?
export const Experience : React.FC<{experience: ExperienceType}> = ({experience}) => {
	return <div>{experience.name}</div>
}
import * as React from 'react';
import { TechnologyList } from './TechnologyList';
import { Header } from './shared/Header';

export const Skills: React.FC = () => {
	return (
		<div
			style={{
				margin: '0 auto',
				position: 'relative',
				minHeight: '60vh',
				display: 'flex',
				justifyContent: 'center',
				backgroundColor: 'white',
			}}
		>
			<div>
				<Header link="#skills" id="skills">
					Skills
				</Header>
				<TechnologyList />
			</div>
		</div>
	);
};

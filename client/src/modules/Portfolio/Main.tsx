import {
	ArgumentType,
	getThemeFromNewInputs,
	PopulatedFooter,
	ThemeContext,
	updateThemeInputs,
	useThemeContext,
} from '@nickjmorrow/react-component-library';
import React from 'react';
import styled from 'styled-components';
import { FOOTER_HEIGHT } from '../../constants';
import { About } from '../About/About';
import { AppBar } from '../Headline/AppBar';
import { Contact } from '../Contact/Contact';
import { Experiences } from '../Experiences/Experiences';
import { Headline } from '../Headline/Headline';
import '../Core/layout.css';
import { Projects } from '../Projects/Projects';
import { Skills } from '../Skills/Skills';

const themeInputs: ArgumentType<typeof updateThemeInputs>[0] = {
	typography: {
		fontFamily: {
			default: 'Overpass, sans-serif',
		},
		fontSizes: {
			fs1: 12,
			fs2: 16,
			fs3: 18,
			fs4: 24,
			fs5: 24,
			fs6: 24,
			fs7: 30,
			fs8: 36,
			fs9: 48,
			fs10: 60,
			fs11: 72,
		},
	},
	defaultShowBoxShadow: false,
};

export const Main: React.FC = () => {
	const theme = useThemeContext();
	return (
		<ThemeContext.Provider value={getThemeFromNewInputs(themeInputs)}>
			<Wrapper>
				<AppBar />
				<Headline />
				<main>
					<About />
					<Skills />
					<Experiences />
					<Projects />
					<Contact />
					<PopulatedFooter />
				</main>
			</Wrapper>
		</ThemeContext.Provider>
	);
};

export default Main;

const Wrapper = styled.div`
	min-height: 100vh;
	width: 100%;
	position: relative;
	display: flex;
	flex-direction: column;
	padding-bottom: ${FOOTER_HEIGHT};
`;

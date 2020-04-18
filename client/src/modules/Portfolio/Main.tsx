import {
	ArgumentType,
	getThemeFromNewInputs,
	PopulatedFooter,
	ThemeContext,
	updateThemeInputs,
} from '@nickjmorrow/react-component-library';
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { components, FOOTER_HEIGHT } from '../../core/constants/constants';
import '../Core/layout.css';
import { Headline } from '../Headline/Headline';

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
	colors: {
		neutral: {
			middleLightness: 60,
			lightnessDecrement: 15,
		},
	},
	defaultShowBoxShadow: false,
};

export const Main: React.FC = () => {
	const theme = getThemeFromNewInputs(themeInputs);
	return (
		<ThemeProvider theme={{ njmTheme: theme }}>
			<ThemeContext.Provider value={theme}>
				<Wrapper>
					<Headline />
					<main>
						{components.map(c => c.component)}
						<PopulatedFooter />
					</main>
				</Wrapper>
			</ThemeContext.Provider>
		</ThemeProvider>
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

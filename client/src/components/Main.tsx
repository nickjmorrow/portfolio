/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import {
	ArgumentType,
	Footer,
	getThemeFromNewInputs,
	ThemeContext,
	updateThemeInputs,
	useThemeContext,
	PopulatedFooter,
} from '@nickjmorrow/react-component-library';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { FOOTER_HEIGHT } from '../constants';
import { About } from './About';
import { AppBar } from './AppBar';
import { Contact } from './Contact';
import { Experiences } from './Experiences';
import { Headline } from './Headline';
import './layout.css';
import { Projects } from './Projects';

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
	const horizontalMargin = theme.spacing.ss16;
	return (
		<ThemeContext.Provider value={getThemeFromNewInputs(themeInputs)}>
			<Wrapper>
				<AppBar />
				<StyledMain spacing={theme.spacing}>
					<Headline />
					<div style={{ backgroundColor: 'white' }}>
						<About />
						<Experiences />
						<Projects />
						<Contact />
					</div>
				</StyledMain>
				<PopulatedFooter />
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

const StyledMain = styled('div')<{ spacing: StyleConstant<'spacing'> }>``;

/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import "./layout.css";
import { AppBar } from "./AppBar";
import { Experiences } from './Experiences';
import {
	Footer,
	ThemeContext,
	getThemeFromNewInputs,
	updateThemeInputs,
	ArgumentType,
	useThemeContext
} from "@nickjmorrow/react-component-library";
import { Headline } from "./Headline";
import { About } from "./About";
import { Projects } from "./Projects";
import { FOOTER_HEIGHT } from "../constants";

const themeInputs: ArgumentType<typeof updateThemeInputs>[0] = {
	typography: {
		fontFamily: {
			default: 'Overpass, sans-serif'
		}
	},
	defaultShowBoxShadow: false
};

export const Main : React.FC = () => {
	const { spacing } = useThemeContext();
	return (
		<ThemeContext.Provider value={getThemeFromNewInputs(themeInputs)}>
			<Wrapper>
				<AppBar />
				<StyledMain spacing={spacing}>
				<Headline />
				<About />
				<Experiences />
				<Projects />
				</StyledMain>
				<Footer />
			</Wrapper>
		</ThemeContext.Provider>
	);
};

Main.propTypes = {
	children: PropTypes.node.isRequired
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

const StyledMain = styled('div')<{spacing: StyleConstant<'spacing'>}>`
	margin: 0px ${p => p.spacing.ss16};
`;
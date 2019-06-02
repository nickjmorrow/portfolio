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
	ArgumentType
} from "@nickjmorrow/react-component-library";
import { Headline } from "./Headline";
import { About } from "./About";
import { Projects } from "./Projects";

const themeInputs: ArgumentType<typeof updateThemeInputs>[0] = {
	typography: {
		fontFamily: {
			default: 'Overpass, sans-serif'
		}
	}
};

export const Main : React.FC = () => {
	return (
		<ThemeContext.Provider value={getThemeFromNewInputs(themeInputs)}>
			<Wrapper>
				<AppBar />
				<Headline />
				<About />
				<Experiences />
				<Projects />
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
	height: 100vh;
`;

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
import {
	Footer,
	ThemeContext,
	getThemeFromNewInputs,
	updateThemeInputs,
	ArgumentType
} from "@nickjmorrow/react-component-library";

const themeInputs: ArgumentType<typeof updateThemeInputs>[0] = {};

const Layout = ({ children }) => {
	return (
		<ThemeContext.Provider value={getThemeFromNewInputs(themeInputs)}>
			<Wrapper>
				<AppBar />
				<div
					style={{
						margin: `0 auto`,
						maxWidth: 960,
						padding: `0px 1.0875rem 1.45rem`,
						paddingTop: 0
					}}>
					{children}
					<footer>
						© {new Date().getFullYear()}, Built with
						{` `}
						<a href="https://www.gatsbyjs.org">
							Gatsby
						</a>
					</footer>
				</div>
				<Footer />
			</Wrapper>
		</ThemeContext.Provider>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;

const Wrapper = styled.div`
	height: 100vh;
`;

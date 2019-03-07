/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { AppBar } from "./AppBar"
import styled from "styled-components"

import "./layout.css"
import { Footer } from "@nickjmorrow/react-component-library"

const Layout = ({ children }) => (
  <Wrapper>
    <AppBar />
    {children}
    <Footer />
  </Wrapper>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const Wrapper = styled.div`
  height: 100vh;
`

import {
    Typography,
    StyleConstant,
	useThemeContext,
	Button,
	Fade
} from "@nickjmorrow/react-component-library";
import { graphql, StaticQuery } from "gatsby";
import * as React from "react";
import styled from "styled-components";
import { enterTimeout } from "../constants";

export const AppBar: React.FC = () => {
	const { spacing } = useThemeContext();
    return (
        <StaticQuery
            query={graphql`
                query SiteTitleQuery {
                    site {
                        siteMetadata {
                            title
                        }
                    }
                }
            `}
            render={data => (
                <StyledAppBar spacing={spacing}>
                    <Fade in={true} appear={true} enterTimeout={enterTimeout.et1} ><Typography>About</Typography></Fade>
                    <Fade in={true} appear={true} enterTimeout={enterTimeout.et2} ><Typography>Experience</Typography></Fade>
					<Fade in={true} appear={true} enterTimeout={enterTimeout.et3} ><Typography>Work</Typography></Fade>
					<Fade in={true} appear={true} enterTimeout={enterTimeout.et4} ><Typography>Contact</Typography></Fade>
					<Fade in={true} appear={true} enterTimeout={enterTimeout.et5} ><Button styleVariant={'secondary'}>Resume</Button></Fade>
                </StyledAppBar>
            )}
        />
    );
};

const StyledAppBar = styled("div")<{ spacing: StyleConstant<"spacing"> }>`
    display: grid;
    flex-direction: row;
    justify-content: flex-end;
    grid-auto-flow: column;
    grid-column-gap: ${p => p.spacing.ss8};
	height: ${p => p.spacing.ss16};
	align-items: center;
`;

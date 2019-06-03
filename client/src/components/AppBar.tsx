import {
    Typography,
    StyleConstant,
	useThemeContext,
	Button,
	Fade,
	GetComponentProps
} from "@nickjmorrow/react-component-library";
import { graphql, StaticQuery } from "gatsby";
import * as React from "react";
import styled from "styled-components";
import { enterTimeout } from "../constants";
import { SlideInFade } from "./shared/SlideInFade";

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
                    <SlideInFade  enterTimeout={enterTimeout.et1}><Typography>About</Typography></SlideInFade>
                    <SlideInFade  enterTimeout={enterTimeout.et2} ><Typography>Experience</Typography></SlideInFade>
					<SlideInFade  enterTimeout={enterTimeout.et3} ><Typography>Work</Typography></SlideInFade>
					<SlideInFade  enterTimeout={enterTimeout.et4} ><Typography>Contact</Typography></SlideInFade>
					<SlideInFade enterTimeout={enterTimeout.et5} ><Button styleVariant={'secondary'}>Resume</Button></SlideInFade>
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
	height: ${p => p.spacing.ss24};
	align-items: center;
	position: absolute;
	right: 0;
	left: 0;
`;

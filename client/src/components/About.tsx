import * as React from "react";
import { Header } from "./shared/Header";
import {
    Typography,
    StyleConstant,
    useThemeContext
} from "@nickjmorrow/react-component-library";
import { graphql, useStaticQuery } from "gatsby";
import { Technology } from "../types";
import styled from "styled-components";
import { DelayedSlideInFade } from "./shared/DelayedSlideInFade";

export const GatsbyQuery = graphql`
    {
        data {
            technologies {
                name
                version
            }
        }
    }
`;

export const About: React.FC = () => {
    const {
        data: { technologies }
    } = useStaticQuery<{ data: { technologies: Technology[] } }>(GatsbyQuery);
    const { spacing } = useThemeContext();
    return (
        <AboutWrapper>
            <DelayedSlideInFade enterTimeout={0}>
                <Header>About</Header>
                <div>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </Typography>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. 
                    </Typography>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. 
                    </Typography>
                    <div>
                        <TechnologiesWrapper spacing={spacing}>
                            {technologies.map(t => (
                                <TechnologyWrapper>
                                    <Typography>{t.name}</Typography>
                                </TechnologyWrapper>
                            ))}
                        </TechnologiesWrapper>
                    </div>
                </div>
            </DelayedSlideInFade>
        </AboutWrapper>
    );
};

const TechnologiesWrapper = styled("ul")<{ spacing: StyleConstant<"spacing"> }>`
    display: grid;
    grid-template-columns: repeat(2, ${p => p.spacing.ss48});
    margin: 0;
    margin-top: ${p => p.spacing.ss12};
    margin-bottom: ${p => p.spacing.ss24};
`;

const TechnologyWrapper = styled.li`
    list-style-type: none;
    margin: 0;
`;

const AboutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
`;

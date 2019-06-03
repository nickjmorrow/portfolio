import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Project } from "../types";
import { Header } from "./shared/Header";
import { Typography } from "@nickjmorrow/react-component-library";
import styled from "styled-components";
import { DelayedSlideInFade } from "./shared/DelayedSlideInFade";

export const GatsbyQuery = graphql`
    {
        data {
            projects {
                projectId
                name
                projectDetails {
                    description
                }
                technologies {
                    technologyId
                    name
                }
            }
        }
    }
`;

export const Projects: React.FC = () => {
    const {
        data: { projects }
    } = useStaticQuery<{ data: { projects: Project[] } }>(GatsbyQuery);

    return (
        <>
            <ProjectsWrapper>
                <DelayedSlideInFade enterTimeout={0}>
                    <Header>Work</Header>
                    {projects.map(d => (
                        <div key={d.projectId}>
                            <Typography>{d.name}</Typography>
                        </div>
                    ))}
                </DelayedSlideInFade>
            </ProjectsWrapper>
        </>
    );
};

const ProjectsWrapper = styled.div`
    height: 90vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

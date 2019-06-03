import { Typography } from "@nickjmorrow/react-component-library";
import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import { Experience } from "../types";
import { DelayedSlideInFade } from "./shared/DelayedSlideInFade";
import { Header } from "./shared/Header";
import styled from 'styled-components';


export const GatsbyQuery = graphql`
    {
        data {
            experiences {
                experienceId
                name
                roleName
            }
        }
    }
`;

export const Experiences: React.FC = () => {
    const {
        data: { experiences }
    } = useStaticQuery<{ data: { experiences: Experience[] } }>(GatsbyQuery);

    return (
        <>
            
                <ExperiencesWrapper>
					<DelayedSlideInFade enterTimeout={500}>
					<Header>Experience</Header>
					                {experiences.map(d => (
					                    <div key={d.experienceId}>
					                        <div>
					                            <Typography>{d.name}</Typography>
					                        </div>
					                        <div>
												<Typography>{d.roleName}</Typography>
											</div>
					                    </div>
					                ))}
									</DelayedSlideInFade>
				</ExperiencesWrapper>
            
        </>
    );
};

const ExperiencesWrapper = styled.div`
	height: 90vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;
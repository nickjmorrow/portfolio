export const experienceTypeDefs = `
    type Experience {
        experienceId: Int!
        name: String!
        experienceDetails: [ExperienceDetail!]!
        technologies: [Technology!]!
    }

    type Query {
        experiences: [Experience]!
    }
`;

export const experienceTypeDefs = `
    type Experience {
        experienceId: Int!
        name: String!
        experienceDetails: [ExperienceDetail!]!
    }

    type Query {
        experiences: [Experience]!
    }
`;

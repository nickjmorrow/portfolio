export const technologyTypeDefs = `
    type Technology {
        technologyId: String!
        name: String!
        skillLevel: SkillLevel!
    }

    type Query {
        technologies: [Technology]!
    }
`;

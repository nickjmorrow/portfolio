export const technologyTypeDefs = `
    type Technology {
        technologyId: String!
        name: String!
        skillLevel: SkillLevel!
		version: String
    }

    type Query {
        technologies: [Technology]!
    }
`;

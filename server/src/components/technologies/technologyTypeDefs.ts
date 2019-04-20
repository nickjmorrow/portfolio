export const technologyTypeDefs = `
    type Technology {
        technologyId: String!
        name: String!
    }

    type Query {
        technologies: [Technology]!
    }
`;

export const technologyTypeDefs = `
    type Technology {
        technologyId: String!
        name: String!
        skillLevel: SkillLevel!
		version: String
		orderId: Int
		technologyType: TechnologyType!
    }

    type Query {
        technologies: [Technology]!
    }
`;
